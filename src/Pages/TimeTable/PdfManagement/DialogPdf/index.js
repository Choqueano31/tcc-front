/* eslint-disable react/prop-types */
import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Document, Page, PDFViewer, usePDF } from '@react-pdf/renderer';

import { Container } from './styles';
import {PdfReqDiaria} from '../Pdf';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

import './DialogDemo.css';


export default function DialogPdfReqDiaria({
  showDialog,
  closeDialog,
}) {
  async function handleClose() {
    closeDialog();
  }

  function renderFooter() {
    return (
      <div>
        <Button
          type="button"
          icon="pi pi-times"
          className="p-button-danger"
          label="Cancelar"
          onClick={() => handleClose()}
        />
      </div>
    );
  }

  return (
    <Dialog
    header="Imprimir Relatorio"
      visible={showDialog}
      style={{ width: '50vw' }}
      modal
      maximizable
      onHide={() => handleClose()}
      footer={renderFooter()}
    >
      <Container>
      <PDFViewer style={{ width: '100%', margin: '0 auto', height: 640 }}>
      
          <PdfReqDiaria />
         </PDFViewer>
      </Container>
    </Dialog>
  );
}
