import React from "react";
import styled from "styled-components";
import axios from "axios";

import { urlPlaylist } from "./LeftContainer";
import { headers } from "./LeftContainer";

import Songs from "./Songs";

const PlaylistSelector = styled.select`
  margin-top: auto;
  margin-bottom: 1vh;
  background-color: lightgrey;
  border: 1px solid grey;
  padding: 5%;
  &:focus{
      outline: none;
  }
`
const CreatePlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: space-around;
    height: 30%;
    width: 40%;
    background-color: grey;
    border: solid black 2px;
    border-radius: 10px;
`
const ClosePlaylistCreatorButton = styled.button`
    color: red;
    border-radius: 10px;
    background-color: transparent;
    border: 1px lightgrey solid;
    align-self: end;
    margin-right: 10px;
    &:hover{
        background-color: lightgrey;
    }
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
const DeletePlaylistButton = styled.button`
    color: red;
    border-radius: 10px;
`
const AddPlaylistButton = styled.button`
    border-radius: 10px;
    color: green;
    font-size: large;
`

export default class Playlists extends React.Component {
    state = {
        inputName: '',
        playlists: [],
        selectPlaylistName: '',
        selectPlaylistId: '',
        songsPlaylist: [],
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
    getPlaylistTracks = () => {
        axios.get(`${urlPlaylist}${this.state.selectPlaylistId}/tracks`, headers)
            .then((resp) => {
                this.setState({ songsPlaylist: resp.data.result.tracks })
            }).catch((err) => {
                console.log(err.message)
                alert("Selecione uma playlist!")
            })
    }
    createPlaylist = () => {
        const body = {
            "name": this.state.inputName,
        }
        axios.post(urlPlaylist, body, headers)
            .then((resp) => {
                console.log(resp.data)
                alert(`Playlist criada com sucesso!`)
                const createPlaylist = !this.state.addingSong
                this.setState({ inputName: '' })
                this.setState({ creatingPlaylist: createPlaylist })
                this.getAllPlaylists()
            }).catch((err) => {
                alert(err.message)
            })
    }
    deletePlaylist = () => {
        if (this.state.selectPlaylistId === '') {
            alert("Nenhuma playlist selecionada!")
        } else {
            if (window.confirm("Você deseja escluir esta playlist?")) {
                axios.delete(`${urlPlaylist}${this.state.selectPlaylistId}`, headers)
                    .then((resp) => {
                        alert("Playlist excluída com sucesso!")
                        this.getAllPlaylists()
                    }).catch((err) => {
                        console.log(err.message)
                        alert("Deu algo de errado!")
                    })
            }
        }
    }
    onChangeInputName = (event) => {
        this.setState({ inputName: event.target.value })
    }
    onChangeSelect = (event) => {
        const id = event
        console.log(id)
        this.setState({ selectPlaylistId: event.target.value })
    }
    onClickCreatingPlaylist = () => {
        const createPlaylist = !this.state.creatingPlaylist
        this.setState({ creatingPlaylist: createPlaylist })
    }
    renderPlaylistName = () => {
        switch (this.state.selectPlaylistId) {
            case "":
                return null
            default:
                return <h4>{this.state.selectPlaylistName}</h4>
        }
    }
    renderCreatePlaylist = () => {
        switch (this.state.creatingPlaylist) {
            case true:
                return <CreatePlaylistContainer>
                    <ClosePlaylistCreatorButton onClick={this.onClickCreatingPlaylist}>X</ClosePlaylistCreatorButton>
                    <label>Nova Playlist:</label>
                    <input placeholder="Nome" onChange={this.onChangeInputName}
                        value={this.state.inputName}
                    ></input>
                    <button onClick={this.createPlaylist}>Criar playlist</button>
                </CreatePlaylistContainer>
            case false:
                return null
            default:
                return null
        }
    }
    renderSelectEmpty = () => {
        if (this.state.selectPlaylistId === "") {
            return <option value={this.state.selectPlaylistId}>Selecione uma playlist...</option>
        } else {
            return null
        }
    }
    render() {
        const renderPlaylists = this.state.playlists
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((playlist) => {
                return <option
                    key={playlist.name}
                    value={playlist.id}>
                    {playlist.name}
                </option>
            })
        return (
            <SongPlaylistContainer>
                {this.renderPlaylistName()}
                {this.renderCreatePlaylist()}
                <Songs
                    songs={this.state.songsPlaylist}
                    selectPlaylistId={this.state.selectPlaylistId}
                    getPlaylistTracks={this.getPlaylistTracks}
                />
                <PlaylistSelector onChange={this.onChangeSelect}>
                    {this.renderSelectEmpty()}
                    {renderPlaylists}
                </PlaylistSelector>
                <PlaylistButtonsContainer>
                    <SelectPlaylistButtons title="Selecionar playlist" onClick={this.getPlaylistTracks}>Selecionar playlist</SelectPlaylistButtons>
                    <AddPlaylistButton title="Adicionar playlist" onClick={this.onClickCreatingPlaylist}>+</AddPlaylistButton>
                    <DeletePlaylistButton title="Deletar playlist" onClick={this.deletePlaylist}>X</DeletePlaylistButton>
                </PlaylistButtonsContainer>
            </SongPlaylistContainer>
        )
    }
}