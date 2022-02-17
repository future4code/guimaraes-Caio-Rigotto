import React from "react";
import styled from "styled-components";

const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`

const InputForm = styled.input`
    margin-top: 15px;
`

const DescFormulario = styled.label`
    
`

const SelectForm = styled.select`
    margin-top: 15px;
`


function Form(props) {

    const DropDown = (dropdown, numDropdown) => {
        if (dropdown === "true") {
            if (numDropdown === '4') {
                return (
                    <SelectForm id={props.selectId} name={props.selectId}>
                        <option value={props.opcaoSelect1}>{props.opcaoSelect1}</option>
                        <option value={props.opcaoSelect2}>{props.opcaoSelect2}</option>
                        <option value={props.opcaoSelect3}>{props.opcaoSelect3}</option>
                        <option value={props.opcaoSelect4}>{props.opcaoSelect4}</option>
                    </SelectForm>
                )
            } else
                if (numDropdown === '3') {
                    return (
                        <SelectForm id={props.selectId} name={props.selectId}>
                            <option value={props.opcaoSelect1}>{props.opcaoSelect1}</option>
                            <option value={props.opcaoSelect2}>{props.opcaoSelect2}</option>
                            <option value={props.opcaoSelect3}>{props.opcaoSelect3}</option>
                        </SelectForm>
                    )
                }
        }
    }

    const Input = (input) => {
        if (input === "true") {
            return (
                <InputForm
                    placeholder={props.placeholderForm}
                    type={props.typeForm}
                    value={props.valorInput}
                    onChange={props.onChangeInput}
                />
            )
        }
    }



    return (
        <ContainerForm>
            <li>
                <DescFormulario>{props.valorDesc}</DescFormulario>
            </li>
            {Input(props.input)}
            {DropDown(props.dropdown, props.numDropdown)}
        </ContainerForm>
    )
}

export default Form;