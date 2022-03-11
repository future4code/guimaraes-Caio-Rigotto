import React from 'react';
import styled from 'styled-components';

import LeftContainer from './components/LeftContainer/LeftContainer';
import RightContainer from './components/RightContainer/RightContainer';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`

export default class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <LeftContainer />
        <RightContainer />
      </MainContainer>
    );
  }
}
