import { useState } from "react";
import LoginPage from "../admin/LoginPage/LoginPage";
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
    const onClickLoginPage = () =>{
        setPage('login')
    }

    const renderPages = () => {
        switch (page) {
            case 'home':
                return <MainHomePageContainer>
                    <h2>LabeX</h2>
                    <MainHomeButtonsContainer>
                        <button onClick={onClickSeeTrips}>Ver opções de viagens</button>
                        <button onClick={onClickLoginPage}>Área de Admin</button>
                    </MainHomeButtonsContainer>
                </MainHomePageContainer>
            case 'trips':
                return <ListTripsPage onClickReturnHome={onClickReturnHome}/>
            case 'login':
                return <LoginPage onClickReturnHome={onClickReturnHome}/>
        }
    }

    return (
        <div>
        {renderPages()}
        </div>
    )
};