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
import { toast } from 'react-toastify';

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
  const matutino =  {
    title: 'Horários',
    creatable: true,
    horary: true,
    turno:'MATUTINO',
    cards: [
      {
        id: 1,
        horario: '07:30 - 08:20',
        pos:[
      {name: '07:30 - 08:20', id: '1', day:'segunda-feira'},
      {name: '07:30 - 08:20', id: '13', day:'terça-feira'},
      {name: '07:30 - 08:20', id: '25', day:'quarta-feira'},
      {name: '07:30 - 08:20', id: '37', day:'quinta-feira'},
      {name: '07:30 - 08:20', id: '49', day:'sexta-feira'},

        ]
      },
      {
        id:2 ,
        horario: '08:20 - 09:10',
        pos:[
      {name: '08:20 - 09:10', id: '2', day:'segunda-feira'},
      {name: '08:20 - 09:10', id: '14', day:'terça-feira'},
      {name: '08:20 - 09:10', id: '26', day:'quarta-feira'},
      {name: '08:20 - 09:10', id: '38', day:'quinta-feira'},
      {name: '08:20 - 09:10', id: '50', day:'sexta-feira'},

        ]
           },        {
        id: 3,
        horario: '09:20 - 10:10',
        pos:[
      {name: '09:20 - 10:10', id: '3', day:'segunda-feira'},
      {name: '09:20 - 10:10', id: '15', day:'terça-feira'},
      {name: '09:20 - 10:10', id: '27', day:'quarta-feira'},
      {name: '09:20 - 10:10', id: '39', day:'quinta-feira'},
      {name: '09:20 - 10:10', id: '51', day:'sexta-feira'},

        ]
          },        {
        id: 4,
        horario: '10:10 - 11:00',
        pos:[
      {name: '10:10 - 11:00', id: '4', day:'segunda-feira'},
      {name: '10:10 - 11:00', id: '16', day:'terça-feira'},
      {name: '10:10 - 11:00', id: '28', day:'quarta-feira'},
      {name: '10:10 - 11:00', id: '40', day:'quinta-feira'},
      {name: '10:10 - 11:00', id: '52', day:'sexta-feira'},

        ]
        },        {
        id: 5,
        horario: '11:10 - 12:00',
        pos:[
      {name: '11:10 - 12:00', id: '5', day:'segunda-feira'},
      {name: '11:10 - 12:00', id: '17', day:'terça-feira'},
      {name: '11:10 - 12:00', id: '29', day:'quarta-feira'},
      {name: '11:10 - 12:00', id: '41', day:'quinta-feira'},
      {name: '11:10 - 12:00', id: '53', day:'sexta-feira'},

        ]
      },        {
        id: 6,
        horario: '12:00 - 12:50',
        pos:[
      {name: '12:00 - 12:50', id: '6', day:'segunda-feira'},
      {name: '12:00 - 12:50', id: '18', day:'terça-feira'},
      {name: '12:00 - 12:50', id: '30', day:'quarta-feira'},
      {name: '12:00 - 12:50', id: '42', day:'quinta-feira'},
      {name: '12:00 - 12:50', id: '54', day:'sexta-feira'},

        ]
       },
    ],
  }
  const vespertino =  {
    title: 'Horários',
    creatable: true,
    horary: true,
    turno:'VESPERTINO',
    cards: [
      {
        id: 1,
        horario: '13:00 - 13:50',
        pos:[
      {name: '13:00 - 13:50', id: '7', day:'segunda-feira'},
      {name: '13:00 - 13:50', id: '19', day:'terça-feira'},
      {name: '13:00 - 13:50', id: '31', day:'quarta-feira'},
      {name: '13:00 - 13:50', id: '43', day:'quinta-feira'},
      {name: '13:00 - 13:50', id: '55', day:'sexta-feira'},

        ]
      },
      {
        id:2 ,
        horario: '13:50 - 14:40',
        pos:[
      {name: '13:50 - 14:40', id: '8', day:'segunda-feira'},
      {name: '13:50 - 14:40', id: '20', day:'terça-feira'},
      {name: '13:50 - 14:40', id: '32', day:'quarta-feira'},
      {name: '13:50 - 14:40', id: '44', day:'quinta-feira'},
      {name: '13:50 - 14:40', id: '56', day:'sexta-feira'},

        ]
           },        {
        id: 3,
        horario: '14:50 - 15:40',
        pos:[
      {name: '14:50 - 15:40', id: '9', day:'segunda-feira'},
      {name: '14:50 - 15:40', id: '21', day:'terça-feira'},
      {name: '14:50 - 15:40', id: '33', day:'quarta-feira'},
      {name: '14:50 - 15:40', id: '45', day:'quinta-feira'},
      {name: '14:50 - 15:40', id: '57', day:'sexta-feira'},

        ]
          },        {
        id: 4,
        horario: '15:40 - 16:30',
        pos:[
      {name: '15:40 - 16:30', id: '10', day:'segunda-feira'},
      {name: '15:40 - 16:30', id: '22', day:'terça-feira'},
      {name: '15:40 - 16:30', id: '34', day:'quarta-feira'},
      {name: '15:40 - 16:30', id: '46', day:'quinta-feira'},
      {name: '15:40 - 16:30', id: '58', day:'sexta-feira'},

        ]
        },        {
        id: 5,
        horario: '16:40 - 17:30',
        pos:[
      {name: '16:40 - 17:30', id: '11', day:'segunda-feira'},
      {name: '16:40 - 17:30', id: '23', day:'terça-feira'},
      {name: '16:40 - 17:30', id: '35', day:'quarta-feira'},
      {name: '16:40 - 17:30', id: '47', day:'quinta-feira'},
      {name: '16:40 - 17:30', id: '59', day:'sexta-feira'},

        ]
      },        {
        id: 6,
        horario: '17:30 - 18:20',
        pos:[
      {name: '17:30 - 18:20', id: '12', day:'segunda-feira'},
      {name: '17:30 - 18:20', id: '24', day:'terça-feira'},
      {name: '17:30 - 18:20', id: '36', day:'quarta-feira'},
      {name: '17:30 - 18:20', id: '48', day:'quinta-feira'},
      {name: '17:30 - 18:20', id: '60', day:'sexta-feira'},

        ]
       },
    ],
  }
  async function blocoLists(){
    const response = await myApi.get("/bloco")
   setBlocoList(response.data)
  }
  function handleSimpleBloco (event) {

     setTeamsChosen({ [event.target.name]: event.target.value })
    async function handletimetable(){
     try{
      setLoading(true)
      const findTimeTable = await myApi.get(`/timetable/${event.target.value}`)
      setFindTimeTable(findTimeTable.data)
      const findBloco = await myApi.get(`/bloco/${event.target.value}`)


      setBloco(findBloco.data)
      if(findTimeTable.data.length > 0){
        const response = await myApi.get(`/disciplinas/${event.target.value}`)
        setListProf(response.data)

        const updateBase = response.data.map((item)=> ({
          id: item._id ,
          teacher: item.nome,
          content: item.professor.nome ,
          professorId:item.professor._id,
          restrict: item.professor.restrict,
          sala: item.sala?.nome,
          labels: item.labels,

        }))
        const horaryFree ={

            id: Math.random().toFixed(3),
            teacher: '',
            content: 'horario livre',
            labels: [],
            user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',

        }
        updateBase.unshift(horaryFree)
        const refatore={
          title: 'Disciplinas',
          creatable: true,
          bloco_id: event.target.value,
          cards: updateBase
        }
        // let allInfo = findTimeTable.data.map((item)=>{
        //   if(item.title === "horarios"){
        //     if(findBloco.turno==="MATUTINO"){
        //       return matutino
        //     }else{
        //       return vespertino
        //     }
        //   } else{
        //     item.bloco_id = id
        //     return item
        //   }
        // })
        if(findBloco.turno==="MATUTINO"){
          findTimeTable.data.unshift(matutino)
              }else{
                findTimeTable.data.unshift(vespertino)
              }
         findTimeTable.data.unshift(refatore)
        // console.log(allInfo);
        setLists(findTimeTable.data)
        setLoading(false)
    }else{
      toast.error("Não há horário cadastrado no período selecionado!")
      setTeamsChosen({})
      setLoading(false)
    }

  }catch(err){
    toast.error("Alogo inesperado aconteceu, tente novamente!")
    setTeamsChosen({})
    setLoading(false)
     }
    }
    handletimetable()
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

    let aggroupeAll =[]
    for(let a=0 ; a< listProf.length; a++){
      const findDisci = profs.filter((i) => i.teacher === listProf[a]?.nome)

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



    // console.log(disc);
    // console.log(profs);
    HorariosPDF(bloco,lists, aggroupeAll)
  }
  function back(){
    setBloco("")
    setTeamsChosen({})
    setLists([])
    setFindTimeTable([])
    setListProf([])
  }
  useEffect(()=>{
    blocoLists()
  },[])
  const classes = useStyles();
  if(loading) return (        <Dialog
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
  </Dialog>)
  return(
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
            <RegularButton  onClick={()=> {back()}} color="warning">
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

  )
}

export default UserReport;
