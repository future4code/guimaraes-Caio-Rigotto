import BASE_URL from "../constants/BASE_URL"
import useRequestData from "../hooks/useRequestData"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    const [gameName, isLoadingName] = useRequestData(`${BASE_URL}/loterias`)
    const [constestId, isLoadingId] = useRequestData()

    console.log(gameName)


    return (
        <GlobalContext.Provider value= {gameName}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;