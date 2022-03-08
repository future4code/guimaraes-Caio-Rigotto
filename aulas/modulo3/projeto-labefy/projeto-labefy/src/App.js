import React from 'react';
import styled from 'styled-components';

import LeftContainer from './components/LeftContainer/LeftContainer';
import CreatePlaylist from './components/LeftContainer/CreatePlaylist';

const MainContainer = styled.div`
  display: flex;
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
