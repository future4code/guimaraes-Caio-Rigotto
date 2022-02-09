import React from "react";
import styled from "styled-components";
import Form from "../Form/Form";

const ContainerEtapas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TituloEtapa3 = styled.h1`
    
`

class Etapa3 extends React.Component{
  state={
    inputMotivo: '',
    inputIdade: '',
    inputEmail: '',
  }

    onChangeInputMotivo=(event)=>{
      this.setState({
        inputMotivo: event.target.value
      })
    }
    onChangeInputIdade=(event)=>{
      this.setState({
        inputIdade: event.target.value
      })
    }
    onChangeInputEmail=(event)=>{
      this.setState({
        inputEmail: event.target.value
      })
    }

    render() {
      return (
        <ContainerEtapas>
            <ol>
          <TituloEtapa3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</TituloEtapa3>
          <Form 
          valorDesc="Por que você não terminou um curso de graduação?" 
          placeholderForm="Motivo"
          typeForm="text"
          input="true"
          valorInput={this.state.inputMotivo}
          onChangeInput={this.onChangeInputMotivo}
          />
          <Form 
          valorDesc="Você fez algum curso complementar?" 
          dropdown="true"
          opcaoSelect1="Nenhum"
          opcaoSelect2="Curso de inglês"
          opcaoSelect3="Curso técnico"
          numDropdown="3"
          selectId="curso complementar"
          />
          </ol>
        </ContainerEtapas>
      );
    }
  }
  
  export default Etapa3;
  