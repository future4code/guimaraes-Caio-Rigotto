import React from "react";
import styled from "styled-components";
import Form from "../Form/Form";

const ContainerEtapas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TituloEtapa2 = styled.h1`
    
`

class Etapa2 extends React.Component{
  state={
    inputCurso: '',
    inputUnidadeEnsino: '',
  }

    onChangeInputCurso=(event)=>{
      this.setState({
        inputCurso: event.target.value
      })
    }
    onChangeInputUnidadeEnsino=(event)=>{
      this.setState({
        inputUnidadeEnsino: event.target.value
      })
    }

    render() {
      return (
        <ContainerEtapas>
            <ol>
          <TituloEtapa2>ETAPA 2 - INFORMAÇÕES DE ENSINO SUPERIOR</TituloEtapa2>
          <Form 
          valorDesc="Qual curso?" 
          placeholderForm="Curso"
          typeForm="text"
          input="true"
          valorInput={this.state.inputCurso}
          onChangeInput={this.onChangeInputCurso}
          />
          <Form 
          valorDesc="Qual a unidade de ensino?" 
          placeholderForm="Unidade de ensino"
          typeForm="text"
          input="true"
          valorInput={this.state.inputUnidadeEnsino}
          onChangeInput={this.onChangeInputUnidadeEnsino}
          />
          </ol>
        </ContainerEtapas>
      );
    }
  }
  
  export default Etapa2;
  