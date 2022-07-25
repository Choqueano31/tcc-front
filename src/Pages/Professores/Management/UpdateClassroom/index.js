import { makeStyles } from '@material-ui/styles';
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import React, { useEffect } from 'react';
import { FaPen } from 'react-icons/fa';
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import { Button, DialogActions, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { Assignment } from '@material-ui/icons';
import { useState } from 'react';
import { toast } from 'react-toastify';
import myApi from 'Service/Api';
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
function UpdateDisciplinas(info) {
  const [obj, setObj] = useState(info.info)
  const [blocoList, setBlocoList] = useState([])
  const[classesList, setClassesList] = useState([])
  const [teamsChosen, setTeamsChosen] = useState(info.info.bloco)
  const [disciplina, setdisciplina] = useState(info.info.disciplina)


async function handleUpdate(){
  if(obj.nome == "" ){
    toast.error("campo nao pode ir vazio")
  }
  try{
   const dados={
    nome:obj.nome,
    bloco_id: teamsChosen._id,
    disciplina_id: disciplina._id
   }


    const id = obj._id
     await myApi.put(`/professor/${id}`,dados )
    toast.success("Atualização realizada com sucesso")
    setTimeout(() => {
      info.ModalClose()
    }, 1000);
  }catch(err){
    console.log(err)
  }
}
async function findclasses(id){
  const response = await myApi.get(`/disciplinas/${id}`)
 setClassesList(response.data);
 }
async function blocoLists(){
  const response = await myApi.get("/bloco")
 setBlocoList(response.data)
}
useEffect(()=>{
  blocoLists()
  findclasses(teamsChosen._id)
},[])

function handleSimple (event) {

  setdisciplina({ [event.target.name]: event.target.value })
  //setObj({...obj, [event.target.name]: event.target.value });
}
function handleSimpleBloco (event) {

  setTeamsChosen({ [event.target.name]: event.target.value })
  findclasses(event.target.value)
  //setObj({...obj, [event.target.name]: event.target.value });
}

  const classes = useStyles();
  return (
    <GridContainer justify="center">
     <GridItem xs={10}>
       <Card style={{height: '400px'}}>
         <CardHeader color="primary" icon>
           <CardIcon color="warning">
             <FaPen />
           </CardIcon>
           <div style={{justifyContent: 'space-between', display: 'flex'}}>
           <h4 className={classes.cardIconTitle}>Atualizar Informações do Professor</h4>

           </div>
         </CardHeader>
         <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Preencha os campos abaixo</h4>
        </GridItem>
        <GridItem xs={12} sm={11}>
          <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            onChange={(event) => setObj({...obj, nome:event.target.value})}
            id="standard-basic"
            label={
              <span>
                Nome da disciplina
              </span>
            }
            value={obj.nome}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Assignment />
                </InputAdornment>
              ),
            }}
          />

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
        <GridItem xs={12} sm={11}>
        <FormControl

                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <InputLabel

                          htmlFor="simple-select"
                          className={classes.selectLabel}
                        >
                          Escolha a disciplina em que a disciplina será ministrada
                        </InputLabel>
                        <Select


                          MenuProps={{
                            className: classes.selectMenu
                          }}
                          classes={{
                            select: classes.select
                          }}
                          value={disciplina._id}
                          onChange={handleSimple}
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
                            Escolha a disciplina
                          </MenuItem>
                          {classesList.map((item)=>{
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
      <DialogActions style={{display:"flex"  ,marginTop:120, alignItems:"center", justifyContent:"center"}}>
            <Button  onClick={()=> info.ModalClose()} color="primary">
              Cancelar
            </Button>
            <Button onClick={() => {handleUpdate()}} color="primary">
              Atualizar
            </Button>
          </DialogActions>
       </Card>
     </GridItem>

   </GridContainer>
  )
}

export default UpdateDisciplinas;