"use client";

import { useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { NewExperienceFormData } from "./NewExperienceFormSchema";

type TProps = {
  register: UseFormRegister<NewExperienceFormData>;
  setValue: UseFormSetValue<NewExperienceFormData>;
};

export default function NewExperienceScore(props: TProps) {
  const [scoreValue, setScoreValue] = useState(1);

  useEffect(() => {
    props.setValue("score", scoreValue);
  }, [scoreValue, props]);

  return (
    <label className="form-control col-span-6 w-full md:col-span-3 lg:col-span-3">
      <div className="label pt-0">
        <span className="label-text text-base font-medium text-font-color dark:text-font-color-dark sm:text-lg">
          امتیاز
        </span>
      </div>
      <input
        value={scoreValue}
        {...props.register("score" as any, {})}
        className="hidden"
      />
      <div className="rating rating-lg gap-x-2">
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          onChange={() => setScoreValue(1)}
          defaultChecked
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          onChange={() => setScoreValue(2)}
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          onChange={() => setScoreValue(3)}
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          onChange={() => setScoreValue(4)}
        />
        <input
          type="radio"
          name="rating-8"
          className="mask mask-star-2 bg-orange-400"
          onChange={() => setScoreValue(5)}
        />
      </div>
    </label>
  );
}
