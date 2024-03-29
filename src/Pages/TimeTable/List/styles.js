import styled from 'styled-components';


export const Container = styled.div`
  padding: 0 0px;
  height: 100%;
  flex: 1;


  & + div {
    border-left: 0.5px solid black;
    border-bottom: 0.5px solid black;
    border-top: 0.5px solid black;
    border-right: 0.5px solid black;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    height: 42px;



    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      background: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
    ul {

      margin-top: 30px;

    }
  }
`;
