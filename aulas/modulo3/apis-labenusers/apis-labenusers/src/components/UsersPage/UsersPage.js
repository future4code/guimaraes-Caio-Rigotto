import React from "react";
import axios from "axios";
import styled from "styled-components";

const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/"
const headers = { headers: { Authorization: "caio-rigotto-guimaraes" } }

const ContainerUsers = styled.div`
    border: solid 2px black;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px 10px;
`
const ContainerUserList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const DeleteButton = styled.button`
    color: red;
    border-radius: 10px;
`

class UsersPage extends React.Component {
    state = {
        users: [],
    }

    componentDidMount() {
        this.getAllUsers()
    }
    componentDidUpdate(){
        this.getAllUsers()
    }

    deleteUser = (userID) => {
        axios.delete(`${urlUsers}${userID}`, headers)
        .then((resp)=> {
            alert("Usuário excluído com sucesso!")
            console.log(resp.data)
            this.getAllUsers()
        }).catch((err) => {
            console.log(err.message)
        })
    }

    getAllUsers = () => {
        axios.get(urlUsers, headers)
            .then((resp) => {
                this.setState({ users: resp.data })
            }).catch((err) => {
                console.log(err.message)
            })
    }

    render() {
        const renderUsers = this.state.users.map((user) => {
            return <ContainerUserList>
                <p key={user.id}>Usuário: {user.name}</p>
                <DeleteButton key={`${user.id} - del`} onClick={()=>this.deleteUser(user.id)}>X</DeleteButton>    
                    </ContainerUserList>
        })  
        return (
            <ContainerUsers>
                <button onClick={this.getAllUsers}>Recarregar lista de usuários</button>
                {renderUsers}
            </ContainerUsers>
        )
    }
}

export default UsersPage;