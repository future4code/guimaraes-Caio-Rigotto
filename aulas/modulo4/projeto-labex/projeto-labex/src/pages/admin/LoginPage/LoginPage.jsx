import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginPage (){
    const [ userEmail , setUserEmail ] = useState('')
    const [ userPassword, setUserPassword ] = useState('')

    const navigate = useNavigate()
    const goBackPage = () =>{
        navigate(-1)
    }
    const goToAdminHomePage = () =>{
        navigate('/admin/trips/list')
    }
    const userEmailHandler = (e) => {
        setUserEmail(e.target.value)
    }
    const userPasswordHandler = (e) =>{
        setUserPassword(e.target.value)
    }
    
    return(
        <div>
            <button onClick={goBackPage}>Voltar</button>
            <h2>Login</h2>
            <input placeholder="E-mail" 
            onChange={userEmailHandler}
            value={userEmail}></input>
            <input placeholder="Senha" 
            onChange={userPasswordHandler}
            value={userPassword}></input>
            <button onClick={goToAdminHomePage}>Entrar</button>
        </div>
    )
}