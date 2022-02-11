var spreadSheet,
  workSheet,
  workSheetHeaderValues,
  workSheetDataValues,
  workSheetDataObject,
  workSheetCountRow,
  workSheetCountColumn,
  workSheetHeaderRange,
  workSheetDataRange,
  workSheetDeleteEmptyColumns,
  workSheetDeleteEmptyRows,
  workSheetGetValues,
  workSheetGetRange

/**
 * @param {array} environment Array of object source [{spreadSheetName: '', sheetId: '', scriptId: '' ,area: ''}]
 */
function instance(environment) {
  new Instance(environment)
}

/**
 *
 * @param {string} spreadSheetName Name spreadsheet
 * @param {array} excludeSheetName Array exclude sheet ['name']
 * @returns {gasLib}
 */
function getSpreadSheet(spreadSheetName, excludeSheetName) {
  spreadSheet = new GasSpreadSheet(spreadSheetName, excludeSheetName).ss
}

/**
 *
 * @param {string} spreadSheetName
 * @param {string} sheetName
 * @param {number} headerRowNum
 * @param {boolean} getRowNum
 * @param {boolean} getRowHash
 */
function getWorkSheet(
  spreadSheetName,
  sheetName,
  headerRowNum,
  getRowNum,
  getRowHash
) {
  const data = new GasWorkSheet(
    spreadSheetName,
    sheetName,
    headerRowNum,
    getRowNum,
    getRowHash
  )
  spreadSheet = data.ss
  workSheet = data.ws
  workSheetHeaderValues = data.headerValues
  workSheetDataValues = data.dataValues
  workSheetDataObject = data.dataObject
  workSheetCountRow = data.countRow
  workSheetCountColumn = data.countColumn
  workSheetHeaderRange = data.headerRange
  workSheetDataRange = data.dataRange
  workSheetDeleteEmptyColumns = data.deleteEmptyColumns
  workSheetDeleteEmptyRows = data.deleteEmptyRows
}
