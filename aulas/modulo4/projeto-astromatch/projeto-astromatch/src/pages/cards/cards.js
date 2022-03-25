import { useEffect, useState } from "react"
import axios from "axios"

import HeartPic from "./img/heart.svg"
import RefusePic from "./img/refuse.svg"

import { apiUrl, student } from "../../App"

import { Card, BioPerson, CardsButtonRefuse, CardsButtonHeart, CardsButtonsContainer, CardsContainer, NamePerson } from "./styles"

export default function Cards (){
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
            setPersonAge(res.data.profile.age)
            setPersonBio(res.data.profile.bio)
            setPersonId(res.data.profile.id)
            setPersonName(res.data.profile.name)
            setPersonPhoto(res.data.profile.photo)
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
            {/* <button onClick={getProfile}>att</button> */}
        </CardsContainer>
    )
}