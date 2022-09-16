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
function UpdateClass(info) {
  const [obj, setObj] = useState(info.info)
  const [blocoList, setBlocoList] = useState([])
  const [teamsChosen, setTeamsChosen] = useState(info.info.bloco)
async function handleUpdate(){
  if(obj.nome == ""){
    toast.error("campo nao pode ir vazio")
  }
  try{
   const dados={
    nome:obj.nometoUpperCase() ,
   }

    const id = obj._id
     await myApi.put(`/salas/${id}`,dados )
    toast.success("Atualização realizada com sucesso")
    setTimeout(() => {
      info.ModalClose()
    }, 1000);
  }catch(err){
    console.log(err)
  }
}


function handleSimple (event) {
  console.log(event)
  setTeamsChosen({ [event.target.name]: event.target.value })
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
           <h4 className={classes.cardIconTitle}>Atualizar Informações da sala</h4>

           </div>
         </CardHeader>
         <GridItem>
         <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            onChange={(event) => setObj({...obj, nome:event.target.value})}
            id="standard-basic"
            label={
              <span>
                Nome da sala
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

export default UpdateClass;
