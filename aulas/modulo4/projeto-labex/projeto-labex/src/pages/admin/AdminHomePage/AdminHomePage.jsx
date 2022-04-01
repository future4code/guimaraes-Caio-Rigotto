import { useNavigate } from "react-router-dom"
import useGetTrips from "../../../components/useGetTrips/useGetTrips"

export default function AdminHomePage() {
    const navigate = useNavigate()
    const goBackPage = () => {
        navigate(-1)
    }
    const goToCreateTripPage = () => {
        navigate('/admin/trips/create')
    }
    const goToTripDetailsPage = (e) => {
        const tripId = e.target.value
        
        navigate(`/admin/trips/${tripId}`)
    }

    const trips = useGetTrips()

    const renderTripsButton = trips
        .map((trip) => {
            return <div key={trip.id}>
                <button value={trip.id} onClick={goToTripDetailsPage}>{trip.name}</button>
            </div>
        })

    return (
        <div>
            <button onClick={goBackPage}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar viagem</button>
            {renderTripsButton}
        </div>
    )
}