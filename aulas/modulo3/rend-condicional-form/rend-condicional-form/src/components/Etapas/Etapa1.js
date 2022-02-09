import React from "react";
import styled from "styled-components";
import Form from "../Form/Form";

const ContainerEtapas = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TituloEtapa1 = styled.h1`
    
`

class Etapa1 extends React.Component{
  state={
    inputNome: '',
    inputIdade: '',
    inputEmail: '',
  }

    onChangeInputNome=(event)=>{
      this.setState({
        inputNome: event.target.value
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
          <TituloEtapa1>ETAPA 1 - DADOS GERAIS</TituloEtapa1>
          <Form 
          valorDesc="Qual seu nome?" 
          placeholderForm="Nome"
          typeForm="text"
          input="true"
          valorInput={this.state.inputNome}
          onChangeInput={this.onChangeInputNome}
          />
          <Form 
          valorDesc="Qual sua idade?" 
          placeholderForm="Idade"
          typeForm="number"
          input="true"
          valorInput={this.state.inputIdade}
          onChangeInput={this.onChangeInputIdade}
          />
          <Form 
          valorDesc="Qual seu email?" 
          placeholderForm="Email"
          typeForm="email"
          input="true"
          valorInput={this.state.inputEmail}
          onChangeInput={this.onChangeInputEmail}
          />
          <Form 
          valorDesc="Qual sua escolaridade?" 
          placeholderForm="Escolha a escolaridade"
          dropdown="true"
          numDropdown="4"
          opcaoSelect1="Ensino médio incompleto"
          opcaoSelect2="Ensino médio completo"
          opcaoSelect3="Ensino superior incompleto"
          opcaoSelect4="Ensino superior completo"
          selectId="escolaridade"
          />
          </ol>
        </ContainerEtapas>
      );
    }
  }
  
  export default Etapa1;
  