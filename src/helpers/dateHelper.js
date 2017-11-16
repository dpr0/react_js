import moment from 'moment';
moment.locale('ru');
export default function formatedDate(date) {
  return moment(date, 'DD-MM-YYYY hh:mm:ss').format('DD.MM.YYYY, dddd, h:mm:ss');
}
