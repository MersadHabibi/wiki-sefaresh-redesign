import { z, ZodType } from "zod";

export const NewExperienceSchema: ZodType<NewExperienceFormData> = z.object({
  storeName: z.string(),
  storeId: z.string(),
  product: z.string().optional(),
  orderDate: z
    .string()
    .regex(
      /^((۱۳[۰-۹]{2}|[۱-۹][۰-۹]{3})|(\d{4}))[-/](۰?[۱-۹]|۱[۰-۲]|(0?[1-9]|1[0-2]))[-/](۰?[۱-۹]|[۱۲][۰-۹]|۳[۰۱]|(0?[1-9]|[12][0-9]|3[01]))$/g,
      {
        message: "تاریخ معتبر نیست!",
      },
    )
    .optional()
    .or(z.literal("")),
  score: z.number().default(2),
  title: z
    .string()
    .min(3, { message: "عنوان باید بیشتر از ۳ حرف باشد!" })
    .max(35, { message: "عنوان باید کمتر از ۳۵ حرف باشد!" }),
  body: z.string().min(10, { message: "شرح باید بیشتر از ۱۰ حرف باشد!" }),
});

export type NewExperienceFormData = {
  storeName: string;
  storeId: string;
  product?: string;
  orderDate?: string;
  score?: number;
  title: string;
  body: string;
};

// export type ValidFieldNames = "email" | "password";
