/**
 * Download pdf.
 *
 * @param {string} url
 * @param {boolean} loading
 * @param {function} toggleDownload
 */
export const downloadPDF = (url, loading, toggleDownload) => {
  if (!loading) {
    const a = document.createElement('a');

    a.href = url;
    a.download = 'resume.pdf';
    a.click();

    window.URL.revokeObjectURL(url);

    toggleDownload();
  }
};
