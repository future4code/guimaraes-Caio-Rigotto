import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { apiUrl, student } from "../../../App"
import useForm from "../../../hooks/useForm"

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
    

    const [form, handleUserInput] = useForm({
        email: '',
        password: ''
    })

    const goToAdminHomePage = () => {
        navigate('/admin/trips/list')
    }
    
    const login = (e) => {
        e.preventDefault()

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
            <form onSubmit={login}>
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
            <button>Entrar</button>
            </form>
        </div>
    )
}

export default LoginPage;