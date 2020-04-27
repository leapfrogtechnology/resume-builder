export const downloadPDF = e => {
  var doc = new jsPDF();
  var elementHTML = document.getElementById('pdf');
  doc.fromHTML(elementHTML, 15, 15);
  // Save the PDF
  doc.save('sample-document.pdf');
  // ReactPDF.render(<Pdf />, document.getElementById('pdf'));
};
