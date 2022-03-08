import React from 'react';
import styled from 'styled-components';

import Playlists from './Playlists';

const PlaylistContainer = styled.div`
  display: flex;
  border: 2px solid black;
  background-color: lightgrey;
  height: 80vh;
  width: 60vw;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  border-radius: 10px;
`

export default class LeftContainer extends React.Component {
  render() {
    return (
      <PlaylistContainer>
          <Playlists />
      </PlaylistContainer>
    );
  }
}

