"use client";

import Input from "@/components/modules/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NewStoreFormData, NewStoreSchema } from "./NewStoreFormSchema";
import { cn } from "@/lib/utils";
import { useMutation } from "@apollo/client";
import CREATE_STORE from "@/graphql/client/mutations/CreateStoreMutation";
import toast from "react-hot-toast";
import { TError } from "@/types";
import { useRouter } from "next/navigation";

export default function NewStoreForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<NewStoreFormData>({
    resolver: zodResolver(NewStoreSchema), // Apply the zodResolver
  });

  const [createStore, { data, loading, error }] = useMutation(CREATE_STORE);

  const router = useRouter();

  const onSubmit = async (data: NewStoreFormData) => {
    try {
      const res = await createStore({
        variables: { input: { ...data, website: data.website || undefined } },
      });

      toast.success("فروشگاه با موفقیت ثبت شد.");

      router.push(`/stores/${res.data?.createStore?.id}`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid w-full grid-cols-6 gap-6 overflow-hidden rounded-lg bg-neutral-200 p-5 text-start dark:bg-neutral-900 sm:p-8 xl:gap-x-10 xl:gap-y-8">
      <Input
        classNames={{
          container: "col-span-6",
        }}
        name="name"
        label="نام فروشگاه"
        placeholder="نام فروشگاه..."
        register={register}
        error={errors.name}
      />
      <Input
        dir="ltr"
        classNames={{
          container: "col-span-6 lg:col-span-2",
        }}
        name="website"
        label="وب سایت فروشگاه (اختیاری)"
        // type="url"
        placeholder="https://website.ir"
        register={register}
        error={errors.website}
      />
      <Input
        dir="ltr"
        classNames={{
          container: "col-span-6 md:col-span-3 lg:col-span-2",
          input: "placeholder:text-end",
        }}
        name="instagram"
        label="آیدی اینستاگرام فروشگاه (اختیاری)"
        placeholder="مثال: digikalacom"
        register={register}
        error={errors.instagram}
      />
      <Input
        dir="ltr"
        classNames={{
          container: "col-span-6 md:col-span-3 lg:col-span-2",
          input: "placeholder:text-end",
        }}
        name="telegram"
        label="آیدی تلگرام فروشگاه (اختیاری)"
        placeholder="مثال: digikalacom"
        register={register}
        error={errors.telegram}
      />
      <label className="form-control col-span-6 w-full">
        <div className="label pt-0">
          <span className="label-text text-base font-medium text-font-color dark:text-font-color-dark sm:text-lg">
            فعالیت فروشگاه
          </span>
        </div>
        <textarea
          placeholder="مثال: فروشگاه لباس, فروشگاه کامپیوتر"
          className={cn(
            "textarea max-h-[400px] w-full bg-neutral-300 py-4 text-base placeholder:text-gray-500 dark:bg-neutral-800",
            errors.activityField?.message && "border-2 !border-red-500",
          )}
          {...register("activityField" as any)}
          rows={5}
        />
        {errors.activityField?.message ? (
          <p className="mt-1 text-sm text-red-500">
            {errors.activityField.message}
          </p>
        ) : null}
      </label>
      <button
        disabled={loading}
        className="btn btn-primary col-span-6 h-12 w-full border-none bg-primary text-base font-medium text-font-color-dark disabled:bg-primary-disable">
        {loading ? (
          <span className="loading loading-spinner loading-sm text-white"></span>
        ) : (
          "ثبت فروشگاه"
        )}
      </button>
    </form>
  );
}
