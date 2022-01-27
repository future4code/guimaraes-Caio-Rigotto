import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Logo1NE from './components/img/logo-1ne.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';

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
          img="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1643296079~hmac=00ec3f5efe501c677c6355dec0f24420"
          descSmallCard="Email:"
          infoSmallCard="bananinha@gmail.com"
        />

        <CardPequeno
          img="https://cdn-icons.flaticon.com/png/512/1009/premium/1009850.png?token=exp=1643296756~hmac=d94f6af1c6465a08047706cc043cbcc5"
          descSmallCard="Endereço:"
          infoSmallCard="Rua dos Bobos, 0"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={Logo1NE}
          nome="1NE Comunicação"
          descricao="Redator chefe e gerente de redação."
        />

        <CardGrande
          imagem="https://pbs.twimg.com/profile_images/1450901581876973568/0bHBmqXe_400x400.png"
          nome="Twitch"
          descricao="Streamer profissional com anos de experiência."
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
