import React from 'react';
import styled from 'styled-components';

const AudioPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgrey;
  margin-right: 3vw;
  border-radius: 10px;
`

export default class AudioPlayer extends React.Component {
    renderSongNameArtist = () => {
        switch (this.props.songSelected) {
            case true:
                return <div><h2>{this.props.selectSongName} - {this.props.selectSongArtist}</h2>
                    <audio controls src={this.props.selectSongUrl}
                        type='audio/mp3'>
                    </audio>
                </div>
            case false:
                return null
            default:
                return null
        }
    }
    render() {
        return (
            <AudioPlayerContainer>
                {this.renderSongNameArtist()}
            </AudioPlayerContainer>
        );
    }
}