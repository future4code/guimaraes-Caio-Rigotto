import { useNavigate } from "react-router-dom"
import useVerifyAuth from "../../../components/useVerifyAuth/useVerifyAuth"

export default function CreateTripPage () {
    useVerifyAuth()

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