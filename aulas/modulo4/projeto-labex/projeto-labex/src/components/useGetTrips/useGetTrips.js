import axios from "axios"
import { apiUrl, student } from "../../App"
import { useState, useEffect } from "react"

export default function useGetTrips() {
    const [trips, setTrips] = useState([])

    useEffect(()=>{
        axios
            .get(`${apiUrl}${student}trips`)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((e) => {
                console.log(e.message)
            })
    }, [])

        
    return trips
}