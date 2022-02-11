/**
 * Формирование хэш строки. Строка приводится к нижнему регистру
 *
 * @param {string} string
 */
function getHashMd5(string) {
  return new Hash(string).md5
}

function getDateFormat(date, timeZone, format) {
  return new DateFormat(date, timeZone).getFormatDate(format)
}

function getDateString(date, timeZone) {
  return new DateFormat(date, timeZone).str
}

function getDateYear(date, timeZone) {
  return new DateFormat(date, timeZone).year
}

function getDateMonth(date, timeZone) {
  return new DateFormat(date, timeZone).month
}

function getDateFromYYYYMMDD(YYYYMMDD) {
  return new DateFormat().getDateFromYYYYMMDD(YYYYMMDD).date
}

function getYYYYMMDDFromDate(date) {
  return new DateFormat(date).yyyymmdd
}
