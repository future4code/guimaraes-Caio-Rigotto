import React from "react";
import styled from "styled-components";
import BotaoSend from "../img/send.png"

const ContainerMensagensLog = styled.div`
    height: 85vh;
    width: 85vw;
    margin: 15px;
    border: 2px solid black;
`

const ContainerMensagensIndividual = styled.div`
    display: flex;
    background-color: yellow;
    justify-content: left;
    align-items: center;
    max-width: 40%;
    min-width: 8%;
    word-wrap: break-word;
`

const Usuario = styled.h2`
     margin: 10px;
`

const Mensagem = styled.p`
    
`

const ContainerInput = styled.div`
    margin: 5px;
    display: flex;
    justify-content: space-between;
`

const InputUsuario = styled.input`
    width: 10vw;
    height: 2.5vh;
    margin-top: auto;
    margin-bottom: auto;
`

const InputMensagem = styled.input`
    width: 60vw;
    height: 5vh;
    padding-left: 15px;
    margin: 5px;
    border-radius: 25px 25px;
`
const IconeBotaoEnviar = styled.img`
    width: 2.5vw;
    height: 5vh;
    &:hover{
    filter: invert(24%) sepia(5%) saturate(6%) hue-rotate(46deg) brightness(98%) contrast(85%);,
    }
`

const BotaoEnviarMensagem = styled.button`
    background-color: transparent;
    border: transparent;
    
`

class SecaoMensagemLogs extends React.Component {
    state = {
        mensagens: [
            {
                usuario: 'Testonildo',
                mensagem: 'eu sou um cara muito dos testes',
            }
        ],

        comentou: true,
        valorInputUsuario: '',
        valorInputMensagem: ''
    }

    onChangeUsuario = (event) => {
        this.setState({
            valorInputUsuario: event.target.value
        })
    }

    onChangeMensagem = (event) => {
        this.setState({
            valorInputMensagem: event.target.value
        })
    }

    aoEnviar = () => {

        const mensagemTemp = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem
        };

        const novaMensagem = [...this.state.mensagens, mensagemTemp]

        this.setState({
            valorInputMensagem: '',
            valorInputUsuario: '',
            comentou: true,
            mensagens: novaMensagem
        })
    }

    render() {

        const mensagem = this.state.mensagens.map((indv) => {
            return (
                <ContainerMensagensIndividual>
                    < Usuario >
                        {indv.usuario}:
                    </ Usuario>
                    <Mensagem>
                        {indv.mensagem}
                    </Mensagem>
                </ContainerMensagensIndividual>
            );
        })

        return (
            <div>
                <ContainerMensagensLog>
                    {mensagem}
                </ContainerMensagensLog>
                <ContainerInput>
                    <InputUsuario
                        placeholder={'Usuário'}
                        value={this.state.valorInputUsuario}
                        onChange={this.onChangeUsuario}
                    />
                    <InputMensagem
                        placeholder="Mensagem"
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeMensagem}
                    />
                    <BotaoEnviarMensagem
                        onClick={this.aoEnviar}
                    ><IconeBotaoEnviar src={BotaoSend}></IconeBotaoEnviar></BotaoEnviarMensagem>
                </ContainerInput>
            </div>
        )
    }
}

export default SecaoMensagemLogs