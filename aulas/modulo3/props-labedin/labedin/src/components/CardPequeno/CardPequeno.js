import React from "react";
import styled from "styled-components";

const StyledSmallContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
`
const StyledImg = styled.img`
    height: 4vh;
`
const StyledH4 = styled.h4`
    padding-left: 1vw;
`
const StyledP = styled.p`
    padding-left: 1vw;
`


const CardPequeno = (props) =>{
    return(
        <StyledSmallContainer>
            <StyledImg src={props.img}/>
            <StyledH4>{props.descSmallCard}</StyledH4>
            <StyledP>{props.infoSmallCard}</StyledP>
        </StyledSmallContainer>
    )
}

export default CardPequeno