import React, { Component } from "react";
import styled from "styled-components";
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeTwitter from "../../img/twitter.svg"
import iconeFacebook from "../../img/facebook.svg"
import iconeInstagram from "../../img/instagram.svg"

const ShareContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`

const BotaoShare = styled.button`

`

export class SecaoCompartilhar extends Component{
    render() {
        return <ShareContainer>
            <BotaoShare onClick={this.props.aoCompartilhar}><IconeComContador
            icone={iconeFacebook}
            valorContador={'Facebook'}
            />
            </BotaoShare>
            <BotaoShare onClick={this.props.aoCompartilhar}><IconeComContador
            icone={iconeTwitter}
            valorContador={'Twitter'}
            />
            </BotaoShare>
            <BotaoShare onClick={this.props.aoCompartilhar}><IconeComContador
            icone={iconeInstagram}
            valorContador={'Instagram'}
            />
            </BotaoShare>
        </ShareContainer>
    }
}