import moment from "moment";
import "moment/locale/id";

moment.locale("id");

export default function formatDateWithRelative(date?: string | null): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
  if (!date) return new Date().toLocaleDateString('id-ID', options);;

  const now = moment();
  const targetDate = moment(date);

  if (now.diff(targetDate, "hours") < 24) {
    return targetDate.fromNow();
  } else if (now.diff(targetDate, "days") === 1) {
    return "Kemarin";
  } else {
    return targetDate.format("dddd, DD MMMM YYYY"); 
  }
}
