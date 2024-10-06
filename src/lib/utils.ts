import clsx, { ClassValue } from "clsx";
import moment from "moment-jalaali";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

function convertPersianToEnglishDigits(persianDate: any) {
  return persianDate.replace(/[۰-۹]/g, (d: any) => d.charCodeAt(0) - 1776);
}

export function convertJalaliToGregorian(jalaliDate: string) {
  const formattedDate = convertPersianToEnglishDigits(jalaliDate);
  // تاریخ شمسی را به فرمت میلادی تبدیل می‌کند
  const gregorianDate = new Date(
    moment(formattedDate, "jYYYY/jM/jD").format("YYYY-MM-DD"),
  );
  return gregorianDate;
}

export function graphQLFetch<T>(
  url: string,
  query: string,
  variables = {},
): Promise<T> {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(
      (responseJson) =>
        responseJson.data[Object.keys(responseJson.data)[0]] as Promise<T>,
    );
}

export function isValidHttpUrl(string: string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}
