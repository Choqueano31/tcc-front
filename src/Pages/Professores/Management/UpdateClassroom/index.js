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
import { Checkbox } from 'primereact/checkbox';
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
function UpdateDisciplinas({info, ModalClose}) {
  console.log(info)
  const [obj, setObj] = useState(info)
  const categories = [
  {name: '07:30 - 08:20', id: '1', day:'segunda-feira'},
  {name: '08:20 - 09:10', id: '2', day:'segunda-feira'},
  {name: '09:20 - 10:10', id: '3', day:'segunda-feira'},
  {name: '10:10 - 11:00', id: '4', day:'segunda-feira'},
  {name: '11:10 - 12:00', id: '5', day:'segunda-feira'},
  {name: '12:00 - 12:50', id: '6', day:'segunda-feira'},
  {name: '13:00 - 13:50', id: '7', day:'segunda-feira'},
  {name: '13:50 - 14:40', id: '8', day:'segunda-feira'},
  {name: '14:50 - 15:40', id: '9', day:'segunda-feira'},
  {name: '15:40 - 16:30', id: '10', day:'segunda-feira'},
  {name: '16:40 - 17:30', id: '11', day:'segunda-feira'},
  {name: '17:30 - 18:20', id: '12', day:'segunda-feira'},

  {name: '07:30 - 08:20', id: '13', day:'terça-feira'},
  {name: '08:20 - 09:10', id: '14', day:'terça-feira'},
  {name: '09:20 - 10:10', id: '15', day:'terça-feira'},
  {name: '10:10 - 11:00', id: '16', day:'terça-feira'},
  {name: '11:10 - 12:00', id: '17', day:'terça-feira'},
  {name: '12:00 - 12:50', id: '18', day:'terça-feira'},
  {name: '13:00 - 13:50', id: '19', day:'terça-feira'},
  {name: '13:50 - 14:40', id: '20', day:'terça-feira'},
  {name: '14:50 - 15:40', id: '21', day:'terça-feira'},
  {name: '15:40 - 16:30', id: '22', day:'terça-feira'},
  {name: '16:40 - 17:30', id: '23', day:'terça-feira'},
  {name: '17:30 - 18:20', id: '24', day:'terça-feira'},

  {name: '07:30 - 08:20', id: '25', day:'quarta-feira'},
  {name: '08:20 - 09:10', id: '26', day:'quarta-feira'},
  {name: '09:20 - 10:10', id: '27', day:'quarta-feira'},
  {name: '10:10 - 11:00', id: '28', day:'quarta-feira'},
  {name: '11:10 - 12:00', id: '29', day:'quarta-feira'},
  {name: '12:00 - 12:50', id: '30', day:'quarta-feira'},
  {name: '13:00 - 13:50', id: '31', day:'quarta-feira'},
  {name: '13:50 - 14:40', id: '32', day:'quarta-feira'},
  {name: '14:50 - 15:40', id: '33', day:'quarta-feira'},
  {name: '15:40 - 16:30', id: '34', day:'quarta-feira'},
  {name: '16:40 - 17:30', id: '35', day:'quarta-feira'},
  {name: '17:30 - 18:20', id: '36', day:'quarta-feira'},

  {name: '07:30 - 08:20', id: '37', day:'quinta-feira'},
  {name: '08:20 - 09:10', id: '38', day:'quinta-feira'},
  {name: '09:20 - 10:10', id: '39', day:'quinta-feira'},
  {name: '10:10 - 11:00', id: '40', day:'quinta-feira'},
  {name: '11:10 - 12:00', id: '41', day:'quinta-feira'},
  {name: '12:00 - 12:50', id: '42', day:'quinta-feira'},
  {name: '13:00 - 13:50', id: '43', day:'quinta-feira'},
  {name: '13:50 - 14:40', id: '44', day:'quinta-feira'},
  {name: '14:50 - 15:40', id: '45', day:'quinta-feira'},
  {name: '15:40 - 16:30', id: '46', day:'quinta-feira'},
  {name: '16:40 - 17:30', id: '47', day:'quinta-feira'},
  {name: '17:30 - 18:20', id: '48', day:'quinta-feira'},

  {name: '07:30 - 08:20', id: '49', day:'sexta-feira'},
  {name: '08:20 - 09:10', id: '50', day:'sexta-feira'},
  {name: '09:20 - 10:10', id: '51', day:'sexta-feira'},
  {name: '10:10 - 11:00', id: '52', day:'sexta-feira'},
  {name: '11:10 - 12:00', id: '53', day:'sexta-feira'},
  {name: '12:00 - 12:50', id: '54', day:'sexta-feira'},
  {name: '13:00 - 13:50', id: '55', day:'sexta-feira'},
  {name: '13:50 - 14:40', id: '56', day:'sexta-feira'},
  {name: '14:50 - 15:40', id: '57', day:'sexta-feira'},
  {name: '15:40 - 16:30', id: '58', day:'sexta-feira'},
  {name: '16:40 - 17:30', id: '59', day:'sexta-feira'},
  {name: '17:30 - 18:20', id: '60', day:'sexta-feira'},

    ];

  const[selectedCategories, setSelectedCategories] = useState(info.restrict)
  const[segunda, setSegunda] = useState(categories.filter((item)=> item.day === 'segunda-feira'))
  const[terça, setTerça] = useState(categories.filter((item)=> item.day === 'terça-feira'))
  const[quarta, setQuarta] = useState(categories.filter((item)=> item.day === 'quarta-feira'))
  const[quinta, setQuinta] = useState(categories.filter((item)=> item.day === 'quinta-feira'))
  const[sexta, setSexta] = useState(categories.filter((item)=> item.day === 'sexta-feira'))
console.log(selectedCategories)
  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) {
        _selectedCategories.push(e.value);
    }
    else {
        for (let i = 0; i < _selectedCategories.length; i++) {
            const selectedCategory = _selectedCategories[i];

            if (selectedCategory.id === e.value.id) {
                _selectedCategories.splice(i, 1);
                break;
            }
        }
    }

    setSelectedCategories(_selectedCategories);
}




async function handleUpdate(){
  if(obj.nome == "" ){
    toast.error("campo nao pode ir vazio")
  }
  try{
   const dados={
    nome:obj.nome,
    restrict:selectedCategories
   }


    const id = obj._id
     await myApi.put(`/professor/${id}`,dados )
    toast.success("Atualização realizada com sucesso")
    setTimeout(() => {
      ModalClose()
    }, 1000);
  }catch(err){
    console.log(err)
  }
}

  const classes = useStyles();
  return (
    <GridContainer justify="center">
     <GridItem xs={10}>
       <Card >
         <CardHeader color="primary" icon>
           <CardIcon color="warning">
             <FaPen />
           </CardIcon>
           <div style={{justifyContent: 'space-between', display: 'flex'}}>
           <h4 className={classes.cardIconTitle}>Atualizar Informações do Professor</h4>

           </div>
         </CardHeader>

        <GridItem xs={12} sm={11} style={{marginBottom:20}}>
          <TextField
            style={{marginTop:20, width: "100%" }}
            formControlProps={{
              fullWidth: true,
            }}
            onChange={(event) => setObj({...obj, nome:event.target.value})}
            id="standard-basic"
            label={
              <span>
                Nome do professor
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
        <GridItem xs={12} sm={11} style={{display:"flex" , alignItems:"center", justifyContent:"center"}}>
        <h4> Restrições do Professor</h4>
        </GridItem>
        <GridItem xs={12} sm={12}
        style={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'center',
          width:'100%'}}>
          <div >
            <p>Segunda-Feira</p>
        {segunda.map((category) => {
          return(
             <div style={{marginBottom: 10}} key={category.id} className="field-checkbox">
              <Checkbox inputId={category.id} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.id === category.id)}  />
              <label style={{marginLeft: 5}} htmlFor={category.id}>{category.name}</label>
               </div>
               )})}

          </div>
          <div style={{marginLeft:20}}>
          <p>Terça-Feira</p>
        {terça.map((category) => {
          return(
             <div style={{marginBottom: 10}} key={category.id} className="field-checkbox">
              <Checkbox inputId={category.id} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.id === category.id)} disabled={category.id === 'R'} />
              <label style={{marginLeft: 5}} htmlFor={category.id}>{category.name}</label>
               </div>
               )})}

          </div>
          <div style={{marginLeft:20}}>
          <p>Quarta-Feira</p>
        {quarta.map((category) => {
          return(
             <div style={{marginBottom: 10}} key={category.id} className="field-checkbox">
              <Checkbox inputId={category.id} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.id === category.id)} disabled={category.id === 'R'} />
              <label style={{marginLeft: 5}} htmlFor={category.id}>{category.name}</label>
               </div>
               )})}

          </div>
          <div style={{marginLeft:20}}>
          <p>Quinta-Feira</p>
        {quinta.map((category) => {
          return(
             <div style={{marginBottom: 10}} key={category.id} className="field-checkbox">
              <Checkbox inputId={category.id} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.id === category.id)} disabled={category.id === 'R'} />
              <label style={{marginLeft: 5}} htmlFor={category.id}>{category.name}</label>
               </div>
               )})}

          </div>
          <div style={{marginLeft:20}}>
          <p>Sexta-Feira</p>
        {sexta.map((category) => {
          return(
             <div style={{marginBottom: 10}} key={category.id} className="field-checkbox">
              <Checkbox inputId={category.id} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.id === category.id)} disabled={category.id === 'R'} />
              <label style={{marginLeft: 5}} htmlFor={category.id}>{category.name}</label>
               </div>
               )})}

          </div>

         </GridItem>
      <DialogActions style={{display:"flex"  ,marginTop:60, alignItems:"center", justifyContent:"center"}}>
            <Button  onClick={()=> ModalClose()} color="primary">
              Voltar
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
