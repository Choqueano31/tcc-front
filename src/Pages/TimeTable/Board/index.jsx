/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import produce from 'immer';
import List from '../List';
import { loadLists } from '../services/api';
import teachers from '../services/teachers';
import { Container } from './styles';
import BoardContext from './context';
import myApi from 'Service/Api';
import { toast } from 'react-toastify';

const data = loadLists();

function Board() {
  // eslint-disable-next-line no-unused-vars

  const [lists, setLists] = useState(data);

  async function move(fromList, toList, from, to) {
    // console.log(fromList, toList, from, to);
    const objectDelect = lists[toList].cards[to];
    const dragged = lists[fromList].cards[from];
    dragged.id = objectDelect.id;
    const objectNew = {
      id: Math.random().toFixed(3),
      content: dragged.content,
      teacher: dragged.teacher,
      labels: dragged.labels,
      user: dragged.user,
    };
    // console.log(lists[fromList].cards[from]);
    // console.log(objectNew);
    const removeobject = lists[toList].cards.splice(to, 1, objectNew);
    // const addobject = removeobject.push(dragged)
    // const refin = lists[toList].cards;
    // console.log(lists);
    await setLists([...lists]);

    // setLists(produce(lists, (draft) => {
    //   const dragged = draft[fromList].cards[from];
    //   draft[toList].cards.splice(to, 1, dragged);
    // }));

    // draft[fromList].cards.splice(from, 1);
    // draft[toList].cards.splice(to, 1, dragged);
  }
  function gerarCorHexadecimal() {
    // eslint-disable-next-line radix
    return `#${parseInt((Math.random() * 0xFFF))
      .toString(16)
      .padStart(3, '0')}`;
  }
  function teacherAdd(teacher) {
    // const ts = {
    //   id: Math.random(),
    //   teacher,
    //   diponibilidade: [],
    // };
    // console.log(ts);
    // if (ts.teacher !== '') {
    //   teachers.push(ts);
    // }
    const ts2 = {
      id: Math.random().toFixed(3),
      teacher,
      content: 'Algebra Linear',
      labels: [`${gerarCorHexadecimal()}`],
      user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png',

    };
    lists[0].cards.push(ts2);

    // setLists([...lists,
    //  ,
    // ]);
  }
  async function ListDisciplines(){
    try{
      const response = await myApi.get("/disciplinas")
      console.log(response.data)
    }catch(err){
      toast.erro(err)
    }
  }
  useEffect(()=>{
    ListDisciplines()
  },[])
  return (

    <BoardContext.Provider value={{ lists, move, teacherAdd }}>
      <Container >

        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
        {/* <List />
      <List />
      <List />
      <List /> */}
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;
