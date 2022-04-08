import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { apiUrl, student } from "../../../App"

const LoginPage = ()=> {
    const navigate = useNavigate()
    const goBackPage = () => {
        navigate(-1)
    }
    useEffect(() => {
        const token = window.localStorage.getItem('token')

        if(token !== null){
            navigate('/admin/trips/list')
        }
    }, [])
    

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
            .then(res => {
                window.localStorage.setItem("token", res.data.token)
                goToAdminHomePage()
            })
            .catch(err => {
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
                value={form.email}
                required
            />
            <input placeholder="Senha"
                onChange={handleUserInput}
                name='password'
                type='password'
                value={form.password}
                required
            />
            <button onClick={login}>Entrar</button>
        </div>
    )
}

export default LoginPage;