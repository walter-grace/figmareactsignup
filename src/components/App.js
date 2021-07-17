import React from 'react'
import styled from 'styled-components'
import bkGround from '../assets/background.png'
import BG from '../assets/bg.png'
import Sidebar from './Sidebar'
import Main from './Main'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${BG});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;


export default App

