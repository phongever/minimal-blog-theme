export const formatDate = (date: Date): string => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day.toString().padStart(2, "0")}-${month
    .toString()
    .padStart(2, "0")}-${year}`;
};
