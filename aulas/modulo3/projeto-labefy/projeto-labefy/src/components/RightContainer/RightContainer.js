import React from 'react';
import styled from 'styled-components';

import AudioPlayer from './AudioPlayer';

const PlaylistContainer = styled.div`
  display: flex;
  border: 2px solid black;
  background-color: lightgrey;
  height: 90vh;
  width: 80vw;
  margin-right: 3vw;
  border-radius: 10px;
`

export default class RightContainer extends React.Component {
  render() {
    return (
      <PlaylistContainer>
          <AudioPlayer />
      </PlaylistContainer>
    );
  }
}