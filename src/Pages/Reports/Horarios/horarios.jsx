import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
function HorariosPDF(info) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
 const ls = info
 ls.shift()
 console.log(ls)
 let complex = []
 let line1 = []
 for(let i =0; i< ls.length; i++){
  const line00 ={text: ls[i].title, style: 'tableHeader', alignment: 'center'}
  complex.push(line00)
  if(ls[i].cards[0].content != undefined){
    if(ls[i].title == "horarios"){
      const line01 ={text: ls[i].cards[0].horario, style: 'tableHeader', alignment: 'center'}
      line1.push(line01)
    }else{

      const line01 ={text: ls[i].cards[0].content + '\n'+  ls[i].cards[0].teacher, style: 'tableHeader', alignment: 'center'}
      line1.push(line01)
    }
  }
 }
 console.log(line1)
  const reportTitle = [];

  const details = [	{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					complex,
          line1,
					// ['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 2', 'Sample value 3'],
					['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 2', 'Sample value 3'],
				]
			},
			layout: {
				hLineWidth: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 2 : 1;
				},
				vLineWidth: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
				},
				hLineColor: function (i, node) {
					return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
				},
				vLineColor: function (i, node) {
					return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
				},
				// hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
				// paddingLeft: function(i, node) { return 4; },
				// paddingRight: function(i, node) { return 4; },
				// paddingTop: function(i, node) { return 2; },
				// paddingBottom: function(i, node) { return 2; },
				// fillColor: function (rowIndex, node, columnIndex) { return null; }
			}
		},];

  const rodape = [];

  const docDefinitions = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [details],
    footer: [rodape]
  }

  pdfMake.createPdf(docDefinitions).open()
}
export default HorariosPDF;
