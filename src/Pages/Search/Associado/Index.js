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
import moment from "moment";
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
  console.log('HI', item)
  // console.log(item)
  return{
    nome: item.nome,
    // hierarquia: item.hierarquy.name,
    // rgPm: item.rg_policial,
    // rgBm: item.rg_bombeiro,
    // status: item.status,
    // person: [{
    //   cpf: item.cpf,
    //   email: item.email, 
    //   celular: item.telefone_celular, 
    //   fixo: item.telefone_fixo,
    //   data_nascimento: moment(item.data_nascimento).format('DD/MM/YYYY') 
    // }],
    disciplinas:[
      { 
        nome: item.disciplinas.nome,
        code: item.disciplinas.code
        
      }
    ],
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
        <TableCell component="th" scope="row">
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
                Informações Pessoais
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>CPF</TableCell>
                    <TableCell>Celular</TableCell>
                    <TableCell align="right">Telefone Fixo</TableCell>
                    <TableCell align="right">Data de Nascimento</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.disciplinas.map((historyRow) => (
                    <TableRow key={historyRow.cpf}>
                      <TableCell component="th" scope="row">
                        {historyRow.email}
                      </TableCell>
                      <TableCell>{historyRow.cpf}</TableCell>
                      <TableCell>{historyRow.celular}</TableCell>
                      <TableCell align="right">{historyRow.fixo}</TableCell>
                      <TableCell align="right">
                      {historyRow.data_nascimento}
                        {/* {Math.round(historyRow.amount * row.price * 100) / 100} */}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
            {/* <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Endereço
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Endereço</TableCell>
                    <TableCell>Numero</TableCell>
                    <TableCell align="right">Bairro</TableCell>
                    <TableCell align="right">Cidade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.endereco.map((historyRow) => (
                    <TableRow key={historyRow.address}>
                      <TableCell component="th" scope="row">
                        {historyRow.address}
                      </TableCell>
                      <TableCell >{historyRow.number}</TableCell>
                      <TableCell align="right" >{historyRow.neighborhood}</TableCell>
                      <TableCell align="right">{historyRow.city}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box> */}
            {/* <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Informações Funcionais
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome de Guerra</TableCell>
                    <TableCell>Matricula Funcional</TableCell>
                    <TableCell align="right">Unidade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.funcional.map((historyRow) => (
                    <TableRow key={historyRow.mf}>
                      <TableCell component="th" scope="row">
                        {historyRow.nome_guerra}
                      </TableCell>
                      <TableCell >{historyRow.mf}</TableCell>
                      <TableCell align="right">{historyRow.unidade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box> */}
            {/* <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Dependentes
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nome Completo</TableCell>
                    <TableCell>CPF</TableCell>
                    <TableCell align="right">Parentesco</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.dependents.length > 0 && row.dependents.map((historyRow) => (
                    <TableRow key={historyRow.name}>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                      <TableCell >{historyRow.cpf}</TableCell>
                      <TableCell align="right" >{historyRow.parentage}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box> */}
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
    disciplinas: PropTypes.arrayOf(
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
  const [associate, setAssociate] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  async function listAssociates() {

    const response = await myApi.get("/bloco");
    console.log(response.data)
    setList(
      response.data.map((item) => createData2(item)))
  }

  async function resptwo() {
    const response1 = await myApi.get("/desconts");
    setAssociate(response1.data);
    
  }
  useEffect(() => {
    listAssociates();
    // resptwo()
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
            <TableCell>BLOCOS</TableCell>
            {/* <TableCell align="center">POSTO/GRAD</TableCell>
            <TableCell align="center">RG&nbsp;(PM)</TableCell>
            <TableCell align="center">RG&nbsp;(BM)</TableCell>
            <TableCell align="center">STATUS</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      { console.log('ASSOCIADOS', associate)}
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
