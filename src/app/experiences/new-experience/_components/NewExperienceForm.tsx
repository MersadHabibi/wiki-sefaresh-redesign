"use client";

import Input from "@/components/modules/Input";
import { cn, convertJalaliToGregorian } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  NewExperienceFormData,
  NewExperienceSchema,
} from "./NewExperienceFormSchema";
import StoreNameInput from "./StoreNameInput";
import NewExperienceScore from "./NewExperienceScore";
import { Suspense, useState } from "react";
import { useMutation } from "@apollo/client";
import CREATE_EXPERIENCE from "@/graphql/client/mutations/CreateExperienceMutation";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function NewExperienceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm<NewExperienceFormData>({
    resolver: zodResolver(NewExperienceSchema), // Apply the zodResolver
  });

  const [createExperience, { data, loading, error }] =
    useMutation(CREATE_EXPERIENCE);

  const router = useRouter();

  const onSubmit = async (data: NewExperienceFormData) => {
    if (isTrueStoreName) {
      clearErrors("storeName");
    } else {
      return setError(
        "storeName",
        {
          message: "فروشگاهی با این اسم وجود ندارد!",
        },
        {
          shouldFocus: false,
        },
      );
    }

    const { storeName, ...inputValues } = data;

    try {
      const res = await createExperience({
        variables: {
          input: {
            ...inputValues,
            orderDate: data.orderDate
              ? convertJalaliToGregorian(data.orderDate)
              : undefined,
            score: data.score ?? 1,
          },
        },
      });

      toast.success("تجربه با موفقیت ثبت شد.");

      router.push(`/experiences/${res.data?.createExperience?.id}`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const [isTrueStoreName, setIsTrueStoreName] = useState(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full grid-cols-6 gap-6 overflow-hidden rounded-lg bg-neutral-200 p-5 text-start dark:bg-neutral-900 sm:p-8 xl:gap-x-10 xl:gap-y-8"
      autoComplete="off">
      <Suspense>
        <StoreNameInput
          setValue={setValue}
          isTrueStoreName={isTrueStoreName}
          setIsTrueStoreName={setIsTrueStoreName}
          register={register}
          error={errors.storeName}
          setError={setError}
          clearErrors={clearErrors}
        />
      </Suspense>
      <Input
        classNames={{
          container: "col-span-6 md:col-span-3",
        }}
        name="product"
        label="محصول سفارش داده شده (اختیاری)"
        placeholder="مثال: لباس , موبایل"
        register={register}
        error={errors.product}
      />
      <Input
        dir="ltr"
        classNames={{
          container: "col-span-6 md:col-span-3 lg:col-span-3",
          input: "placeholder:text-end",
        }}
        name="orderDate"
        label="تاریخ سفارش (اختیاری)"
        placeholder="مثال: 1403/06/14"
        register={register}
        error={errors.orderDate}
      />
      <NewExperienceScore register={register} setValue={setValue} />
      <Input
        classNames={{
          container: "col-span-6 md:col-span-6",
        }}
        name="title"
        label="عنوان تجربه"
        placeholder="عنوان تجربه..."
        register={register}
        error={errors.title}
      />
      <label className="form-control col-span-6 w-full">
        <div className="label pt-0">
          <span className="label-text text-base font-medium text-font-color dark:text-font-color-dark sm:text-lg">
            شرح تجربه
          </span>
        </div>
        <textarea
          placeholder="لطفا از حرف های کلی (سفارش بدی بود) استفاده نکنید و جزئیات تجربه خود را بنویسید"
          className={cn(
            "textarea max-h-[400px] w-full bg-neutral-300 py-4 text-base placeholder:text-gray-500 dark:bg-neutral-800",
            errors.body?.message && "border-2 !border-red-500",
          )}
          {...register("body" as any)}
          rows={5}
        />
        {errors.body?.message ? (
          <p className="mt-1 text-sm text-red-500">{errors.body.message}</p>
        ) : null}
      </label>
      <button
        disabled={loading}
        className="text-font-color-white btn btn-primary col-span-6 h-12 w-full border-none bg-primary text-base font-medium text-font-color-dark disabled:bg-primary-disable">
        {loading ? (
          <span className="loading loading-spinner loading-sm text-white"></span>
        ) : (
          "ثبت تجربه"
        )}
      </button>
    </form>
  );
}
