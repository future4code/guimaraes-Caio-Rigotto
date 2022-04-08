import axios from "axios"
// import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { apiUrl, student } from "../../../App"
import RenderPlanetsList from "../../../components/renderPlanetsList/renderPlanetsList"
import useForm from "../../../hooks/useForm"
import useVerifyAuth from "../../../hooks/useVerifyAuth"

export default function CreateTripPage() {
    useVerifyAuth()

    const [form, handleUserInput] = useForm({
        name: "",
        planet: "Mercúrio",
        date: "",
        description: "",
        durationInDays: ""
    })

    const navigate = useNavigate()
    const goBackPage = () => {
        navigate(-1)
    }
    
    const createTrip = (e) => {
        e.preventDefault()

        const token = window.localStorage.getItem('token')

        const header = {
            headers: {
                auth: token
            }
        }
        const body = {
            "name": form.name,
            "planet": form.planet,
            "date": form.date,
            "description": form.description,
            "durationInDays": form.durationInDays
        }

        axios
            .post(`${apiUrl}${student}trips`, body, header)
            .then((res) => {
                navigate('/admin/trips/list')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    return (
        <div>
                <button onClick={goBackPage}>Voltar</button>
            <form onSubmit={createTrip}>
                <h2>Criar Viagem</h2>
                <input
                    name='name'
                    placeholder="Digite o nome"
                    onChange={handleUserInput}
                    value={form.name}
                    required
                />
                <RenderPlanetsList
                    value={form.planet}
                    handleUserInput={handleUserInput}
                    required
                />
                <input
                    name='date'
                    placeholder="Data"
                    type='date'
                    onChange={handleUserInput}
                    value={form.date}
                    required
                />
                <input
                    name='description'
                    placeholder="Descrição"
                    onChange={handleUserInput}
                    value={form.description}
                    required
                />
                <input
                    name='durationInDays'
                    type='number'
                    placeholder="Duração (em dias)"
                    onChange={handleUserInput}
                    value={form.durationInDays}
                    required
                />
            <button>Criar</button>
            </form>
        </div>
    )
}