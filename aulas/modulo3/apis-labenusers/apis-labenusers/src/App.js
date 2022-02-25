import React from 'react';
import styled from 'styled-components';

import UserInputsPage from './components/UserInputsPage/UserInputsPage';
import UsersPage from './components/UsersPage/UsersPage';

const ContainerMain = styled.div`
  border: solid 1px black;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border-radius: 10px 10px;
`

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
      <ContainerMain>
        <div>
        {this.renderUsuarios()}
        </div>
        <button onClick={this.onClickUsuarios}>Mostrar usuários</button>
        <UserInputsPage></UserInputsPage>
      </ContainerMain>
    );
  }
}

export default App;
