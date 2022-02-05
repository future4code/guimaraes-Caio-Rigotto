import React from "react";
import styled from "styled-components";

const ContainerMensagensLog = styled.div`
    height: 80vh;
    width: 85vw;
    margin: 15px;
    background-color: green;
    border: 2px solid black;
`

const ContainerMensagensIndividual = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`

const UsuarioMensagem = styled.h2`

`

const ContainerInput = styled.div`
    margin: 5px;
`

const InputUsuario = styled.input`
    
`

const InputMensagem = styled.input`
    width: 60vw;
    height: 5vh;
    margin-left: 5px;
    margin: 5px;
`

const BotaoEnviarMensagem = styled.button`

`


class SecaoMensagemLogs extends React.Component {
    state = {
        mensagens: [
            {
                usuario: 'gdfgdf',
                mensagem: 'aasdsdsdasdas',
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
                    < UsuarioMensagem >
                        {indv.usuario}:
                    </ UsuarioMensagem>
                    <p>{indv.mensagem}</p>
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
                    >Enviar</BotaoEnviarMensagem>
                </ContainerInput>
            </div>
        )
    }
}

export default SecaoMensagemLogs