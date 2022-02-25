import React from "react";
import axios from "axios";
import styled from "styled-components";

const LabelInput = styled.label`
    padding: 5px;
`
const ContainerInput = styled.div`
    padding: 20px;
`

const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

class UserInputsPage extends React.Component {
    state = {
        inputNome: "",
        inputEmail: ""
    }

    criarUsuario = () => {
        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }
        axios
            .post(urlUsers, body, {
                headers: {
                    Authorization: "caio-rigotto-guimaraes"
                }
            })
            .then((res) => {
                console.log(res.data)
                alert(`Usuário ${this.state.inputNome} criado com sucesso!`)
                this.setState({ inputNome: '', inputEmail: '' })
            }).catch((err) => {
                console.log(err.message)
                alert(`Falha ao criar o usuário!`)
            })
    }

    onChangeNome = (e) => {
        this.setState({
            inputNome: e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            inputEmail: e.target.value
        })
    }

    onClickEnviar() {

        console.log("Enviou")
    }
    render() {
        return (
            <ContainerInput>
                <LabelInput>Usuário:</LabelInput>
                <input
                    type="text"
                    placeholder="Nome"
                    onChange={this.onChangeNome}
                    value={this.state.inputNome}
                ></input>
                <LabelInput>E-mail:</LabelInput>
                <input
                    type="email"
                    placeholder="E-mail"
                    onChange={this.onChangeEmail}
                    value={this.state.inputEmail}
                ></input>
                <button onClick={this.criarUsuario}>Enviar</button>
            </ContainerInput>
        )
    }
}

export default UserInputsPage;