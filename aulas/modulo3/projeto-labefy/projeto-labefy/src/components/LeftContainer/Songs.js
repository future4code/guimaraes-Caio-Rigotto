import React from "react";
import styled from "styled-components";
import axios from "axios";

import { urlPlaylist } from "./LeftContainer";
import { headers } from "./LeftContainer";

const SongSelector = styled.div`
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
    }
`
const ButtonSong = styled.button`
    width: 100%;
    border: transparent;
    background-color: transparent;    
`
const ButtonDeleteSong = styled.button`
    color: red;
    border-radius: 10px;
    height: 50%;
    align-self: center;
    margin-right: 5px;
`
const ButtonAddSong = styled.button`
    display: block;
    align-self: center;
    margin-top: 1vh;
    margin-bottom: 1vh;
    padding: 20px;
    border-radius: 10px;
    color: green;
    font-size: large;
`
const AddSongContainer = styled.div`
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
const CloseAddSongButton = styled.button`
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

export default class Songs extends React.Component {
    state = {
        inputSongName: '',
        inputSongArtist: '',
        inputSongUrl: '',
        addingSong: false
    }
    addTrackToPlaylist = () => {
        const body = {
            "name": this.state.inputSongName,
            "artist": this.state.inputSongArtist,
            "url": this.state.inputSongUrl
        }
        axios.post(`${urlPlaylist}${this.props.selectPlaylistId}/tracks`, body, headers)
            .then((resp) => {
                console.log(resp.data)
                alert(`${this.state.inputSongName} adicionada à playlist!`)
                const addSong = !this.state.addingSong
                this.setState({ addingSong: addSong })
                this.setState({ inputSongName: '' })
                this.setState({ inputSongArtist: '' })
                this.setState({ inputSongUrl: '' })
                this.props.getPlaylistTracks()
            }).catch((err) => {
                alert(err.message)
            })
    }
    onClickAddingSong = () => {
        if (this.props.selectPlaylistId === '') {
            alert("Selecione uma playlist!")
        } else {
            const addSong = !this.state.addingSong
            this.setState({ addingSong: addSong })
        }
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
                        <button onClick={this.addTrackToPlaylist}>Adicionar música</button>
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
                    <ButtonSong title="Tocar música">
                        <p value={song.id}>
                            {song.name}
                        </p>
                    </ButtonSong>
                    <ButtonDeleteSong>X</ButtonDeleteSong>
                </SongContainer>
            })
        return (
            <SongSelector>
                {this.renderAddSong()}
                {renderSongs}
                <ButtonAddSong title="Adicionar música" onClick={this.onClickAddingSong}>+</ButtonAddSong>
            </SongSelector>
        )
    }
}