import { DialogActions, FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import React, { useEffect, useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import myApi from 'Service/Api';
import RegularButton from 'components/CustomButtons/Button';
import HorariosPDF from 'Pages/Reports/Horarios/horarios';
import { Dialog } from 'primereact/dialog';
import Loading from 'utils/Loading';

// import { Container } from './styles';
const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    fontWeight: "bold",
  },
};
const useStyles = makeStyles(styles);
function UserReport() {
  const[bloco, setBloco] = useState("")
  const [lists, setLists] = useState([]);
  const [blocoList, setBlocoList] = useState([])
  const [teamsChosen, setTeamsChosen] = useState({})
  const [findTimeTable, setFindTimeTable] = useState([])
  const [listProf, setListProf] = useState([])
  const [loading, setLoading] = useState(false);
  async function blocoLists(){
    const response = await myApi.get("/bloco")
   setBlocoList(response.data)
  }
  function handleSimpleBloco (event) {
    console.log(event)
     setTeamsChosen({ [event.target.name]: event.target.value })
     //setObj({...obj, [event.target.name]: event.target.value });
   }
   function print(){
    let profs=[]
    for(let i=2;i< lists.length; i++){
        for(let j=0; j< lists[i].cards.length;j++){
          if(lists[i].cards[j].content.toUpperCase() !== "HORARIO LIVRE"){
            profs.push(lists[i].cards[j])
          }
        }
    }
    console.log(listProf);
    let aggroupeAll =[]
    for(let a=0 ; a< listProf.length; a++){
      const findDisci = profs.filter((i) => i.teacher === listProf[a]?.nome)
      console.log(findDisci)
      if(findDisci.length > 0){
        const disciplina= {
          nome: listProf[a].nome,
          professor: listProf[a].professor.nome,
          code:listProf[a].code,
          sala: listProf[a].sala.nome,
          horario: findDisci.map((it)=> (
            it.restrict
          ))

        }
        aggroupeAll.push(disciplina)
      }
    }
    console.log(aggroupeAll);


    // console.log(disc);
    // console.log(profs);
    HorariosPDF(bloco,lists, aggroupeAll)
  }
  useEffect(()=>{
    blocoLists()
  },[])
  const classes = useStyles();
  return(
    <>
       <Dialog
          visible={loading}
          style={{ width: '50vw' }}

          onHide={() => {}}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Loading type="bars" color="#00008b" />
          </div>
        </Dialog>

    <GridContainer justify="center">
    <GridItem xs={10}>
      <Card style={{height: '200px'}}>
        <CardHeader color="primary" icon>
          <CardIcon color="warning">
            <FaPen />
          </CardIcon>
          <div style={{justifyContent: 'space-between', display: 'flex'}}>
          <h4 className={classes.cardIconTitle}>Escolha o bloco para Visualização dos Horários</h4>

          </div>
        </CardHeader>
        <GridItem xs={12} sm={12}>
         <h4 className={classes.infoText} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Preencha o campo abaixo</h4>
       </GridItem>
       <GridItem xs={12} sm={11}>
       <FormControl

                       fullWidth
                       className={classes.selectFormControl}
                     >
                       <InputLabel

                         htmlFor="simple-select"
                         className={classes.selectLabel}
                       >
                         Escolha o bloco
                       </InputLabel>
                       <Select


                         MenuProps={{
                           className: classes.selectMenu
                         }}
                         classes={{
                           select: classes.select
                         }}
                         value={teamsChosen._id}
                         onChange={handleSimpleBloco}
                         inputProps={{
                           name: "_id",
                           id: "_id"
                         }}
                       >
                         <MenuItem
                           disabled
                           classes={{
                             root: classes.selectMenuItem
                           }}
                         >
                           Escolha o bloco
                         </MenuItem>
                         {blocoList.map((item)=>{
                           return(

                         <MenuItem
                         key={item._id}
                           classes={{
                             root: classes.selectMenuItem,
                             selected: classes.selectMenuItemSelected
                           }}
                           value={item._id}
                         >
                           {item.nome}
                         </MenuItem>
                           )
                         })}

                       </Select>
       </FormControl>
       </GridItem>
       <DialogActions style={{display:"flex"  ,marginTop:60, alignItems:"center", justifyContent:"center"}}>
            {findTimeTable.length > 0? (
              <>
            <RegularButton  onClick={()=> {}} color="warning">
              Limpar
            </RegularButton>
               <RegularButton onClick={() => {

               print()}} color="danger">
               IMPRIMIR HORÁRIO
             </RegularButton>
             </>
            ):(
           null
            )}
          </DialogActions>
      </Card>
    </GridItem>

  </GridContainer>
  </>
  )
}

export default UserReport;
