import axios from "axios";
import { useEffect, useState } from "react";

const useRequestData = (url, body) => {
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const fetchData = async (url) => {
            await axios
                .get(url, body)
                .then((res) => {
                    setData(res.data)
                    setLoading(false)
                })
                .catch((err) => console.log(err))
        }
        fetchData(url)
    }, [url])
    return [data, isLoading]
}

export default useRequestData;