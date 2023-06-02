import dayjs from "dayjs";
import "dayjs/locale/en";
dayjs.locale("en");

export const formatDate = (date: string): string => {
  return dayjs(date).format("MMMM D, YYYY");
};
