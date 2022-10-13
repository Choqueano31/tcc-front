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

export default function DisciplinasRegister() {
  function gerarCorHexadecimal() {
    // eslint-disable-next-line radix
    return `#${parseInt((Math.random() * 0xFFF))
      .toString(16)
      .padStart(3, '0')}`;
  }
  async function typeCreate(e) {
    const dados = {
      nome: e.disciplinas.name,
      code: e.disciplinas.code,
      bloco_id: e.disciplinas.bloco,
      sala_id:e.disciplinas.sala,
      professor_id: e.disciplinas.professor,
      labels:gerarCorHexadecimal()
    };
    console.log(dados)

    try {
      const response = await myApi.post("/disciplinas", dados);
      if (response) {
        toast.success("Disciplina criada com sucesso!");

          reload2();

      }
    } catch (error) {
      // console.log(error);
      toast.error("Não foi possível criar Disciplina");
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
              stepName: "Registrar a disciplina",
              stepComponent: Step1,
              stepId: "disciplinas",
            },
            // {
            //   stepName: "Restrições",
            //   stepComponent: Step3,
            //   stepId: "obs",
            // },
          ]}
          title="Cadastro de Disciplina"
          subtitle=""
          finishButtonClick={(e) => typeCreate(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
