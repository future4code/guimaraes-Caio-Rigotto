import React from "react";
import logo from "../img/Vector.png"
import { HeaderContainer, Logo } from "./styledHeader";

export default class Header extends React.Component {
    render() {
        return <HeaderContainer>
            <Logo src={logo}>

            </Logo>
        </HeaderContainer>
    }
}