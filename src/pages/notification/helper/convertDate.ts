const convert = (date: Date): string => {
  const convertDateArray = date.toString().split("T");
  const convertHours = convertDateArray[1].split(":", 2);
  const dateClean =
    convertDateArray[0].toString + convertHours.join(":") + " hrs.";
  return dateClean;
};

const convertString = (date: string): string => {
  const convertDateArray = date.split("T");
  const convertHours = convertDateArray[1].split(":", 2);
  const dateClean =
    convertDateArray[0] + " " + convertHours.join(":") + " hrs.";
  console.log(dateClean);
  return dateClean;
};

export const convertDate = {
  convert,
  convertString,
};
