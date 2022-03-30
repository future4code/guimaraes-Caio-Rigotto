import { useState } from "react";
import ListTripsPage from "../trips/ListTripsPage/ListTripsPage";
import { MainHomeButtonsContainer, MainHomePageContainer } from "./styles";

export default function HomePage() {

    const [page, setPage] = useState('home')

    const onClickSeeTrips = () =>{
        setPage('trips')
    }
    const onClickReturnHome = () =>{
        setPage('home')
    }

    const renderPages = () => {
        switch (page) {
            case 'home':
                return <MainHomePageContainer>
                    <h2>LabeX</h2>
                    <MainHomeButtonsContainer>
                        <button onClick={onClickSeeTrips}>Ver opções de viajens</button>
                        <button>Área de Admin</button>
                    </MainHomeButtonsContainer>
                </MainHomePageContainer>
            case 'trips':
                return <ListTripsPage onClickReturnHome={onClickReturnHome}/>
            default:
                return <MainHomePageContainer>
                    <h2>LabeX</h2>
                    <MainHomeButtonsContainer>
                        <button>Ver opções de viajens</button>
                        <button>Área de Admin</button>
                    </MainHomeButtonsContainer>
                </MainHomePageContainer>
        }
    }

    return (
        <div>
        {renderPages()}
        </div>
    )
};