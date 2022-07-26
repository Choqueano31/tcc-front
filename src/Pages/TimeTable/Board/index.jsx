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
  async function move(fromList, toList, from, to) {
    // console.log(fromList, toList, from, to);
    const objectDelect = lists[toList].cards[to];
    const dragged = lists[fromList].cards[from];
    dragged.id = objectDelect.id;
    const objectNew = {
      id: Math.random().toFixed(3),
      content: dragged.content,
      teacher: dragged.teacher,
      labels: dragged.labels,
      sala:dragged.sala,
      user: dragged.user,
    };
    // console.log(lists[fromList].cards[from]);
    // console.log(objectNew);
    const removeobject = lists[toList].cards.splice(to, 1, objectNew);
    // const addobject = removeobject.push(dragged)
    // const refin = lists[toList].cards;
    // console.log(lists);
    await setLists([...lists]);

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
  async function ListDisciplines(id){

    try{
      const findTimeTable = await myApi.get(`/timetable/${id}`)
      console.log(findTimeTable)
      if(findTimeTable.length > 0){
        const response = await myApi.get(`/professor/${id}`)
        console.log(response)
        const updateBase = response.data.map((item)=> ({
          id: item._id ,
          teacher: item.nome,
          content: item.disciplina?.nome ,
          sala: item.disciplina?.sala?.nome,
          labels: gerarCorHexadecimal(),

        }))
        const refatore={
          title: 'Disciplinas',
          creatable: true,
          bloco_id: id,
          cards: updateBase
        }


      }
      const findBloco = await myApi.get(`/bloco/${id}`)
      console.log(findBloco)
      setBloco(findBloco.data)
      const response = await myApi.get(`/professor/${id}`)
      console.log(response)
      const updateBase = response.data.map((item)=> ({
        id: item._id ,
        teacher: item.nome,
        content: item.disciplina?.nome ,
        sala: item.disciplina?.sala?.nome,
        labels: gerarCorHexadecimal(),

      }))
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
      else{
        item.bloco_id = id
        return item
      }
     })
    setLists(replaceTeachers)
    }catch(err){
      toast.erro(err)
    }
  }
  async function handleTimeTable(){
    try {
      console.log(lists)
      for(let i = 1; i< lists.length;){
      const response =  await myApi.post("/timetable", lists[i])
        if(response){
          i++
        }
      }
      toast.success("horario criado com sucesso")
    } catch (error) {
      toast.error(error)

    }
  }
  async function blocoLists(){
    const response = await myApi.get("/bloco")
   setBlocoList(response.data)
  }
  function handleSimpleBloco (event) {
   console.log(event)
    setTeamsChosen({ [event.target.name]: event.target.value })
    ListDisciplines(event.target.value)
    //setObj({...obj, [event.target.name]: event.target.value });
  }
  function back(){
    setBloco("")
    setTeamsChosen({})
  }
  useEffect(()=>{
    blocoLists()
  },[])
  const classes = useStyles();
  return (
    <>
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
      <Container >
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
      <DialogActions style={{display:"flex"  ,marginTop:120, alignItems:"center", justifyContent:"center"}}>
            <RegularButton  onClick={()=> {back()}} color="warning">
              VOLTAR
            </RegularButton>
            <RegularButton onClick={() => {handleTimeTable()}} color="success">
              CRIAR HORÁRIO
            </RegularButton>
          </DialogActions>
      {/* <Container >
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container> */}

    </BoardContext.Provider>
      )}
      </>
  );
}

export default Board;
