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

export default function BlocoRegister() {
  async function typeCreate(e) {
    // console.log(e)
    const dados = {
      nome: e.bloco.nome,
      turno: e.bloco.turno
    };

    try {
      const response = await myApi.post("/bloco", dados);
      if (response) {
        toast.success("Bloco criado com sucesso!");
        setTimeout(() => {
          reload2();
        }, 3000);
      }
    } catch (error) {
      // console.log(error);
      toast.error("Não foi possível criar Bloco");
    }
  }
  function reload2() {
    // console.log("teste");
    window.location.reload();
  }
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
          validate
          steps={[
            {
              stepName: "Registrar o Período",
              stepComponent: Step1,
              stepId: "bloco",
            },
          ]}
          title="Cadastro do período"
          subtitle=""
          finishButtonClick={(e) => typeCreate(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
