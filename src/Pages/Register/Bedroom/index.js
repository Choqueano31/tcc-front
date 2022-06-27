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

export default function BedroomRegister() {
  async function typeCreate(e) {
    // console.log(e)
    const dados = {
      name: e.bedroom.name,
      description: e.bedroom.description,
      status: 1
    };
 
    try {
      const response = await myApi.post("/bedroomscreate", dados);
      if (response) {
        toast.success("Quarto criado com sucesso!");
        setTimeout(() => {
          reload2();
        }, 3000);
      }
    } catch (error) {
      // console.log(error);
      toast.error("Não foi possível criar Quarto");
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
              stepName: "Registrar tipo de Quarto",
              stepComponent: Step1,
              stepId: "bedroom",
            },
          ]}
          title="Cadastro de tipo de Quarto"
          subtitle=""
          finishButtonClick={(e) => typeCreate(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
