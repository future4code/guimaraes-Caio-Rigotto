import React from "react";
import styled from "styled-components";
import axios from "axios";

import { urlPlaylist } from "./LeftContainer";
import { headers } from "./LeftContainer";

import Songs from "./Songs"; 

const SongPlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`
const PlaylistRenderedName = styled.h2`
    line-break: auto;
    max-width: fit-content;
    text-align: center;
    align-self: center;
`
const PlaylistSelector = styled.select`
  margin-top: auto;
  margin-bottom: 1vh;
  background-color: lightgrey;
  border: 1px solid grey;
  padding: 2%;
  font-size: large;
  &:focus{
      outline: none;
    }
`
const CreatePlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: grey;
    border: solid black 2px;
    border-radius: 10px; 
    position: absolute;
    padding: 2%;
    top: 5vh;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    width: fit-content;
    height: fit-content;
`
const ClosePlaylistCreatorButton = styled.button`
    color: red;
    border-radius: 10px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
    border: 1px lightgrey solid;
    align-self: end;
    margin-right: 10px;
    &:hover{
        background-color: lightgrey;
    }
`
const PlaylistButtonsContainer = styled.div`
        display: flex;
        justify-content: space-around;
        margin-bottom: 2vh;
`
const SelectPlaylistButtons = styled.button`
    font-size: large;
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
        playlistNameRender: '',
        songsPlaylist: [],
        renderPlaylistName: '',
        renderingPlaylistName: false,
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
                alert("Deu algo de errado!")
            })
    }
    getPlaylistTracks = () => {
        axios.get(`${urlPlaylist}${this.state.selectPlaylistId}/tracks`, headers)
            .then((resp) => {
                this.setState({ songsPlaylist: resp.data.result.tracks })
                this.setState({ renderingPlaylistName: true })
                const renderName = this.state.selectPlaylistName
                this.setState({ renderPlaylistName: renderName })
            }).catch((err) => {
                console.log(err.message)
                alert("Deu algo de errado!")
            })
    }
    createPlaylist = () => {
        const body = {
            "name": this.state.inputName,
        }
        axios.post(urlPlaylist, body, headers)
            .then((resp) => {
                console.log(resp.data)
                alert(`Playlist ${this.state.inputName} criada com sucesso!`)
                const createPlaylist = !this.state.creatingPlaylist
                this.setState({ inputName: '' })
                this.setState({ creatingPlaylist: createPlaylist })
                this.getAllPlaylists()
            }).catch((err) => {
                console.log(err.message)
                alert("Deu algo de errado!")
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
                        this.setState({renderPlaylistName: ''})
                        this.setState({selectPlaylistId: ''})
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
        const [id, name] = event.target.value.split("*")

        this.setState({ selectPlaylistId: id })
        this.setState({ selectPlaylistName: name })
    }
    onClickCreatingPlaylist = () => {
        const createPlaylist = !this.state.creatingPlaylist
        this.setState({ creatingPlaylist: createPlaylist })
    }
    renderPlaylistName = () => {
        switch (this.state.renderingPlaylistName) {
            case false:
                return null
            case true:
                return <PlaylistRenderedName>{this.state.renderPlaylistName}</PlaylistRenderedName>
            default:
                return null
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
                    value={`${playlist.id}*${playlist.name}`}>
                    {playlist.name}
                </option>
            })
        return (
            <SongPlaylistContainer>
                {this.renderPlaylistName()}
                <Songs
                    songs={this.state.songsPlaylist}
                    selectPlaylistId={this.state.selectPlaylistId}
                    getPlaylistTracks={this.getPlaylistTracks}
                />
                {this.renderCreatePlaylist()}
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