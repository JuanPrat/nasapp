import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../../App"
import singletonApikey from "../../patterns/singleton/Apikey"

export const NearbyAsteroids = () => {
    const date = new Date()
    console.log(date.getDate)
    const[startDate, setStartDate] = useState()
    const[endDate, setEndDate] = useState()
    const[totalAsteroids, setTotalAsteroids] = useState(0)
    const theme = useContext(ThemeContext)

    const handleSearch = ()=>{
        axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${singletonApikey.getApikey()}`)
         .then(res => {
             setTotalAsteroids(res.data.element_count)
         })
    }

    return (
        <>
            <h3>Here you can see information regarding nearby objects to the earth by date</h3>
            <>pick start date</>
            <input type="date" onChange={(event => {setStartDate(event.target.value)})}></input>
            <>pick end date</>
            <input type="date" onChange={(event => {setEndDate(event.target.value)})}></input>
            <button onClick={handleSearch}>Search for asteroids !</button>
            <p>there were in total {totalAsteroids} asteroids around the earth between the dates</p>
        </>
    )

}