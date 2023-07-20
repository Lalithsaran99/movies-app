export const formatDate = (dateString: string): string => {
  const dateObject = new Date(dateString);
  const formattedDate = dateObject.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return formattedDate;
};
