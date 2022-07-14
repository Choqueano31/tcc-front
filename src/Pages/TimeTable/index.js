import { Button, DialogActions } from "@material-ui/core";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import React, { useState } from "react"
import DialogPdfReqDiaria from "./PdfManagement/DialogPdf"


export default function TimeTable(){
  const[showPdfTimeTable, setShowPdfTimeTable] =useState(false)
  function handleShow() {
    setShowPdfTimeTable(!showPdfTimeTable);
  }
  return(
    <GridContainer justify="center">
      <GridItem xs={12} sm={8}>
      {showPdfTimeTable && (
            <DialogPdfReqDiaria
              header="Imprimir Requisição"
              closeDialog={() => handleShow()}
              showDialog={showPdfTimeTable}
            />
          )}
           <DialogActions style={{display:"flex"  ,marginTop:120, alignItems:"center", justifyContent:"center"}}>
            <Button  onClick={()=> {}} color="primary">
              Cancelar
            </Button>
            <Button onClick={() => {handleShow()}} color="primary">
              IMPRIMIR
            </Button>
          </DialogActions>
      </GridItem>
    
    </GridContainer>
    
  )
}