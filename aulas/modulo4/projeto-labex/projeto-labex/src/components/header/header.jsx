import { useNavigate } from "react-router-dom"
import { HeaderButton, HeaderContainer, HeaderH1, HeaderIMG } from "./styles"
import rocketPic from '../../img/rocket-header.png'

const Header = () =>{
    const navigate = useNavigate()
    const goToLoginPage = () => {
        navigate('/login')
    }
    const goToHome = () => {
        navigate('/')
    }

    return(
        <HeaderContainer>
            <HeaderIMG src={rocketPic} 
            onClick={goToHome} 
            />
            <HeaderH1 onClick={goToHome}
            >LabeX - ao infinito e além</HeaderH1>
            <HeaderButton onClick={goToLoginPage}
            >Login</HeaderButton>
        </HeaderContainer>
    )
}

export default Header