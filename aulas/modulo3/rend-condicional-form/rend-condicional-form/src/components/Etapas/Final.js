import React from "react";
import styled from "styled-components";

const ContainerFinal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

class Final extends React.Component{
    render() {
        return(
            <ContainerFinal>
                <h1>O FORMULÁRIO ACABOU</h1>
                <h2>Dados enviados com sucesso! Entraremos em contato!</h2>
            </ContainerFinal>
        )
    }
}

export default Final;