import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Logo1NE from './components/img/logo-1ne.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';
import logoEmail from './components/img/logo-email.png'
import logoEndereco from './components/img/logo-endereco.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFOwBMPt0u0Bw/profile-displayphoto-shrink_800_800/0/1517557637520?e=1648684800&v=beta&t=qklg3LNHjklntfyO9NBFpeCr7_i0iGDEyv2DZbLKnKY"
          nome="Caio R."
          descricao="Olá, eu sou Caio Rigotto. Desenvolvedor Web Full Stack em formação."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          img={logoEmail}
          descSmallCard="Email:"
          infoSmallCard="bananinha@gmail.com"
        />

        <CardPequeno
          img={logoEndereco}
          descSmallCard="Endereço:"
          infoSmallCard="Rua dos Bobos, 0"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={Logo1NE}
          nome="1NE Comunicação"
          descricao="Redator chefe."
        />

        <CardGrande
          imagem="https://pbs.twimg.com/profile_images/1450901581876973568/0bHBmqXe_400x400.png"
          nome="Twitch"
          descricao="Streamer profissional."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />
        
        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
