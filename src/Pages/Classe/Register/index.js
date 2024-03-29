import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Wizard from "components/Wizard/Wizard.js";
import Step1 from "./WizardSteps/Step1.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import myApi from "Service/Api.js";
import Step3 from "./WizardSteps/Step3.js";

export default function ClassRegister() {
  async function typeCreate(e) {
    const dados = {
      nome: e.class.name,
      restrict: e.obs.restrict
    };

    try {
      const response = await myApi.post("/salas", dados);
      if (response) {
        toast.success("Sala criada com sucesso!");
      }
    } catch (error) {
      // console.log(error);
      toast.error("Não foi possível criar Sala");
    }
  }

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
          validate
          steps={[
            {
              stepName: "Registrar a sala",
              stepComponent: Step1,
              stepId: "class",
            },
            {
              stepName: "Restrições",
              stepComponent: Step3,
              stepId: "obs",
            },
          ]}
          title="Cadastro de sala"
          subtitle=""
          finishButtonClick={(e) => typeCreate(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
