import { AppName, MatchesMainContainer, MatchesIMG, MatchesContainer } from "./styles";

import MatchesPic from "./img/matchesIMG.svg"
import axios from "axios";
import { apiUrl, student } from "../../App";
import { useEffect, useState } from "react";

export default function Matches() {
    const [ matches, setMatches ] = useState({})

    useEffect (() => {
        getMatches()
    }, [matches])

    const getMatches = () => {
        axios
        .get(`${apiUrl}${student}matches`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => { 
            alert("Ocorreu algo de errado com sua requisição!")
        })
    }
    return (
        <MatchesMainContainer>
            <MatchesContainer>
                <AppName>
                    AstroMatch
                </AppName>
                <MatchesIMG src={MatchesPic} alt="imagem perfis de matches"></MatchesIMG>
            </MatchesContainer>
            <button onClick={getMatches}>get matches</button>
        </MatchesMainContainer>
    )
}