import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"

import { apiUrl, student } from "../../App"

import { CardsContainer } from "./styles"

const Card = styled.div`
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: 1px black solid;
    border-radius: 10px;
    max-height: 60%;
    height: 50vh;
    width: 96%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    display: block;
`

export default function Cards (){
    const [person, setPerson] = useState({})
    const [personAge, setPersonAge] = useState("")
    const [personBio, setPersonBio] = useState("")
    const [personId, setPersonId] = useState("")
    const [personName, setPersonName] = useState("")
    const [personPhoto, setPersonPhoto] = useState("")

    useEffect(() =>{
    getProfile()
    }, [])
    const getProfile = () => {
        axios
        .get(`${apiUrl}${student}person`)
        .then(res =>{
            setPerson(res.data.profile)
            setPersonAge(res.data.profile.age)
            setPersonBio(res.data.profile.bio)
            setPersonId(res.data.profile.id)
            setPersonName(res.data.profile.name)
            setPersonPhoto(res.data.profile.photo)
        })
        .catch(err => {
            console.log("deu bom não")
            console.log(err.message)
        })
    }

    return(
        <CardsContainer>
            <Card url={personPhoto}>
            <h2>{personName}, {personAge}</h2>
            <h4>{personBio}</h4>
            <button onClick={getProfile}>pegar</button>
            </Card>
            <div>
            <button>X</button>
            </div>
        </CardsContainer>
    )
}