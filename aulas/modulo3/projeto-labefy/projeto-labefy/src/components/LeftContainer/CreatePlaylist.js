import axios from "axios";
import React from "react";
import styled from "styled-components";

import { urlPlaylist } from "./Playlists";
import { headers } from "./Playlists";

const CreatePlaylistContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: space-around;
    height: 20%;
    width: 20%;
    background-color: grey;
    border: solid black 2px;
    border-radius: 10px;
`

export default class CreatePlaylist extends React.Component{
    state = {
        inputName: '',
    }
    createPlaylist = () => {
        const body = {
            "name": this.state.inputName 
        }
        axios.post(urlPlaylist, body, headers)
        .then((resp)=>{
            console.log(resp.data)
            alert(`Playlist ${this.state.inputName} criada com sucesso!`)
            this.setState({inputName: ''})
        }).catch((err)=>{
            console.log(err.message)
            alert("Aconteceu algo de errado!")
        })
    }
    onChangeInputName = (event) => {
        this.setState({inputName: event.target.value})
    }
    onClickCreatePlaylist= () =>{

    }
    render(){
        return(
            <CreatePlaylistContainer>
                <label>Nome:</label>
                <input onChange={this.onChangeInputName} 
                value={this.state.inputName}
                ></input>
                <button onClick={this.onClickCreatePlaylist}>Criar playlist</button>
            </CreatePlaylistContainer>
        )
    }
}