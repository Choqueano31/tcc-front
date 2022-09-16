import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
function HorariosPDF(bloco, info) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
 const ls = info
 ls.shift()
 console.log(ls)
 let complex = []
 let line1 = []
 let line2 = []
 let line3 = []
 let line4 = []
 let line5 = []
 let line6 = []
 for(let i =0; i< ls.length; i++){
  const line00 ={text: ls[i].title, style: 'tableHeader', alignment: 'center'}
  complex.push(line00)
  if(ls[i].cards[0].content != undefined){
    if(ls[i].title == "horarios"){
      const line01 ={text: ls[i].cards[0].horario, style: 'tableHeader', alignment: 'center'}
      line1.push(line01)
			const line02 ={text: ls[i].cards[1].horario, style: 'tableHeader', alignment: 'center'}
      line2.push(line02)
			const line03 ={text: ls[i].cards[2].horario, style: 'tableHeader', alignment: 'center'}
      line3.push(line03)
			const line04 ={text: ls[i].cards[3].horario, style: 'tableHeader', alignment: 'center'}
      line4.push(line04)
			const line05 ={text: ls[i].cards[4].horario, style: 'tableHeader', alignment: 'center'}
      line5.push(line05)
			const line06 ={text: ls[i].cards[5].horario, style: 'tableHeader', alignment: 'center'}
      line6.push(line06)
    }else{

      const line01 ={text: ls[i].cards[0].content + '\n'+  ls[i].cards[0].teacher, style: 'tableHeader', alignment: 'center'}
      line1.push(line01)
			const line02 ={text: ls[i].cards[1].content + '\n'+  ls[i].cards[1].teacher, style: 'tableHeader', alignment: 'center'}
      line2.push(line02)
			const line03 ={text: ls[i].cards[2].content + '\n'+  ls[i].cards[2].teacher, style: 'tableHeader', alignment: 'center'}
      line3.push(line03)
			const line04 ={text: ls[i].cards[3].content + '\n'+  ls[i].cards[3].teacher, style: 'tableHeader', alignment: 'center'}
      line4.push(line04)
			const line05 ={text: ls[i].cards[4].content + '\n'+  ls[i].cards[4].teacher, style: 'tableHeader', alignment: 'center'}
      line5.push(line05)
			const line06 ={text: ls[i].cards[5].content + '\n'+  ls[i].cards[5].teacher, style: 'tableHeader', alignment: 'center'}
      line6.push(line06)

    }
  }
 }
 console.log(line1)
  const reportTitle = [	];
  const details = [
		{
			text: `Horário de aula ${bloco.nome}`,
			style: 'header',
			alignment: 'center'
		},
		{
			style: 'tableExample',
			table: {
				headerRows: 1,
				body: [
					complex,
          line1,
					// ['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 2', 'Sample value 3'],
					// ['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 2', 'Sample value 3'],
					line2,
					// ['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 2', 'Sample value 3'],
					line3,
					// ['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 2', 'Sample value 3'],
					line4,
					// ['Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 1', 'Sample value 2', 'Sample value 3','Sample value 2', 'Sample value 3'],
					line5,
					line6
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
		styles: {
			header: {
				fontSize: 18,
				bold: true,
				alignment: 'justify'
			}
		},
    content: [details],
    footer: [rodape]
  }

  pdfMake.createPdf(docDefinitions).open()
}
export default HorariosPDF;
