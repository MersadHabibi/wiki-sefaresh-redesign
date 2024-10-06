import { z, ZodType } from "zod";

export const NewStoreSchema: ZodType<NewStoreFormData> = z.object({
  name: z
    .string()
    .min(3, { message: "نام فروشگاه باید بیشتر از ۳ حرف باشد!" })
    .max(25, { message: "نام فروشگاه باید کمتر از ۲۵ حرف باشد!" }),
  website: z
    .string()
    .url({ message: "لینک معتبر نیست!" })
    .optional()
    .or(z.literal("")),
  instagram: z.string().max(40).optional(),
  telegram: z.string().max(40).optional(),
  activityField: z
    .string()
    .min(3, { message: "فعالیت فروشگاه باید بیشتر از ۳ حرف باشد!" })
    .max(300, { message: "فعالیت فروشگاه باید کمتر از ۳۰۰ حرف باشد!" }),
});

export type NewStoreFormData = {
  name: string;
  website?: string;
  instagram?: string;
  telegram?: string;
  activityField: string;
};

// export type ValidFieldNames = "email" | "password";
