export const downloadPDF = () => {
  var elementHTML = document.getElementById('pdf');

  html2canvas(elementHTML).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 0, 0);
    pdf.save('resume.pdf');
  });
};
