import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((res)=> res.json()) //parseamos 
        .then((response)=> setData(response))
        .catch((error)=> setError(error))
        .finally(()=> setLoading(false))
    },[url])

    return { data, loading, error}

}