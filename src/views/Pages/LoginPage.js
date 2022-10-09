import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import image from "assets/img/faces/ufpa.png";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import myApi from "Service/Api";

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const history = useHistory()
  const openHome  =async (e)  => {
    if(e === 1){
      toast.success(`olá usuário, seja bem vindo!`);
      history.push("/user")
    }else if(e ===  2){
      console.log(usuario);
      console.log(senha);
      if(usuario === "" || senha ===""){
       return toast.error("preencha todos os campos")
      }else{
        try {
          const dados={usuario, senha}
          const response = await myApi.post("/sessionmongo", dados);
          console.log('LOGG', response)
          // setName(resposta.data)
          //dados.cpf == resposta.data.cpf
          if (response.data.token) {
            // console.log('AQUI', response.data)
            const result = response.data

            localStorage.setItem("token", result.token)
            localStorage.setItem("name", JSON.stringify(result.usuario))
         //   localStorage.setItem("@userCpf", JSON.stringify(result.user.cpf))
            toast.success(`olá ${result.usuario
              .split(" ")
              .slice(0, 1)
              .join(" ")
              .toUpperCase()}, seja bem vindo!`);
              // setTimeout(() => {
                //   reload2();
                // }, 3000);
                history.push("/admin")
              } else {
                toast.error("Dados Incorretos, tente novamente.");
              }
            } catch (error) {
              // setLoading(false)
              // console.log(error);
              toast.error("Dados Incorretos, tente novamente.");
        }
      }
    }
  }
  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="success"
              >
                <h4 className={classes.cardTitle}>UFPA</h4>
                <div className={classes.socialLine}>
                <img src={image} alt="..." style={{width: 100, height: 100}} />
                </div>
              </CardHeader>
              <CardBody>
                {/* <CustomInput
                  labelText="First Name.."
                  id="firstname"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                /> */}
                <CustomInput
                  labelText="Usuário"
                  id="email"
                  value={usuario}
                  formControlProps={{
                    fullWidth: true
                  }}

                  inputProps={{
                      onChange: event => {
                        setUsuario(event.target.value);
                      },
                    endAdornment: (
                      <InputAdornment position="end">
                        <FaUser className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Senha"
                  id="password"
                  value={senha}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => {
                      setSenha(event.target.value);
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",

                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
              <Button style={{cursor: 'pointer', backgroundColor: 'info'}} onClick={() => openHome(1)} color="info" simple size="lg" block>
                  Não sou Administrador
                </Button>
                <Button style={{cursor: 'pointer', backgroundColor: 'info'}} onClick={() => openHome(2)} color="success" simple size="lg" block>
                  ENTRAR
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
