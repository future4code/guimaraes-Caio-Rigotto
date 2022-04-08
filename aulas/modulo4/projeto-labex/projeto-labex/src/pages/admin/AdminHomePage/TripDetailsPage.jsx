import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { apiUrl, student } from "../../../App"
import useVerifyAuth from "../../../hooks/useVerifyAuth"

const TripDetailsPage = () => {
    useVerifyAuth()
    const tripId = useParams().id

    const navigate = useNavigate()
    const goBackPage = () => {
        navigate(-1)
    }

    const [ tripDetails , setTripDetails ] = useState({})
    const [ candidateDetails , setCandidateDetails ] = useState([])

    useEffect(() => {
        const token = window.localStorage.getItem('token')

        const header = {
            headers: {
                auth: token
            }
        }
        axios
            .get(`${apiUrl}${student}trip/${tripId}`, header)
            .then(res => {
                setTripDetails(res.data.trip)
                setCandidateDetails(res.data.trip.candidates)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    return (
        <div>
            <button onClick={goBackPage}>Voltar</button>
            <h2>Viagem</h2>
            <p>Nome: {tripDetails.name}</p>
            <p>Data: {tripDetails.date}</p>
            <p>Descrição: {tripDetails.description}</p>
            <p>Duração: {tripDetails.durationInDays}</p>
            <p>Id: {tripDetails.id}</p>
            <p>Planeta: {tripDetails.planet}</p>
            <h2>Candidatos</h2>
            {candidateDetails.map((candidate)=>{
                return <div key={candidate.id}>
                    <p>{candidate.name}</p>
                    <p>{candidate.age}</p>
                    <p>{candidate.applicationText}</p>
                    <p>{candidate.profession}</p>
                    <p>{candidate.id}</p>
                    </div>
            })}
        </div>
    )
}

export default TripDetailsPage;