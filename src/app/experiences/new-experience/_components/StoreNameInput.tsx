"use client";

import Input from "@/components/modules/Input";
import GET_STORES_NAME_AND_ID from "@/graphql/client/queries/GetStoresNameAndId";
import { cn } from "@/lib/utils";
import { useQuery } from "@apollo/client";
import { redirect, useSearchParams } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  FieldError,
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { NewExperienceFormData } from "./NewExperienceFormSchema";

type TProps = {
  register: UseFormRegister<any>;
  error:
    | FieldError
    | undefined
    | {
        message: string;
      };
  setError: UseFormSetError<NewExperienceFormData>;
  clearErrors: UseFormClearErrors<NewExperienceFormData>;
  setIsTrueStoreName: Dispatch<SetStateAction<boolean>>;
  isTrueStoreName: boolean;
  setValue: UseFormSetValue<NewExperienceFormData>;
};

export default function StoreNameInput(props: TProps) {
  const searchParams = useSearchParams();
  const { loading, error, data } = useQuery(GET_STORES_NAME_AND_ID);

  const [storeName, setStoreName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [filteredStores, setFilteredStores] = useState(() =>
    data?.stores.data.filter((store) =>
      store?.name.toLowerCase().includes(storeName.toLowerCase()),
    ),
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filterAutoCompleteOptions = useCallback(
    (value: string) => {
      const filteredOptions = data?.stores.data.filter((store) =>
        store?.name.toLowerCase().includes(value.toLowerCase()),
      );

      setFilteredStores(filteredOptions);
    },
    [data?.stores],
  );

  const onKeyDownHandler = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();

        if (filteredStores && filteredStores[selectedIndex]) {
          setStoreName(filteredStores[selectedIndex]?.name);
          filterAutoCompleteOptions(filteredStores[selectedIndex].name);
          setSelectedIndex(0);
          event.currentTarget.blur();
        }
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        if (filteredStores) {
          if (selectedIndex < filteredStores.length) {
            setSelectedIndex(selectedIndex + 1);
          }
        }
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        if (selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        }
      }
    },
    [filterAutoCompleteOptions, filteredStores, selectedIndex],
  );

  useEffect(() => {
    const storeId = searchParams.get("storeId");

    if (storeId) {
      const selectedStore = data?.stores.data.find(
        (store) => store?.id == storeId,
      );

      if (selectedStore) {
        setStoreName(selectedStore?.name);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, data?.stores]);

  useEffect(() => {
    const selectedStore = data?.stores.data.find(
      (store) => store?.name === storeName,
    );

    props.setValue("storeName", selectedStore?.name || "");
    props.setValue("storeId", selectedStore?.id || "");

    if (selectedStore) props.clearErrors("storeName");

    props.setIsTrueStoreName(selectedStore ? true : false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeName, props.setIsTrueStoreName, props.clearErrors, data?.stores]);

  useEffect(() => {
    if (!loading) filterAutoCompleteOptions("");
  }, [loading, filterAutoCompleteOptions]);

  if (error) return redirect("/error");

  return (
    <Input
      classNames={{
        container: "col-span-6 md:col-span-3 relative",
        input: cn(
          props?.isTrueStoreName ? "!border-green-500" : "!border-red-500",
        ),
      }}
      name="storeName"
      label="نام فروشگاه"
      placeholder="نام فروشگاه..."
      value={storeName}
      onInput={(event) => {
        setStoreName(event.currentTarget.value || "");
        filterAutoCompleteOptions(event.currentTarget.value || "");
        setSelectedIndex(0);
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) =>
        setTimeout(() => {
          setIsFocused(false);
        }, 200)
      }
      onKeyDown={onKeyDownHandler}
      register={props.register}
      error={props.error}>
      {isFocused ? (
        <div className="absolute left-0 right-0 top-full z-10 mt-1 h-fit max-h-44 w-full overflow-y-auto rounded-md border border-neutral-400 bg-neutral-300 dark:border-neutral-600 dark:bg-neutral-800">
          {loading ? (
            <div className="flex items-center justify-center py-5">
              <span className="loading loading-spinner loading-sm text-white"></span>
            </div>
          ) : (
            <>
              {filteredStores?.map((store, index) => (
                <div
                  key={store?.id}
                  className={cn(
                    "w-full cursor-pointer px-4 py-3 text-start hover:bg-neutral-400/40",
                    selectedIndex === index && "bg-neutral-400/40",
                  )}
                  onClick={() => {
                    setStoreName(store?.name || "");
                    filterAutoCompleteOptions(store?.name || "");
                    setSelectedIndex(0);
                  }}>
                  {store?.name}
                </div>
              ))}
              {filteredStores?.length ? null : (
                <div className="w-full cursor-pointer px-4 py-3 text-start text-red-500">
                  فروشگاهی با این اسم وجود ندارد
                </div>
              )}
            </>
          )}
        </div>
      ) : null}
    </Input>
  );
}
