import React from "react";
import axios from "axios";

const urlUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const headers = { headers: { Authorization: "caio-rigotto-guimaraes" } }

class UsersPage extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getAllUsers()
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
            return <p key={user.id}>Usuário:{user.name}</p>
        })
        return (
            <div>
                <button onClick={this.getAllUsers}>Recarregar lista de usuários</button>
                {renderUsers}
            </div>
        )
    }
}

export default UsersPage;