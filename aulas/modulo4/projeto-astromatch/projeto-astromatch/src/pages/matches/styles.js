import styled from "styled-components"

export const MatchesMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    ;
`
export const MatchesContainer = styled.div`
    display: flex;
    border-bottom: 1px solid grey;
`
export const AppName = styled.h2`
    color: red;
    margin-left: auto;
`
export const MatchesButton = styled.button`
    margin-left: auto;
    margin-right: 1vw;
    background-color: transparent;
    border: none;
    &:hover{
        background-color: lightgrey;
    }
`
export const MatchIMG = styled.img`
    width: 40px;
    max-height: 40px;
    border-radius: 30px;
    margin-left: 10px;
`
export const MatchName = styled.p`
    margin-left: 15px;
`
export const ShowMatchesContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover{
        background-color: lightgrey;
    }
`
export const ResetMatchesButton = styled.button`
    position: absolute;
    right: 4px;
    bottom: 4px;
`