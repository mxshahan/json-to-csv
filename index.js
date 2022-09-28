/**
 *
 * @param {{ header: {[string]: String}, data: Array, filename: String }}  param0
 */

exports.exportCsv = ({ header: _header, data = [], filename }) => {
  const replacer = (_, value) => (value === null ? '' : value);

  let header = Object.keys(data[0]);
  let headerTitle = header;
  if (_header) {
    header = Object.keys(_header);
    headerTitle = Object.values(_header);
  }

  const csv = data.map((row) => header.map((fieldName) => JSON.stringify(row[fieldName], replacer)).join(','));
  csv.unshift(headerTitle.join(','));
  const csvArray = csv.join('\r\n');

  console.log(csvArray);

  // Create Blob From String
  const blob = new Blob([csvArray], { type: 'text/csv' });
  const a = document.createElement('a');
  const url = window.URL.createObjectURL(blob);

  a.href = url;
  a.download = `${filename || 'untitled'}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
};
