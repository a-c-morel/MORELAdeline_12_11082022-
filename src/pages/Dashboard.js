import { fetchGreetingsData } from "../fetchData"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom" //Routes, Route,
//import PageNotFound from "./PageNotFound"
import Greetings from "../components/Greetings"

export default function Dashboard() {
  
  const [greetingsData, setGreetingsData] = useState(null)
  //const [barChartsData, setBarChartsData] = useState(null)
  //etc.

  const { userId } = useParams()

  useEffect(() => {
    let mockedData = "../mockAPI.json"
    fetchGreetingsData(mockedData).then((data) => {
      setGreetingsData(data.filter(userGeneral => parseFloat(userId) === userGeneral.userId))
    })
    /*fetchBarChartsData(mockedData).then .... -> setBarChartsData etc.
    ...
    */
  }, [userId])

  return (greetingsData === null) ? (
    <div>Loading...</div>
  ) : (
    <div className="dashboard-container">
      <Greetings data={greetingsData} />
    </div>
  )

}