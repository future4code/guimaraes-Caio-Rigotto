import { MainHomeButtonsContainer, MainHomePageContainer } from "./styles";

export default function HomePage (){
    return(
        <MainHomePageContainer>
            <h2>LabeX</h2>
            <MainHomeButtonsContainer>
                <button>Ver opções de viajens</button>
                <button>Área de Admin</button>
            </MainHomeButtonsContainer>
        </MainHomePageContainer>
    )
};