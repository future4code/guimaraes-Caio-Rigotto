import React from "react";
import styled from "styled-components";

const SongSelector = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid black;
  height: 90%;
`
const SongContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const ButtonSong = styled.button`
    width: 100%;
    border: transparent;
    background-color: transparent;
`
const ButtonDeleteSong = styled.button`
    color: red;
    background-color: transparent;
    border-radius: 10px;
    height: 50%;
    align-self: center;
    margin-right: 5px;
`

export default function Songs(props) {
    const renderPlaylists = props.songs.map((song) => {
        return <SongContainer key={song.id}>
            <ButtonSong>
            <p value={song.id}>
                {song.name}
            </p>
            </ButtonSong>
            <ButtonDeleteSong>X</ButtonDeleteSong>
        </SongContainer>
    })
    return (
        <SongSelector>
            {renderPlaylists}
        </SongSelector>
    )
}