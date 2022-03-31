import axios from "axios"
import { useEffect, useState } from "react"
import { apiUrl, student } from "../../../App"
import useRequestData from "../../../components/useRequestData/useRequestData"

export default function ListTripsPage(props) {
    useEffect(() => {
        getTrips()
    }, [])

    const [ trips , setTrips ] = useState([])

    const getTrips = () =>{
        axios
        .get(`${apiUrl}${student}trips`)
        .then((res)=>{
            setTrips(res.data.trips)
        })
        .catch((e) => {
            console.log(e.message)
        })
    }
    const renderTrips = trips.map((trip) =>{
        return <div key={trip.id}>
            <p>Nome: {trip.name}</p>
            <p>Desc: {trip.description}</p>
            <p>Data: {trip.date}</p>
            <p>Duração: {trip.durationInDays}</p>
            <p>Localização: {trip.planet}</p>
        </div>
    })

    return (
        <div>
            <button onClick={props.onClickReturnHome}>Voltar</button>
            <button>Escolher viagem</button>
            <h2>Viagens</h2>
            {renderTrips}
        </div>
    )
}