import BASE_URL from "../constants/BASE_URL"
import useRequestData from "../hooks/useRequestData"
import GlobalContext from "./GlobalContext"

const GlobalState = (props) => {
    const [gameName, isLoadingName] = useRequestData(`${BASE_URL}/loterias`)
    // const [constestId, isLoadingId] = useRequestData(`${BASE_URL}/`)

    // console.log(gameName, isLoadingName)

    // {
    //     let constestList = []
    //     !isLoadingName &&
    //         gameName.forEach(constest => {
    //             constestList.push({ constest })
    //         });
    //     console.log(constestList)
    // }

    let globalData = {
        gameName,
        isLoadingName
    }

    return (
        <GlobalContext.Provider value={globalData}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState;