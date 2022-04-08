import { useNavigate } from "react-router-dom"
import useGetTrips from "../../../hooks/useGetTrips"

export default function ListTripsPage() {
    const navigate = useNavigate()
    const goBackPage = () =>{
        navigate(-1)
    }
    const goToApplyPage = () => {
        navigate('/trips/application')
    }

    const trips = useGetTrips()

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
            <button onClick={goBackPage}>Voltar</button>
            <button onClick={goToApplyPage}>Escolher viagem</button>
            <h2>Viagens</h2>
            {renderTrips}
        </div>
    )
}