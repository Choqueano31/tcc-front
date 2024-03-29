import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { PermContactCalendar } from '@material-ui/icons';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import myApi from "Service/Api";
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});
const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    fontWeight: "bold",
  },
};

const useStyles = makeStyles(styles);

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],

  };
}
function createData2(item){

 // console.log('HI', item)
  // console.log(item)
  return{
    nome: item.nome,

    teachers:item.disciplinas,
    funcional:[
      {
        nome_guerra: item.nome_funcional,
        mf: item.matricula_governo,
        // orgao: item.orgao.name,
        // unidade: item.unity.nome,

      }
    ],
    dependents: item.Dependents

  }
}
function Row(props) {
  const{ row} = props
 // console.log(row)
  // const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell  align="center" component="th" scope="row">
          {row?.nome}
        </TableCell>
        {/* <TableCell align="center">{row.hierarquia}</TableCell> */}
        <TableCell align="center">{row.rgPm}</TableCell>
        <TableCell align="center">{row.rgBm}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Disciplinas
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>nome</TableCell>
                    <TableCell>codigo</TableCell>

                    <TableCell >professor</TableCell>
                    <TableCell >Sala</TableCell>
                    {/* <TableCell align="right">Data de Nascimento</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>

                  {row.teachers.map((historyRow) => (
                    <>
                    {/* {historyRow.professores.length > 1&& (
                      <>
                      {historyRow.professores.map((item)=>(
                           <TableRow key={item._id}>
                           <TableCell component="th" scope="row">
                             {historyRow.nome}
                           </TableCell>
                           <TableCell>{historyRow.code}</TableCell>

                           <TableCell align="left">{item.nome}</TableCell>
                         </TableRow>
                        ))}
                        </>
                    )} */}



                    <TableRow key={historyRow._id}>
                      <TableCell component="th" scope="row">
                        {historyRow.nome}
                      </TableCell>
                      <TableCell>{historyRow.code}</TableCell>

                      <TableCell align="left">{historyRow.professor.nome.toUpperCase()}</TableCell>
                      <TableCell align="left">{historyRow.sala.nome}</TableCell>
                    </TableRow>
                    </>
                ))}

                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    nome: PropTypes.string,
    // hierarquia: PropTypes.string,
    rgPm: PropTypes.string,
    rgBm: PropTypes.string,
    status: PropTypes.string,
    teachers: PropTypes.arrayOf(
      PropTypes.shape({
        nome: PropTypes.string,
        code: PropTypes.string,
    })),
    endereco: PropTypes.arrayOf(
      PropTypes.shape({
        address: PropTypes.string,
        number: PropTypes.string,
        neighborhood: PropTypes.string,
        city: PropTypes.string,
    })),
    funcional: PropTypes.arrayOf(
      PropTypes.shape({
        nome_guerra: PropTypes.string,
        mf: PropTypes.string,
        orgao: PropTypes.string,
        unidade: PropTypes.string
    })),
    dependents: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        cpf: PropTypes.string,
        parentage: PropTypes.string
      })
    )
  }).isRequired,

};



const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

export default function Associado() {
  const [list, setList] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  async function listAssociates() {

    let response = await myApi.get("/bloco");
    for(let i=0; i< response.data.length; i++){
      const findDisciplina = await myApi.get(`/disciplinas/${response.data[i]._id}`);
     if(findDisciplina.data !== ''){
      response.data[i].disciplinas= findDisciplina.data
     }
    }

    setList(
      response.data.map((item) => createData2(item))
      )
  }

  useEffect(() => {
    listAssociates();
  }, []);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const classes = useStyles();
  return (
    <Card style={{backgroundColor:'white'}} >
      <CardHeader color="primary" icon>
            <CardIcon color="warning">
              <PermContactCalendar />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>INFORMAÇÕES DOS BLOCOS</h4>
          </CardHeader>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
          <TableCell />
            <TableCell  align="center">BLOCOS</TableCell>
            <TableCell />
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Card>
  );
}
