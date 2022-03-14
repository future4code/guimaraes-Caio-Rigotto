import React from "react";
import styled from "styled-components";
import axios from "axios";

import { urlPlaylist } from "./LeftContainer";
import { headers } from "./LeftContainer";

import AudioPlayer from "./AudioPlayer";

const SongSelector = styled.div`
  /* display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  height: 90%; */
`
const SongsSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  height: 90%;
`
const SongContainer = styled.div`
    display: flex;
    justify-content: space-between;
    &:hover{
        background-color: grey;
        border-radius: 10px;
        border: 1px solid black;
    }
`
const ButtonSong = styled.button`
    width: 100%;
    border: transparent;
    background-color: transparent;    
    height: 5vh;
    font-size: large;
    margin-bottom: 2vh;
`
const ButtonDeleteSong = styled.button`
    color: red;
    border-radius: 10px;
    height: 50%;
    align-self: center;
    margin-right: 5px;
`
const ButtonAddSong = styled.button`
    align-self: center;
    margin-top: auto;
    margin-bottom: 2vh;
    padding-left: 10%;
    padding-right: 10%;
    border-radius: 10px;
    color: green;
    font-size: large;
`
const AddSongContainer = styled.div`
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
const CloseAddSongButton = styled.button`
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

export default class Songs extends React.Component {
    state = {
        inputSongName: '',
        inputSongArtist: '',
        inputSongUrl: 'http://spoti4.future4.com.br/1.mp3',
        addingSong: false,
        selectSongId: '',
        selectSongName: '',
        selectSongArtist: '',
        selectSongUrl: '',
        songSelected: false
    }
    addTrackToPlaylist = () => {
        const body = {
            "name": this.state.inputSongName,
            "artist": this.state.inputSongArtist,
            "url": this.state.inputSongUrl
        }
        axios.post(`${urlPlaylist}${this.props.selectPlaylistId}/tracks`, body, headers)
            .then((resp) => {
                alert(`${this.state.inputSongName} adicionada à playlist!`)
                const addSong = !this.state.addingSong
                this.setState({ addingSong: addSong })
                this.setState({ inputSongName: '' })
                this.setState({ inputSongArtist: '' })
                this.setState({ inputSongUrl: 'http://spoti4.future4.com.br/1.mp3' })
                this.props.getPlaylistTracks()
            }).catch((err) => {
                alert(`Deu algo de errado! ${err.message}`)
            })
    }
    removeTrackFromPlaylist = () => {
        if (window.confirm("Você deseja escluir esta música?")) {
            axios.delete(`${urlPlaylist}${this.props.selectPlaylistId}/tracks/${this.state.selectSongId}`, headers)
                .then((resp) => {
                    alert("Música excluída com sucesso!")
                    this.props.getPlaylistTracks()
                    this.setState({ selectPlaylistId: '' })
                }).catch((err) => {
                    alert(`Deu algo de errado! ${err.message}`)
                })
        }
    }
    onClickAddingSong = () => {
        if (this.props.selectPlaylistId === '') {
            alert("Selecione uma playlist!")
        } else {
            const addSong = !this.state.addingSong
            this.setState({ addingSong: addSong })
        }
    }
    onMouseEnterDelete = (event) => {
        this.setState({ selectSongId: event.target.value })
    }
    onClickDeleteSong = (event) => {
        this.setState({ selectSongId: event.target.value })
        this.removeTrackFromPlaylist()
    }
    onClickSelectSong = (event) => {
        const [id, name, artist, url] = event.target.value.split("*")

        this.setState({ selectSongId: id })
        this.setState({ selectSongName: name })
        this.setState({ selectSongArtist: artist })
        this.setState({ selectSongUrl: url })
        this.setState({ songSelected: true })
    }
    onChangeInputName = (event) => {
        this.setState({ inputSongName: event.target.value })
    }
    onChangeInputArtist = (event) => {
        this.setState({ inputSongArtist: event.target.value })
    }
    onChangeInputUrl = (event) => {
        this.setState({ inputSongUrl: event.target.value })
    }
    renderAddSong = () => {
        if (this.props.selectPlaylistId)
            switch (this.state.addingSong) {
                case true:
                    return <AddSongContainer>
                        <CloseAddSongButton onClick={this.onClickAddingSong}>X</CloseAddSongButton>
                        <label>Nome:</label>
                        <input placeholder="Nome" onChange={this.onChangeInputName}
                            value={this.state.inputSongName}
                        ></input>
                        <label>Artista:</label>
                        <input placeholder="Artista" onChange={this.onChangeInputArtist}
                            value={this.state.inputSongArtist}
                        ></input>
                        <label>Url:</label>
                        <input placeholder="Link" onChange={this.onChangeInputUrl}
                            value={this.state.inputSongUrl}
                        ></input>
                        <button title="Adicionar música" onClick={this.addTrackToPlaylist}>Adicionar música</button>
                    </AddSongContainer>
                case false:
                    return null
                default:
                    return null
            }
    }
    render() {
        const renderSongs = this.props.songs
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((song) => {
                return <SongContainer key={song.id}>
                    <ButtonSong
                        title="Selecionar música"
                        onClick={this.onClickSelectSong}
                        value={`${song.id}*${song.name}*${song.artist}*${song.url}`}
                    >
                        {song.name}
                    </ButtonSong>
                    <ButtonDeleteSong
                        title="Deletar música"
                        value={song.id}
                        onMouseEnter={this.onMouseEnterDelete}
                        onClick={this.onClickDeleteSong}
                    >X
                    </ButtonDeleteSong>
                </SongContainer>
            })
        return (
            <SongSelector>
                <SongsSelectorContainer>
                {this.renderAddSong()}
                {renderSongs}
                <ButtonAddSong title="Adicionar música" onClick={this.onClickAddingSong}>+</ButtonAddSong>
                </SongsSelectorContainer>
                <AudioPlayer selectSongName={this.state.selectSongName} 
                selectSongUrl={this.state.selectSongUrl}
                selectSongArtist={this.state.selectSongArtist}
                songSelected={this.state.songSelected}
                />
            </SongSelector>
        )
    }
}