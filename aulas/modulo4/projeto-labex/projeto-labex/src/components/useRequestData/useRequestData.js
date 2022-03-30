import axios from "axios";
import { useState } from "react";

export default function useRequestData (url,iniState){
    const [data,setData] = useState(iniState)
    axios
    .get(url)
    .then(res => {
        setData(res.data)
    })
    .catch(e => {
        console.log(e.message)
    })
    return data;
}