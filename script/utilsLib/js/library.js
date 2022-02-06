/**
 * Формирование хэш строки. Строка приводится к нижнему регистру
 *
 * @param {string} string
 */
function getHashMd5(string) {
  return new Hash(string).md5
}
