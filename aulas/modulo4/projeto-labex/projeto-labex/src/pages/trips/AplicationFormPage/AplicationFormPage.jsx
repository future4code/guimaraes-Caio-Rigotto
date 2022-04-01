import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useGetTrips from "../../../components/useGetTrips/useGetTrips"
import RenderCountriesList from "../../../components/renderCountriesList/renderCountriesList"

export default function AplicationFormPage (){

    const [ form, setForm ] = useState({
        tripSelect: '',
        name: '',
        age: '',
        applyDesc: '',
        profession: '',
        countrySelect: ''
    })

    const trips = useGetTrips()

    const navigate = useNavigate()
    const goBackPage = () => {
        navigate(-1)
    }

    const handleUserInput = (e) =>{
        const value = e.target.value

        setForm({...form,
        [e.target.name]: value})   
    }

    return(
        <div>
            <button onClick={goBackPage}>Voltar</button>
            <select onChange={handleUserInput} name='tripSelect'>
                {trips.map((trip)=>{
                    return <option key={trip.id} value={trip.name}>{trip.name}</option>
                })}
            </select>
            <input placeholder="Nome" onChange={handleUserInput} name='name'></input>
            <input placeholder="Idade" onChange={handleUserInput} name='age'></input>
            <input placeholder="Descrição" onChange={handleUserInput} name='applyDesc'></input>
            <input placeholder="Profissão" onChange={handleUserInput} name='profession'></input>
            <RenderCountriesList handleUserInput={handleUserInput}/>
            <button>Enviar</button>
        </div>
    )
}