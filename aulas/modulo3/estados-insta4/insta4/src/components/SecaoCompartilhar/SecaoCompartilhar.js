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

export class SecaoCompartilhar extends Component {

    state = {
        redes: [{
            icone: iconeFacebook,
            valorContador: "Facebook"
        },
        {
            icone: iconeTwitter,
            valorContador: "Twitter"
        },
        {
            icone: iconeInstagram,
            valorContador: "Instagram"
        }
        ]
    }

    

    render() {

        const RedesCompartilhamento = this.state.redes.map((rede, index) => {
            
            return (
                <BotaoShare key={index} onClick={this.props.aoCompartilhar}>
                    <IconeComContador key={index}
                        icone={rede.icone}
                        valorContador={rede.valorContador}
                    />
                </BotaoShare>
            )
        })
        return (
            <ShareContainer>
                {RedesCompartilhamento}
            </ShareContainer>)
    }
}