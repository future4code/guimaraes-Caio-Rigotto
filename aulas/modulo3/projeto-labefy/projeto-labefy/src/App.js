import React from 'react';
import styled from 'styled-components';

import LeftContainer from './components/LeftContainer/LeftContainer';

const MainContainer = styled.div`
  display: flex;
  margin-top: 5vh;
`

export default class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <LeftContainer />
      </MainContainer>
    );
  }
}
