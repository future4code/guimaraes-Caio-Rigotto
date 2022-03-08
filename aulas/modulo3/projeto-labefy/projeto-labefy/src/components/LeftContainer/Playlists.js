import React from "react";
import styled from "styled-components";
import axios from "axios";

import Songs from "./Songs";
import CreatePlaylist from "./CreatePlaylist";

const PlaylistSelector = styled.select`
  margin-top: auto;
  margin-bottom: 1vh;
  background-color: lightgrey;
  border: 1px solid grey;
  padding: 5%;
`

const SongPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  border-right: 2px solid black;
`
const PlaylistButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2vh;
`
const SelectPlaylistButtons = styled.button`

`

export const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"
export const headers = { headers: { Authorization: "caio-rigotto-guimaraes" } }

export default class Playlists extends React.Component {
    state = {
        playlists: [],
        selectPlaylistId: '',
        songsPlaylist:[],
        creatingPlaylist: false,
    }
    componentDidMount() {
        this.getAllPlaylists()
    }
    getAllPlaylists = () => {
        axios.get(urlPlaylist, headers)
            .then((resp) => {
                this.setState({ playlists: resp.data.result.list })
            }).catch((err) => {
                console.log(err.message)
            })
    }
    getPlaylistTracks = () =>{
        axios.get(`${urlPlaylist}${this.state.selectPlaylistId}/tracks`,headers)
        .then((resp)=>{
            this.setState({songsPlaylist: resp.data.result.tracks})
            console.log(this.state.songsPlaylist)
        }).catch((err)=>{
            console.log(err.message)
            alert("Selecione uma playlist!")
        })
    }
    onChangeSelect = (event) => {
        this.setState({ selectPlaylistId: event.target.value })
    }
    onClickCreatingPlaylist = () =>{
        const createPlaylist = !this.state.creatingPlaylist
        this.setState({creatingPlaylist: createPlaylist})
    }
    renderCreatePlaylist = () =>{
        switch(this.state.creatingPlaylist){
            case true:
                return <CreatePlaylist/>
            case false:
                return null
            default:
                return null
        }
    }
    render() {
        const renderPlaylists = this.state.playlists.map((playlist) => {
            return <option key={playlist.id} value={playlist.id}>
                {playlist.name}
            </option>
        })
        console.log(this.state.selectPlaylistId)
        console.log(this.state.playlists)
        return (
            <SongPlaylistContainer>
                {this.renderCreatePlaylist()}
                <Songs songs={this.state.songsPlaylist}/>
            <PlaylistSelector onChange={this.onChangeSelect}>
                <option value={this.state.selectPlaylistId}>Selecione uma playlist...</option>
                {renderPlaylists}
            </PlaylistSelector>
            <PlaylistButtonsContainer>
            <SelectPlaylistButtons onClick={this.getPlaylistTracks}>Selecionar playlist</SelectPlaylistButtons>
            <button>X</button>
            </PlaylistButtonsContainer>
            <button onClick={this.onClickCreatingPlaylist}>Adicionar playlist</button>
            </SongPlaylistContainer>
        )
    }
}