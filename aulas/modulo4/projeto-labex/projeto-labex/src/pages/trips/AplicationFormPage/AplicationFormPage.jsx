import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import useGetTrips from "../../../hooks/useGetTrips"
import RenderCountriesList from "../../../components/renderCountriesList/renderCountriesList"

export default function AplicationFormPage() {

    const [form, setForm] = useState({
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

    const handleUserInput = (e) => {
        const value = e.target.value

        setForm({
            ...form,
            [e.target.name]: value
        })
    }

    return (
        <div>
            <button onClick={goBackPage}>Voltar</button>
            <select onChange={handleUserInput}
                name='tripSelect'
                value={form.tripSelect}>
                {trips.map((trip) => {
                    return <option key={trip.id} value={trip.name}>{trip.name}</option>
                })}
            </select>
            <input placeholder="Nome"
                onChange={handleUserInput}
                value={form.name}
                name='name' 
                required
                />
            <input placeholder="Idade"
                onChange={handleUserInput}
                type='number'
                value={form.age}
                name='age'
                required
                />
            <input placeholder="Descrição"
                onChange={handleUserInput}
                value={form.applyDesc}
                name='applyDesc'
                required
                />
            <input placeholder="Profissão"
                onChange={handleUserInput}
                value={form.profession}
                name='profession'
                required
                />
            <RenderCountriesList
            handleUserInput={handleUserInput} 
            value = {form.countrySelect}
            />
            <button>Enviar</button>
        </div>
    )
}