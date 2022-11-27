/*eslint eqeqeq: off*/
import { Button, DialogActions, InputAdornment, TextField } from '@material-ui/core';
import { Assignment } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import Card from 'components/Card/Card';
import CardHeader from 'components/Card/CardHeader';
import CardIcon from 'components/Card/CardIcon';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
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
function UserUpdate(info) {

  console.log(info);
  const [obj, setObj] = useState(info.info)

async function handleUpdate(){
  if(obj.nome == ""){
    toast.error("campo nao pode ir vazio")
  }
  try{
   const dados={
    usuario:obj.usuario,
    senha: obj.senha
   }
    const id = obj._id
     await myApi.put(`/user/${id}`,dados )
    toast.success("Atualização realizada com sucesso")
    setTimeout(() => {
      info.ModalClose()
    }, 1000);
  }catch(err){
    toast.error("Algo inesperado aconteceu, tente novamente!")
  }
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
           <h4 className={classes.cardIconTitle}>Atualizar Informações do usuário</h4>

           </div>
         </CardHeader>
         <GridItem>
         <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            onChange={(event) => setObj({...obj, usuario:event.target.value})}
            id="standard-basic"
            label={
              <span>
                Nome do usuario

              </span>
            }
            value={obj.usuario}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Assignment />
                </InputAdornment>
              ),
            }}
          />
                   <TextField
            style={{ marginTop: 10, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            onChange={(event) => setObj({...obj, senha:event.target.value})}
            id="standard-basic"
            label={
              <span>
                Nova senha

              </span>
            }
            value={obj.senha}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Assignment />
                </InputAdornment>
              ),
            }}
          />



           <DialogActions style={{display:"flex"  ,marginTop:120, alignItems:"center", justifyContent:"center"}}>
            <Button onClick={()=> info.ModalClose()} color="primary">
              Cancelar
            </Button>
            <Button onClick={() => {handleUpdate()}} color="primary">
              Atualizar
            </Button>
          </DialogActions>
        </GridItem>
       </Card>
     </GridItem>


   </GridContainer>
  )
}

export default UserUpdate;
