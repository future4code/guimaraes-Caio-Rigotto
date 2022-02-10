import React from 'react'
import styled from 'styled-components'

import { IconeComContador } from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeComentarioAtivo from '../../img/comment_icon_active.svg'
import iconeSalvar from '../../img/save.svg'
import iconeSalvarPreto from '../../img/save-black.svg'
import iconeShare from '../../img/share.svg'
import iconeSharePreto from '../../img/share-black.svg'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'
import { toHaveStyle } from '@testing-library/jest-dom'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvando:false,
    compartilhando:false,
    site: ""
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    })
    if (!this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
      console.log('Curtiu!')
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
      })
      console.log('Descurtiu!')
    }

  }
  onClickSalvar = () => {
    this.setState({
      salvando: !this.state.salvando
    })
  }
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  onClickCompartilhar = () =>{
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }
  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    })
  }
  aoCompartilharPost = () =>{
    this.setState({
      compartilhando: false
    })
  }

  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvo

    if(this.state.salvando){
      iconeSalvo = iconeSalvarPreto
      console.log('Post salvo!')
    }else{
      iconeSalvo = iconeSalvar
    }

    let iconeShared

    if (this.state.compartilhando) {
      iconeShared = iconeSharePreto
    }else{
      iconeShared = iconeShare
    }

    let iconeComment

    if (this.state.comentando){
      iconeComment = iconeComentarioAtivo
    }else{
      iconeComment = iconeComentario
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }
    
    let componenteCompartilhar

    if (this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar aoCompartilhar={this.aoCompartilharPost} />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />
      {componenteCompartilhar}
      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvar}
        />

<IconeComContador
          icone={iconeShared}
          onClickIcone={this.onClickCompartilhar}
        />

        <IconeComContador
          icone={iconeComment}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post