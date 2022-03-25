import styled from "styled-components"

export const Card = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: 1px black solid;
    border-radius: 5px;
    max-height: 60%;
    height: 57vh;
    width: 96%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2vh;
    display: flex;
    flex-direction: column-reverse;
`

export const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
export const NamePerson = styled.h2`
    color: white;
    margin: 5px;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
`
export const BioPerson = styled.h3`
    color: white;
    margin: 5px;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: black;
`

export const CardsButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px;
    margin-top: 20px;
`
export const CardsButtonRefuse = styled.button`
    background-color: transparent;
    border: 1px solid black;
    filter: invert(16%) sepia(94%) saturate(6072%) hue-rotate(2deg) brightness(89%) contrast(132%);
    border-radius: 50px;
    &:hover{
        background-color: lightgray;
    }
`
export const CardsButtonHeart = styled.button`
    background-color: transparent;
    border: 1px solid black;
    filter: invert(69%) sepia(58%) saturate(5854%) hue-rotate(85deg) brightness(117%) contrast(127%);
    border-radius: 50px;
    &:hover{
        background-color: lightgray;
    }
`
