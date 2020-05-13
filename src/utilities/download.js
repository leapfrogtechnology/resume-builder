/**
 * Download pdf.
 *
 * @param {string} url
 * @param {string} username
 * @param {boolean} loading
 * @param {function} toggleDownload
 */
export const downloadPDF = (url, username, loading, toggleDownload) => {
  if (!loading) {
    const a = document.createElement('a');

    a.href = url;
    a.download = `Resume- ${username}.pdf`;
    a.click();

    window.URL.revokeObjectURL(url);

    toggleDownload();
  }
};
