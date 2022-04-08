import axios from "axios"
import { useNavigate } from "react-router-dom"
import { apiUrl, student } from "../../../App"
import useGetTrips from '../../../hooks/useGetTrips'
import useVerifyAuth from "../../../hooks/useVerifyAuth"

export default function AdminHomePage() {
    useVerifyAuth()
        
    const trips = useGetTrips()
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
    const deleteTrip = (e) => {
        const tripId = e.target.value
        const token = window.localStorage.getItem('token')

        const header = {
            headers: {
                auth: token
            }
        }

        axios
            .delete(`${apiUrl}${student}trips/${tripId}`, header)
            .then((res) => {
                
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const renderTripsButton = trips
        .map((trip) => {
            return <div key={trip.id}>
                <button value={trip.id}
                    onClick={goToTripDetailsPage}
                >{trip.name}
                </button>
                    <button onClick={deleteTrip} value={trip.id}>Deletar</button>
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