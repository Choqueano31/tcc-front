/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useRef, useContext, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { MdSettingsApplications } from 'react-icons/md';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ContainerCard, Label } from './styles.js';
import BoardContext from '../Board/context';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import './stylescard.css'

function Card({ data, index, listIndex }) {
  const ref = useRef();
  const [name, setName] = useState('');
  const [displayBasic, setDisplayBasic] = useState(false);

  const { move, teacherAdd } = useContext(BoardContext);
  function teacherHandle() {

    // teacherAdd(name);
  }
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: () => ({
      index, id: data.id, content: data.content, listIndex,
    }),
    // collect: (monitor) => ({
    //   isDragging: monitor.isDragging(),
    // }),
    end: (item, monitor) => {
      // console.log(listIndex);
      const dropResult = monitor.getDropResult();
      // console.log(dropResult.index, dropResult.listIndex);
      if (item && dropResult) {
        // alert(`You dropped ${item.content} into ${dropResult.name}!`);
        const draggedListIndex = item.listIndex;
        const targetListIndex = dropResult.listIndex;
        const draggedIndex = item.index;
        const targetIndex = dropResult.index;
        if (draggedListIndex === targetListIndex) {
          return;
        }
        move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
        // const targetSize = ref.current.getBoundingClientRect();
        // const targetCenter = (targetSize.bottom - targetSize.top) / 2;

        // const draggedOffSet = monitor.getClientOffset();

        // // esse aqui
        // const draggedTop = draggedOffSet.y - targetSize.top;

        // eslint-disable-next-line no-param-reassign
        // item.index = targetIndex;
        // item.listIndex = targetListIndex;
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: 'CARD',
    drop: () => ({ index, listIndex }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    // hover(item, monitor) {
    //   const draggedListIndex = item.listIndex;
    //   const targetListIndex = listIndex;
    //   const draggedIndex = item.index;
    //   const targetIndex = index;
    //   if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
    //     return;
    //   }
    //   const targetSize = ref.current.getBoundingClientRect();
    //   const targetCenter = (targetSize.bottom - targetSize.top) / 2;

    //   const draggedOffSet = monitor.getClientOffset();

    //   // esse aqui
    //   const draggedTop = draggedOffSet.y - targetSize.top;
    //   move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
    //   // eslint-disable-next-line no-param-reassign
    //   item.index = targetIndex;
    //   item.listIndex = targetListIndex;
    //   // if ((draggedIndex < targetIndex) && (draggedTop < targetCenter)) {
    //   //   // nao permite mudar se já estiver acima do card
    //   // }
    //   // if (draggedIndex > targetIndex && draggedTop > targetCenter) {
    //   //   // nao permite mudar se já estiver abaixo do card
    //   // }
    // },

  });
  const isActive = canDrop && isOver;
  dragRef(dropRef(ref));

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

    <div id='content' ref={ref} isDragging={isDragging}>
      <Dialog header="Adicionar Professor" visible={displayBasic} style={{ width: '50vw' }} footer={renderFooter('displayBasic')} onHide={() => setDisplayBasic(false)}>
        <span className="p-float-label" style={{ marginTop: 10 }}>
          <InputText id="username" value={name} onChange={(e) => setName(e.target.value)} />

        </span>
      </Dialog>
      <header>
        <Label color={data.labels} style={{ marginRight: 5 }} />
        {data.content}
      </header>
      <p style={{display:"flex", alignItems:"center", justifyContent:"center"}}>

        {' '}
        {data.teacher}
        {' '}
      </p>
      <p style={{display:"flex", alignItems:"center", justifyContent:"center"}}>

{' '}

          {' '}
          {isActive ? <p style={{ color: 'red' }}>Solte</p> : null}
          </p>
      {/* {data.teacher !== '' ? (
        <aside>
          <MdSettingsApplications
            style={{ height: 18, width: 18 }}
            onClick={() => setDisplayBasic(true)}
          />
        </aside>
      ) : null} */}

      {/* <img src={data.user} alt="teste" /> */}
    </div>
  );
}

export default Card;
