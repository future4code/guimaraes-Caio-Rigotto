import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"

import HeartPic from "./img/heart.svg"
import RefusePic from "./img/refuse.svg"

import { apiUrl, student } from "../../App"

import { BioPerson, CardsButtonRefuse, CardsButtonHeart, CardsButtonsContainer, CardsContainer, NamePerson } from "./styles"

const Card = styled.div`
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
            console.log(personId)
        })
        .catch(err => {
            alert("Ocorreu algo de errado com sua requisição!")
        })
    }
    const choosePerson = (id) =>{
        const body = {
            "id": id,
            "choice": true
        }
        axios
        .post(`${apiUrl}${student}choose-person`, body)
        .then(res => {
            console.log(res.data)
            getProfile()
        })
        .catch(err => {
            alert("Ocorreu algo de errado com sua requisição!")
        })
    }
    const onClickRefuse = () =>{
        getProfile()
    }
    const onClickHeart = () => {
        choosePerson(personId)
    }

    return(
        <CardsContainer>
            <Card url={personPhoto}>
            <BioPerson>{personBio}</BioPerson>
            <NamePerson>{personName}, {personAge}</NamePerson>
            </Card>
            <CardsButtonsContainer>
            <CardsButtonRefuse onClick={onClickRefuse}><img src={RefusePic}></img></CardsButtonRefuse>
            <CardsButtonHeart onClick={onClickHeart}><img src={HeartPic}></img></CardsButtonHeart>
            </CardsButtonsContainer>
            <button onClick={getProfile}>att</button>
        </CardsContainer>
    )
}