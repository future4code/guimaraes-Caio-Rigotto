import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

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

const MusicPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20%;
  border-right: 2px solid black;
`

const MusicSelector = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  height: 90%;
`

const PlaylistSelector = styled.select`
  margin-top: auto;
  margin-bottom: 1vh;
  background-color: lightgrey;
  border: 1px solid lightgrey;
  padding: 5%;
`

const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = { headers: { Authorization: "caio-rigotto-guimaraes" } }

class Playlists extends React.Component {
  state = {
    playlists: [],
    selectedPlaylistId: '',
  }

  componentDidMount() {
    this.getAllPlaylists()
  }
  componentDidUpdate() {
    // this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    axios.get(urlPlaylist, headers)
      .then((resp) => {
        this.setState({ playlists: resp.data.result.list })
      }).catch((err) => {
        console.log(err.message)
      })
  }

  // onChangeSelector=()=>{
  //   this.setState({selectedPlaylistId: target.value})
  // }

  render() {
    const renderPlaylists = this.state.playlists.map((playlist) => {
      return <option value={playlist.id}>
        {playlist.name}
        </option>
    })
    console.log(this.state.playlists)
    return (
      <PlaylistContainer>
        <MusicPlaylistContainer>
          <MusicSelector></MusicSelector>
          <PlaylistSelector>{renderPlaylists}</PlaylistSelector>
        </MusicPlaylistContainer>
      </PlaylistContainer>
    );
  }
}

export default Playlists;
