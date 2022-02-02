import React from 'react';
import styled from 'styled-components';

const StyledContainerBig = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const StyledImgBig = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const StyledH4Big = styled.h4`
    margin-bottom: 15px;
`

const StyledDescContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <StyledContainerBig>
            <StyledImgBig src={ props.imagem } />
            <StyledDescContainer>
                <StyledH4Big>{ props.nome }</StyledH4Big>
                <p>{ props.descricao }</p>
            </StyledDescContainer>
        </StyledContainerBig>
    )
}

export default CardGrande;