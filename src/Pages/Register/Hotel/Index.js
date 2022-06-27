import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";
import myApi from "Service/Api.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function HotelRegister() {
  async function personRegistered(e) {
    // console.log(e);
    const dados = {
      usuario_id: e.hotel.usuario_id,
      entry_date: e.bedroom.data_entry,
      exit_date: e.bedroom.data_exit,
      id_ap: e.bedroom.id_apt,
      status: 1,
      obs: e.obs.obs,
      occurrency: e.obs.occurrency,
    };
    try {
      const response = await myApi.post("/Hotelcreate", dados);
      await myApi.put(`/bedroomupdate/${dados.id_ap}`, {
        status: 2,
      });
      // console.log(updateAp);
      // console.log(response.error);
      if (response) {
        toast.success("Estadia criada com sucesso!");
      } else {
        toast.error(response.error);
      }
    } catch {
      toast.error(
        "Não foi possível cadastrar estadia no hotel, possivelmente associado está com estadia ativa"
      );
    }
  }
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
        <Wizard
          validate
          steps={[
            {
              stepName: "Dados Pessoais",
              stepComponent: Step1,
              stepId: "hotel",
            },
            { stepName: "Hospedagem", stepComponent: Step2, stepId: "bedroom" },
            { stepName: "Observações", stepComponent: Step3, stepId: "obs" },
          ]}
          title="Preencha as informações"
          subtitle="Insira as informações a cerca do hóspede"
          finishButtonClick={(e) => personRegistered(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
