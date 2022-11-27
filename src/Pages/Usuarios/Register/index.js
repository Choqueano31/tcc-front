import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Step1 from "./WizardSteps/Step1.js";
// import Step2 from "./WizardSteps/Step2.js";
// import Step3 from "./WizardSteps/Step3.js";
// import moment from "moment";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import myApi from "Service/Api.js";

export default function UsersRegister() {
  async function typeCreate(e) {
    // console.log(e)
    const dados = {
      usuario: e.user.nome,
      senha: e.user.senha
    };

    try {
      const response = await myApi.post("/createusernmongo", dados);
      if (response) {
        toast.success("Usuário criado com sucesso!");
      }
    } catch (error) {
       console.log(error);
      toast.error("Não foi possível criar Usuário");
    }
  }
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
          validate
          steps={[
            {
              stepName: "Registrar Usuário",
              stepComponent: Step1,
              stepId: "user",
            },
          ]}
          title="Cadastro de Usuário"
          subtitle=""
          finishButtonClick={(e) => typeCreate(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
