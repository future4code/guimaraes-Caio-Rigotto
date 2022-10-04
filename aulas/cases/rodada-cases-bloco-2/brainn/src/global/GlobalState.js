import BASE_URL from "../constants/BASE_URL"
import useRequestData from "../hooks/useRequestData"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    const [gameName, isLoadingName] = useRequestData(`${BASE_URL}/loterias`)
    const [constestData, isLoadingContest] = useRequestData(`${BASE_URL}/loterias-concursos`)

    let globalData = {
        gameName,
        isLoadingName,
        constestData,
        isLoadingContest
    }

    return (
        <GlobalContext.Provider value={globalData}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;