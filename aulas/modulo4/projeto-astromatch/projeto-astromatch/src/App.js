import { AppContainer, Main } from "./styles";
import Matches from "./pages/matches/matches";
import Cards from "./pages/cards/cards";

export const apiUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/"
export const student = "caio-guimaraes/"

export default function App() {
  return (
    <Main>
      <AppContainer>
        <Matches>
        </Matches>
        <Cards>
        </Cards>
      </AppContainer>
    </Main>
  );
}