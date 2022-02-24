import React from 'react';
import styled from 'styled-components';

import UserInputsPage from './components/UserInputsPage/UserInputsPage';
import UsersPage from './components/UsersPage/UsersPage';

class App extends React.Component {
  state = {
    telaUsuarios: false
  }
  onClickUsuarios = () => {
    if (this.state.telaUsuarios === false){
      this.setState({ telaUsuarios: true })
    }else{
      this.setState({telaUsuarios: false})
    }
  }
  render() {
    return (
      <div>
        <UserInputsPage></UserInputsPage>
        <button onClick={this.onClickUsuarios}>Usuários</button>
        <UsersPage></UsersPage>
      </div>
    );
  }
}

export default App;
