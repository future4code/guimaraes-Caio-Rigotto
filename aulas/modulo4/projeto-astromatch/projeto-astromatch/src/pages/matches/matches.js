import { AppName, MatchesContainer, MatchesIMG } from "./styles";

import MatchesPic from "./img/matchesIMG.svg"

export default function Matches() {
    return(
        <MatchesContainer>
            <AppName>
                AstroMatch
            </AppName>
            <MatchesIMG src={MatchesPic} alt="imagem perfis de matches"></MatchesIMG>
        </MatchesContainer>
    )
}