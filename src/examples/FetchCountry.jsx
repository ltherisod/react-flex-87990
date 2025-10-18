import React, {useEffect} from 'react'
import { useFetch } from '../hooks/useFetch'

const FetchCountry = () => {
const {data, loading, error}= useFetch('https://restcountries.com/v3.1/name/chile')
    // useEffect(()=>{
    //     fetch('https://restcountries.com/v3.1/name/chile')
    //     //traducirlo para poder entenderlo
    //     .then((response)=> response.json())
    //     .then((data)=> console.log(data[0].flag))
    //     .catch((error)=> console.log(error))
    // },[])

    console.log('data', data)
     console.log('loading', loading)
      console.log('error', error)
  return (
    <div>FetchCountry</div>
  )
}

export default FetchCountry