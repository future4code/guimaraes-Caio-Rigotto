import React from 'react';
import styled from 'styled-components';

import Playlists from './Playlists';

export const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"
export const headers = { headers: { Authorization: "caio-rigotto-guimaraes" } }

const PlaylistContainer = styled.div`
  display: flex;
  border: 2px solid black;
  background-color: lightgrey;
  height: 90vh;
  margin-left: auto;
  margin-right: auto;
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

