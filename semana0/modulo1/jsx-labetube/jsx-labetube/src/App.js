import logo from './logo.svg';
import './App.css';

function App() {
  const titulo = "Titulo do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
}

  return (
    <div>
    <div className="tela-inteira">
      <header>
        <h1>Lab Tube</h1>
        <input type="text" placeholder="Busca" id="campoDeBusca" />
      </header>

      <main>
        <nav className="menu-vertical">
          <ul>
            <li className="botoes-meunu-vertical">Início</li>
            <li className="botoes-meunu-vertical">Em alta</li>
            <li className="botoes-meunu-vertical">Inscrições</li>
            <hr />
            <li className="botoes-meunu-vertical">Originais</li>
            <li className="botoes-meunu-vertical">Histórico</li>
          </ul>
        </nav>

        <section className="painel-de-videos">
          <div className="box-pagina-principal media1" onClick={reproduzVideo}>
            <video> 
              <source src="https://storage.googleapis.com/future-apis.appspot.com/1.mp4" type='video/mp4'/>
            </video>
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media2" onClick={reproduzVideo}>
          <video> 
              <source src="https://storage.googleapis.com/future-apis.appspot.com/2.mp4" type='video/mp4'/>
            </video>
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media3" onClick={reproduzVideo}>
          <video> 
              <source src="https://storage.googleapis.com/future-apis.appspot.com/3.mp4" type='video/mp4'/>
            </video>
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media4" onClick={reproduzVideo}>
          <video> 
              <source src="https://storage.googleapis.com/future-apis.appspot.com/4.mp4" type='video/mp4'/>
            </video>
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media5" onClick={reproduzVideo}>
          <video> 
              <source src="https://storage.googleapis.com/future-apis.appspot.com/5.mp4" type='video/mp4'/>
            </video>
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media6" onClick={reproduzVideo}>
          <video> 
              <source src="https://storage.googleapis.com/future-apis.appspot.com/6.mp4" type='video/mp4'/>
            </video>
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media7" onClick={reproduzVideo}>
          <video> 
              <source src="https://storage.googleapis.com/future-apis.appspot.com/7.mp4" type='video/mp4'/>
            </video>
            <h4>{titulo}</h4>
          </div>
          <div className="box-pagina-principal media8" onClick={reproduzVideo}>
          <video> 
              <source src="https://storage.googleapis.com/future-apis.appspot.com/8.mp4" type='video/mp4'/>
            </video>
            <h4>{titulo}</h4>
          </div>
        </section>
      </main>

      <footer>
        <h4>Oi! Eu moro no footer!</h4>
      </footer>
    </div>
</div>
  );
}

export default App;
