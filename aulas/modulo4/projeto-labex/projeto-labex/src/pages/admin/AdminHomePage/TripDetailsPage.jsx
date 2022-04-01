import { useNavigate } from "react-router-dom"

export default function TripDetailsPage () {
    const navigate = useNavigate()
    const goBackPage = () =>{
        navigate(-1)
    }
    return(
        <div>
            <button onClick={goBackPage}>Voltar</button>
        </div>
    )
}