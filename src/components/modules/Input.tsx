"use client";

import { cn } from "@/lib/utils";
import { FieldError, UseFormRegister } from "react-hook-form";

type TProps = {
  children?: React.ReactNode;
  label?: string;
  type?: string;
  placeholder?: string;
  name: string;
  register?: UseFormRegister<any>;
  error?:
    | FieldError
    | undefined
    | {
        message: string;
      };
  valueAsNumber?: boolean;
  classNames?: Partial<{
    input: string;
    label: string;
    container: string;
  }>;
  value?: string;
  dir?: "ltr" | "rtl";
  autoComplete?: boolean;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function Input(props: TProps) {
  return (
    <label
      htmlFor={props.name}
      className={cn("form-control w-full", props.classNames?.container)}>
      <div className="label pt-0">
        <span
          className={cn(
            "label-text text-base font-medium text-font-color dark:text-font-color-dark sm:text-lg",
            props.classNames?.label,
          )}>
          {props.label}
        </span>
      </div>
      <input
        id={props.name}
        dir={props.dir}
        autoComplete={props.autoComplete ? undefined : "off"}
        name={props.name}
        placeholder={props.placeholder}
        className={cn(
          "input w-full bg-neutral-300 placeholder:text-gray-500 dark:bg-neutral-800",
          props.classNames?.input,
          props.error?.message && "border-2 !border-red-500",
        )}
        type={props.type || "text"}
        onInput={(event) => props.onInput && props.onInput(event)}
        {...(props.register
          ? {
              ...props.register(props.name as any, {
                valueAsNumber: props.valueAsNumber,
              }),
            }
          : undefined)}
        value={props.value}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
      />
      {props.error?.message ? (
        <p className="mt-1 text-sm text-red-500">{props.error.message}</p>
      ) : null}
      {props.children}
    </label>
  );
}
