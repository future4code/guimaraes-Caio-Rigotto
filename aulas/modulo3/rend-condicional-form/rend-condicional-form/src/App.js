import React from 'react';
import styled from 'styled-components';

import Etapa1 from './components/Etapas/Etapa1';
import Etapa2 from './components/Etapas/Etapa2';
import Etapa3 from './components/Etapas/Etapa3';
import Final from './components/Etapas/Final';

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ButtonForm = styled.button`
    margin-top: 15px;
`

class App extends React.Component {
  state = {
    etapa: 1,
    botao: true
  }

  onClickButton = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    })
  }

  renderBotao = (etapa) =>{
    if(etapa <= 3){
      return(
      <ButtonForm onClick={this.onClickButton}>Próxima etapa</ButtonForm>
      )
    }
  }

  renderEtapa = (etapa) => {
    switch (etapa) {
      case 1:
        return (
          <Etapa1 />
        )
      case 2:
        return (
          <Etapa2 />
        )
      case 3:
        return (
          <Etapa3 />
        )
      case 4:
        return (
          <Final />
        )
        default:
          return (
            <Final />
          )
    }
  }

  render() {
    return (
      <ContainerMain>
        {this.renderEtapa(this.state.etapa)}
        {this.renderBotao(this.state.etapa)}
      </ContainerMain>
    );
  }
}

export default App;
