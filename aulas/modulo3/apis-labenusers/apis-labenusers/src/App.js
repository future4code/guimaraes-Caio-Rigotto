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

  renderUsuarios = () =>{
    if(this.state.telaUsuarios){
      return <UsersPage/>
    }else{
      return null
    }
  }

  render() {
    return (
      <div>
        <div>
        {this.renderUsuarios()}
        </div>
        <button onClick={this.onClickUsuarios}>Mostrar usuários</button>
        <UserInputsPage></UserInputsPage>
      </div>
    );
  }
}

export default App;
