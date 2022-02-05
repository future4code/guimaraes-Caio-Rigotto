import React from "react";
import styled from "styled-components";
import SecaoMensagemLogs from "./components/SecaoMensagemLog/SecaoMensagemLog";

const MainContainer = styled.div`
  background-color: gray;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component{
  render() {
    return (
      <MainContainer>
        {<SecaoMensagemLogs>
        </SecaoMensagemLogs>}
      </MainContainer>
    );
  }
}

export default App;
