var spreadSheet,
  workSheet,
  workSheetHeaderValues,
  workSheetDataValues,
  workSheetCountRow,
  workSheetCountColumn,
  workSheetHeaderRange,
  workSheetDataRange,
  workSheetDeleteEmptyColumns,
  workSheetDeleteEmptyRows

/**
 *
 * @param {array} environment Array of object source [{spreadSheetName: '', sheetId: '', scriptId: '', excludeSheetName: [] ,area: ''}]
 */
function instance(environment) {
  new Instance(environment)
}

/**
 *
 *
 * @param {string} spreadSheetName
 * @returns {gasLib}
 */
function getSpreadSheet(spreadSheetName) {
  spreadSheet = new GasSpreadSheet(spreadSheetName).ss
}

/**
 *
 *
 * @param {string} spreadSheetName
 * @param {string} sheetName
 * @param {number} headerRowNum
 * @returns {gasLib}
 */
function getWorkSheet(spreadSheetName, sheetName, headerRowNum) {
  const data = new GasWorkSheet(spreadSheetName, sheetName, headerRowNum)
  spreadSheet = data.ss
  workSheet = data.ws
  workSheetHeaderValues = data.headerValues
  workSheetDataValues = data.dataValues
  workSheetCountRow = data.countRow
  workSheetCountColumn = data.countColumn
  workSheetHeaderRange = data.headerRange
  workSheetDataRange = data.dataRange
  workSheetDeleteEmptyColumns = () => {
    data.deleteEmptyColumns()
  }
  workSheetDeleteEmptyRows = () => {
    data.deleteEmptyRows()
  }
}
