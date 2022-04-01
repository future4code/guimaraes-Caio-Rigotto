
import { MainHomeButtonsContainer, MainHomePageContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate()

    const goToTripsPage = () =>{
        navigate('/trips/list')
    }
    const goToLoginPage = () =>{
        navigate('/login')
    }
    return (
        <MainHomePageContainer>
            <h2>LabeX</h2>
            <MainHomeButtonsContainer>
                <button onClick={goToTripsPage}>Ver opções de viagens</button>
                <button onClick={goToLoginPage}>Área de Admin</button>
            </MainHomeButtonsContainer>
        </MainHomePageContainer>        
    )
};