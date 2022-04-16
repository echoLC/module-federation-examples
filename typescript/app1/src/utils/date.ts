import moment from "moment";

export function format (date: Date | number | string, formatStr = 'yyyy-MM-dd') {
  return moment(date).format(formatStr);
}
