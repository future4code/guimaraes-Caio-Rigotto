import HomePage from "./pages/home/HomePage";
import { MainAppContainer } from "./styles";

export const apiUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/'
export const student = 'caio-rigotto-guimaraes/'


function App() {
  return (
    <MainAppContainer>
     <HomePage>
     </HomePage>
    </MainAppContainer>
  );
}

export default App;
