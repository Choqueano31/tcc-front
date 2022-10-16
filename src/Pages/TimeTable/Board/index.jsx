/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import produce from 'immer';
import List from '../List';
import { loadLists } from '../services/api';
import teachers from '../services/teachers';
import { Container } from './styles';
import BoardContext from './context';
import myApi from 'Service/Api';
import { toast } from 'react-toastify';
import { Button, DialogActions, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import RegularButton from 'components/CustomButtons/Button';
import { makeStyles } from '@material-ui/styles';
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import { FaPen } from 'react-icons/fa';
import HorariosPdf from '../../Reports/Horarios/horarios'
import Loading from 'utils/Loading';
import { Dialog } from 'primereact/dialog';
const data = loadLists();
const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    fontWeight: "bold",
  },
};
const useStyles = makeStyles(styles);
function Board() {
  // eslint-disable-next-line no-unused-vars
  const[bloco, setBloco] = useState("")
  const [lists, setLists] = useState([]);
  const [blocoList, setBlocoList] = useState([])
  const [teamsChosen, setTeamsChosen] = useState({})
  const [findTimeTable, setFindTimeTable] = useState([])
  const [loading, setLoading] = useState(false);
  const [listProf, setListProf] = useState([])
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
  async function syncProf(){
    const response = await myApi.get(`/disciplinas/${bloco._id}`)
    setListProf(response.data)
  }

  async function move(fromList, toList, from, to) {
    // console.log(fromList, toList, from, to);
    const objectDelect = lists[toList].cards[to];

    const res = lists[1].cards[to].pos.filter((item)=> item.day.toUpperCase() ===  lists[toList].title.toUpperCase())[0]
    const dragged = lists[fromList].cards[from];
    dragged.id = objectDelect.id;
    //const res =
    const objectNew = {
      id: Math.random().toFixed(3),
      content: dragged.content,
      teacher: dragged.teacher,
      labels: dragged.labels,
      professorId:dragged.professorId,
      restrict: res,
      sala:dragged.sala,
      user: dragged.user,
    };
    // console.log(objectNew);
    // console.log(lists);
    // console.log(lists[toList]._id);

    // console.log(dragged.restrict);
    let ativeRestrict=[]
    if(dragged.restrict){
       ativeRestrict = dragged.restrict.filter((item)=> item.id === res.id)
    }
    if(ativeRestrict.length === 0){
    if( lists[toList]._id) {

      const updateTeacher = await myApi.put(`/timetable/${lists[toList]._id}/${objectDelect.id}`, objectNew)
      if(updateTeacher){
        const restrict = {
          horaryId: lists[1].cards[to].id  ,
          horary:lists[1].cards[to].horario,
          day:  lists[toList].title
        }
        // if(objectNew.content.toUpperCase() === "HORARIO LIVRE"){
        //   await myApi.put(`/professorremoverestrict/${objectDelect.professorId}`,res)
        //   toast.success("Horario livre adicionado.")
        //   syncProf()
        // }else{
          if(objectDelect.professorId){
            if(objectNew.professorId){

              await myApi.put(`/professorremoverestrict/${objectDelect.professorId}`,res)

              await myApi.put(`/professorRestrict/${objectNew.professorId}`,res)

              toast.success("Disciplina atualizada com sucesso.")
              syncProf()
            }else{
              await myApi.put(`/professorremoverestrict/${objectDelect.professorId}`,res)
              toast.success("Disciplina atualizada com sucesso.")
              syncProf()
            }
          }else{
          // await myApi.put(`/professorremoverestrict/${objectDelect.professorId}`,res)
          // console.log(objectNew.professorId)
          await myApi.put(`/professorRestrict/${objectNew.professorId}`,res)

          toast.success("Disciplina atualizada com sucesso.")
          syncProf()
      }
      }else{
        toast.error("Não foi possível atualizar disciplina.")
      }

    }
    // console.log(lists[fromList].cards[from]);
    // console.log(objectNew);
    const removeobject = lists[toList].cards.splice(to, 1, objectNew);
    // const addobject = removeobject.push(dragged)
    // const refin = lists[toList].cards;
    // console.log(lists);
    await setLists([...lists]);
  }else{
    toast.error("Professor não está disponível nesse horário!")
  }
    // setLists(produce(lists, (draft) => {
    //   const dragged = draft[fromList].cards[from];
    //   draft[toList].cards.splice(to, 1, dragged);
    // }));

    // draft[fromList].cards.splice(from, 1);
    // draft[toList].cards.splice(to, 1, dragged);
  }
  function gerarCorHexadecimal() {
    // eslint-disable-next-line radix
    return `#${parseInt((Math.random() * 0xFFF))
      .toString(16)
      .padStart(3, '0')}`;
  }
  function teacherAdd(teacher) {
    // const ts = {
    //   id: Math.random(),
    //   teacher,
    //   diponibilidade: [],
    // };
    // console.log(ts);
    // if (ts.teacher !== '') {
    //   teachers.push(ts);
    // }
    const ts2 = {
      id: Math.random().toFixed(3),
      teacher,
      content: 'Algebra Linear',
      labels: [`${gerarCorHexadecimal()}`],
      user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',

    };
    lists[0].cards.push(ts2);

    // setLists([...lists,
    //  ,
    // ]);
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
    HorariosPdf(bloco,lists, aggroupeAll)
  }
  async function ListDisciplines(id){

    try{
      setLoading(true)
      const findTimeTable = await myApi.get(`/timetable/${id}`)
      setFindTimeTable(findTimeTable.data)
      const findBloco = await myApi.get(`/bloco/${id}`)

      setBloco(findBloco.data)
     // console.log(findTimeTable.data[0]._id)
      if(findTimeTable.data.length > 0){
        const response = await myApi.get(`/disciplinas/${id}`)
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
          bloco_id: id,
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
      }
      else{
        setLoading(true)

      const response = await myApi.get(`/disciplinas/${id}`)
      if(response.data){


      setListProf(response.data)

      const updateBase = response.data.map((item)=> ({
        id: item._id ,
        teacher: item.nome,
        content: item.professor.nome ,
        professorId:item.professor._id,
        sala: item.sala?.nome,
        restrict: item.professor.restrict,
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

     const replaceTeachers = data.map((item)=>{
      if(item.title === "Disciplinas"){
      const refatore={
        title: 'Disciplinas',
        creatable: true,
        bloco_id: id,
        cards: updateBase
      }
      return refatore
      }
      else if(item.title === "horarios"){
        if(findBloco.data.turno==="MATUTINO"){

          return matutino
        }else{
          return vespertino
        }
      }
      else{
        item.bloco_id = id
        return item
      }
     })
     //horarios
    setLists(replaceTeachers)
    setLoading(false)
  }else{
    toast.error("Não há professores cadastrados nesse período para criação de horário!")
    setBloco("")
    setTeamsChosen({})
    setLists([])
    setFindTimeTable([])
    setListProf([])
    setLoading(false)
  }
  } }catch(err){
      toast.error(err)
      setLoading(false)
    }
  }
  async function handleTimeTable(){
    try {
      setLoading(true)
      for(let i = 1; i< lists.length;){
      const response =  await myApi.post("/timetable", lists[i])
      if(lists[i].title !== 'Horários'){
        for(let j=0; j< lists[i].cards.length; j++){
          if(lists[i].cards[j].professorId){
            await myApi.put(`/professorRestrict/${lists[i].cards[j].professorId}`,lists[i].cards[j].restrict)
          }
        }
      }
        if(response){
          i++
        }
      }
      toast.success("horario criado com sucesso")
     back()
     setLoading(false)
    } catch (error) {
      toast.error(error)
      setLoading(false)
    }
  }
  async function blocoLists(){
    const response = await myApi.get("/bloco")
   setBlocoList(response.data)
  }
  function handleSimpleBloco (event) {

    setTeamsChosen({ [event.target.name]: event.target.value })
    ListDisciplines(event.target.value)
    //setObj({...obj, [event.target.name]: event.target.value });
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
  return (
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
   {bloco === ""? (
     <GridContainer justify="center">
     <GridItem xs={10}>
       <Card style={{height: '200px'}}>
         <CardHeader color="primary" icon>
           <CardIcon color="warning">
             <FaPen />
           </CardIcon>
           <div style={{justifyContent: 'space-between', display: 'flex'}}>
           <h4 className={classes.cardIconTitle}>Escolha o bloco para iniciar a criação de horário</h4>

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

       </Card>
     </GridItem>

   </GridContainer>
   ):(



    <BoardContext.Provider value={{ lists, move, teacherAdd }}>


        <h3 style={{display:"flex", alignItems:'center', justifyContent:"center"}} >{bloco?.nome} </h3>
      <div style={{display: 'flex', flexDirection:'row', padding:"30px"}} >
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </div>
      <GridItem xs={12} sm={12}>
      <h style={{display:"flex", alignItems:'center', justifyContent:"center", fontWeight:"bold", marginBottom:15}} >Restrições dos Professores </h>
      {listProf.length >0?
        listProf.map((item)=>{
        const ls= item.professor.restrict.sort(function (a, b) {
          if (Number(a.id) > Number(b.id)) {
            return 1;
          }
          if (Number(a.id) <Number(b.id)) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
          return(
            <div style={{marginBottom:20}}>
            <p style={{ fontWeight:"bold"}} >Professor: {item.professor?.nome.toUpperCase()}  /  Disciplina: {item?.nome} </p>
            {ls.map((i)=>(
              <p>Dia: {i.day}  /  horário: {i.name}</p>
            ))}
            </div>
          )
        })
      : null}
      </GridItem>
      {listProf.length > 0 &&(


      <DialogActions style={{display:"flex"  ,marginTop:60, alignItems:"center", justifyContent:"center"}}>

            <RegularButton  onClick={()=> {back()}} color="warning">
              VOLTAR
            </RegularButton>
            {findTimeTable.length > 0? (
               <RegularButton onClick={() => {

               print()}} color="danger">
               IMPRIMIR HORÁRIO
             </RegularButton>
            ):(
            <RegularButton onClick={() => {handleTimeTable()}} color="success">
              CRIAR HORÁRIO
            </RegularButton>

            )}
          </DialogActions>
 )}
 {/* <Container >
   {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
 </Container> */}
    </BoardContext.Provider>
      )}
      </>
  );
}

export default Board;
