export const convertType = (typeInt: objectType) => {
  return objectString[typeInt];
};

interface OBJECT_RETURN_STRING {
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
};

export type objectType = keyof OBJECT_RETURN_STRING;
