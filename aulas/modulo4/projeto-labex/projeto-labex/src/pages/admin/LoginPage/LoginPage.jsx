import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { apiUrl, student } from "../../../App"
import useVerifyAuth from "../../../components/useVerifyAuth/useVerifyAuth"

export default function LoginPage() {
    const navigate = useNavigate()
    const goBackPage = () => {
        navigate(-1)
    }

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const goToAdminHomePage = () => {
        navigate('/admin/trips/list')
    }
    const handleUserInput = (e) => {
        const value = e.target.value

        setForm({
            ...form,
            [e.target.name]: value
        })
    }
    const login = () => {
        const body = {
            "email": form.email,
            "password": form.password
        }
        axios
        .post(`${apiUrl}${student}login`, body)
        .then(res =>{
            window.localStorage.setItem("token", res.data.token)
            console.log(res.data.token)
            goToAdminHomePage()
        })
        .catch(err=> {
            console.log(err.message)
        })
    }

    return (
        <div>
            <button onClick={goBackPage}>Voltar</button>
            <h2>Login</h2>
            <input placeholder="E-mail"
                onChange={handleUserInput}
                name='email'
                type='email'
                value={form.email}></input>
            <input placeholder="Senha"
                onChange={handleUserInput}
                name='password'
                type='password'
                value={form.password}></input>
            <button onClick={login}>Entrar</button>
        </div>
    )
}