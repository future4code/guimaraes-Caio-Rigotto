import { useNavigate } from "react-router-dom"
import useGetTrips from "../../../hooks/useGetTrips"
import RenderCountriesList from "../../../components/renderCountriesList/renderCountriesList"
import useForm from "../../../hooks/useForm"
import axios from "axios"
import { apiUrl, student } from "../../../App"

export default function AplicationFormPage() {
    const trips = useGetTrips()
    const navigate = useNavigate()

    const [form, handleUserInput] = useForm({
        tripId: '',
        name: '',
        age: '',
        applicationText: '',
        profession: '',
        country: ''
    })

    const applyToTrip = (e) => {
        e.preventDefault()

        const body = {
            "name": form.name,
            "age": form.age,
            "applicationText": form.applicationText,
            "profession": form.profession,
            "country": form.country

        }

        axios
            .post(`${apiUrl}${student}trips/${form.tripId}/apply`, body)
            .then((res) => {
                navigate(-1)
            })
            .catch((err) => {
                
            })
    }
    const goBackPage = () => {
        navigate(-1)
    }

    return (
        <div>
            <button onClick={goBackPage}>Voltar</button>
            <form onSubmit={applyToTrip}>
                <h2>Cadastro</h2>
                <select onChange={handleUserInput}
                    name='tripId'
                    value={form.tripId}
                    required>
                    <option value=''>Selecionar viagem...</option>
                    {trips.map((trip) => {
                        return <option key={trip.id} name='tripId' value={trip.id}>{trip.name}</option>
                    })}
                </select>
                <input placeholder="Nome"
                    onChange={handleUserInput}
                    value={form.name}
                    name='name'
                    pattern=".{3,}"
                    title="Mínimo de 3 caracteres"
                    required
                />
                <input placeholder="Idade"
                    onChange={handleUserInput}
                    type='number'
                    value={form.age}
                    min='18'
                    name='age'
                    required
                />
                <input placeholder="Descrição"
                    onChange={handleUserInput}
                    value={form.applicationText}
                    name='applicationText'
                    pattern=".{30,}"
                    title="Mínimo de 30 caracteres"
                    required
                />
                <input placeholder="Profissão"
                    onChange={handleUserInput}
                    value={form.profession}
                    name='profession'
                    pattern='.{10,}'
                    title='Mínimo de 10 caracteres'
                    required
                />
                <RenderCountriesList
                    handleUserInput={handleUserInput}
                    value={form.country}
                />
                <button>Enviar</button>
            </form>
        </div>
    )
}