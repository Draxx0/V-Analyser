import dayjs from "dayjs";
import "dayjs/locale/en";

dayjs.locale("en");

export const formatDate = (date: string) => {
  const dayjsDate = dayjs(date);
  const formattedDate = dayjsDate.format("MMMM D, YYYY");
  return formattedDate;
};
