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
    const token = window.localStorage.getItem('token')

    const header = {
        headers: {
            auth: token
        }
    }

    const [ tripDetails , setTripDetails ] = useState({})
    const [ candidateDetails , setCandidateDetails ] = useState([])
    const [ approvedDetails , setApprovedDetails ] = useState([])
    const [ update , setUpdate ] = useState(true)
    
    useEffect(() => {
            axios
            .get(`${apiUrl}${student}trip/${tripId}`, header)
            .then(res => {
                setTripDetails(res.data.trip)
                setCandidateDetails(res.data.trip.candidates)
                setApprovedDetails(res.data.trip.approved)

                setUpdate(false)
            })
            .catch(err => {
                console.log(err.message)
            })
        }, [update])

        const handleUpdate = () =>{
            setUpdate(true)
        }        
        const approveCandidate = (e)=>{
            const candidateId = e.target.name
            handleUpdate()

            decideCandidate(true,candidateId)
        }
        const refuseCandidate = (e)=>{
            const candidateId = e.target.name
            handleUpdate()
            
            decideCandidate(false,candidateId)
        }
        
        const decideCandidate = (approve,id) =>{
            const body = {
                "approve": approve
            }
            axios
            .put(`${apiUrl}${student}trips/${tripId}/candidates/${id}/decide`, body, header)
            .then((res) =>{
                console.log(res.data)
            })
            .catch((err) =>{
                console.log(err.message)
            })
        }
        
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
                    <h4>Nome: {candidate.name}</h4>
                    <p>Idade: {candidate.age}</p>
                    <p>Descrição: {candidate.applicationText}</p>
                    <p>Profissão: {candidate.profession}</p>
                    <p>Id: {candidate.id}</p>
                    <button value={true} 
                    name={candidate.id}
                    onClick={approveCandidate}
                    >Aprovar</button>
                    <button
                    value={false} 
                    name={candidate.id}
                    onClick={refuseCandidate}
                    >Cancelar</button>
                    </div>
            })}
            <h2>Aprovados</h2>
            {approvedDetails.map((approved) =>{
                return <div key={approved.id}>
                    <p>{approved.name}</p>
                </div>
            })}
        </div>
    )
}

export default TripDetailsPage;