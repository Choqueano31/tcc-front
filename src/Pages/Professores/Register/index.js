import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Step1 from "./WizardSteps/Step1.js";
// import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";
// import moment from "moment";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import myApi from "Service/Api.js";

export default function ProfessoresRegister() {
  async function typeCreate(e) {
    const dados = {
      nome: e.teacher.name,
      restrict:e.obs.restrict
    };
    console.log(dados)

    try {
      const response = await myApi.post("/professor", dados);
      if (response) {
        toast.success("Professor cadastrado com sucesso!");
        setTimeout(() => {
          reload2();
        }, 3000);
      }
    } catch (error) {
      // console.log(error);
      toast.error("Não foi possível cadastrar professor.");
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
              stepName: "Registrar Professor",
              stepComponent: Step1,
              stepId: "teacher",
            },
            {
              stepName: "Restrições",
              stepComponent: Step3,
              stepId: "obs",
            },
          ]}
          title="Cadastro de Professor"
          subtitle=""
          finishButtonClick={(e) => typeCreate(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
