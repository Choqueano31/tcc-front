
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import BoardContext from '../Board/context';
import Card from '../Card';
import { Container } from './styles';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';

function List({ data, index: listIndex }) {
  const [displayBasic, setDisplayBasic] = useState(false);
  const { teacherAdd } = useContext(BoardContext);
  const [name, setName] = useState('');
  function teacherHandle() {
    teacherAdd(name);
  }
  const renderFooter = () => (
    <div>
      <Button label="Cancelar" icon="pi pi-times" onClick={() => setDisplayBasic(false)} className="p-button-text" />
      <Button
        label="Salvar"
        icon="pi pi-check"
        onClick={() => {
          teacherHandle();
          setDisplayBasic(false);
          setName('');
        }}
        autoFocus
      />
    </div>
  );
  return (
    <div style={{
      padding: "0 0px",
      height: "690px",
      flex: 1,
      borderLeft: "0.5px solid black",
      borderRight: "0.5px solid black",
      borderBottom: "0.5px solid black",
      borderTop: "0.5px solid black"
    }}>
      <Dialog header="Adicionar Professor"
       visible={displayBasic}
       style={{ width: '50vw' }}
        footer={renderFooter('displayBasic')}
        onHide={() => setDisplayBasic(false)}>
        <span className="p-float-label" style={{ marginTop: 10 }}>
          <InputText id="username" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Insira o nome do professor</label>
        </span>
      </Dialog>
      {(data.creatable && !data.horary) && (
        <>
          <header
           style={{
            display:"flex",
            justifyContent:"space-between",
            justifyContent:"center",
            alignItems:"center",
            border: "1px solid",
             color: "white",
              backgroundColor: "#34495e",
                height: '50px' }}>
            <h2
             style={{
              fontWeight:500,
               fontSize:'16px',
                padding:"0 10px"}} >{data.title}</h2>
          </header>

          <ul style={{
            marginTop: 30,
            marginRight: 20,
            height: 520,
            overflowX: "hidden",
            overflowY: 'scroll'
          }}  >
            {data.cards.map((card, index) => (
              <Card
                key={card.id}
                listIndex={listIndex}
                index={index}
                data={card}
              />
            ))}
          </ul>

          </>)}
      {data.horary && (
        <>
          <header style={{
            display:"flex",
            justifyContent:"space-between",
            justifyContent:"center",
            alignItems:"center",
            border: "1px solid",
             color: "white",
              backgroundColor: "#34495e",

                height: '50px' }}>
            <h2
             style={{
              fontWeight:500,
               fontSize:'16px',
                padding:"0 10px"}}
            >{data.title}</h2>
          </header>
          <ul style={{ marginTop: 30 }}>
            {data.cards.map((card, index) => (
              <div key={index} style={{
                height: 80, padding: 15, marginTop: 12,
                display: 'flex', alignItems: "center",
                justifyContent: 'center'
              }}>{card.horario} </div>
            ))}
          </ul>
        </>
      )
      }
      {!data.creatable && (
        <>
          <header
          style={{
            display:"flex",
            justifyContent:"space-between",
            justifyContent:"center",
            alignItems:"center",
            border: "1px solid",
             color: "white",
              backgroundColor: "#34495e",
                height: '50px'
            }}>
            <h2
            style={{
              fontWeight:500,
               fontSize:'16px',
                padding:"0 10px"}}
            >{data.title}</h2>

          </header>

          <ul style={{ marginTop: 30 }}>
            {data.cards.map((card, index) => (
              <Card
                key={card.id}
                listIndex={listIndex}
                index={index}
                data={card}
              />
            ))}
          </ul>
        </>
      )
      }

    </div>
  );
}

export default List;
