import axios from "axios"
import { useEffect, useState } from "react"
import { cleanUrl } from "../helpers/CleanUrl"

const useFetch = (host, endpoint, { page, sort_field, sort_type, sort_lang, category, country, year, limit } = {}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const api = host + endpoint + `?page=${page}&sort_field=${sort_field}&sort_type=${sort_type}&sort_lang=${sort_lang}&category=${category}&country=${country}&year=${year}&limit=${limit}`
    const fetchData = async () => {
        try {
            setLoading(true)
            const response = (await axios.get(cleanUrl(api))).data
            setLoading(false)
            if (response?.items) setData(response.items)
            else if (response?.data?.items) setData(response.data?.items)
            else setData(response)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [endpoint])

    return { data, loading }
}

export default useFetch