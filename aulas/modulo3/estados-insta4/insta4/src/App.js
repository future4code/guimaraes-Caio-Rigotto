import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const MainContainerInput = styled.div`
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin-bottom: 10px;
  margin-top: 10px;
`
const MainInput = styled.input`
  width: 90%;
  margin-top: 5px;
`
const MainButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 40%;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Joseph',
        fotoUsuario: 'https://picsum.photos/50/49',
        fotoPost: 'https://picsum.photos/200/149'
      },
      {
        nomeUsuario: 'Frederick',
        fotoUsuario: 'https://picsum.photos/50/48',
        fotoPost: 'https://picsum.photos/200/148'
      }
    ],
    valorInputNome: "",
    valorInputFotoUser: "",
    valorInputFotoPost: ""
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }
  onChangeInputFotoUser = (event) => {
    this.setState({ valorInputFotoUser: event.target.value })
  }
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }

  onClickPostar = () => {
    if (this.state.valorInputNome.length === 0 ||
      this.state.valorInputFotoUser.length === 0 ||
      this.state.valorInputFotoPost.length === 0) {
      alert("Favor preencher o(s) campo(s) em branco:")
    } else {
      const novoPost = {
        nomeUsuario: this.state.valorInputNome,
        fotoUsuario: this.state.valorInputFotoUser,
        fotoPost: this.state.valorInputFotoPost
      }
      const novoPostFinal = [...this.state.posts, novoPost]

    this.setState({ posts: novoPostFinal })
    console.log('Postado!')
    }
  }

  render() {

    const Posts = this.state.posts.map((pub, index) => {
      return (<Post key={index}
        nomeUsuario={pub.nomeUsuario}
        fotoUsuario={pub.fotoUsuario}
        fotoPost={pub.fotoPost} />)
    })

    return (
      <MainContainer>
        <MainContainerInput>
        <h1>Nova publicação:</h1>
          <MainInput
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder='Nome'
          />
          <MainInput type="url"
            value={this.state.valorInputFotoUser}
            onChange={this.onChangeInputFotoUser}
            placeholder='Link foto de perfil'
          />
          <MainInput type="url"
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder='Link foto do post'
          />
          <MainButton onClick={this.onClickPostar}>Publicar</MainButton>
        </MainContainerInput>
        {Posts}
      </MainContainer>
    );
  }
}

export default App;
