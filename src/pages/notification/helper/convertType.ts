import { objectType } from "../types/notification";

export const convertType = (typeInt: objectType) => {
  return objectString[typeInt];
};

export interface OBJECT_RETURN_STRING {
  1: "success";
  2: "error";
  3: "warning";
  4: "info";
}
const objectString = {
  1: "success",
  2: "error",
  3: "warning",
  4: "info",
} as const;
