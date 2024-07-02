/**@type {GoogleAppsScript.Spreadsheet.Spreadsheet} */
const sheet = SpreadsheetApp.openById(""); // ここにスプレッドシートIDを挿入

/**
 *	スプレッドシートの値を取得する
 *
 * @returns {any[][]}
 */
function get_value(): any[][] {
	return sheet.getDataRange()
		.getValues();
}

/**
 * スプレッドシートに値を挿入する
 *
 * @param name 1列目に挿入する値
 * @param age  2列目に挿入する値
 */
function set_value(name: string, age: string): void {
	const row = sheet.getActiveSheet()
		.getLastRow();

	sheet.getActiveSheet()
		.getRange(row + 1, 1, 1, 2)
		.setValues([[name, age]]);
}

export {get_value, set_value}
