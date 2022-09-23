import { fetchGreetingsData, fetchBarChartsData } from "../fetchData"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Greetings from "../components/Greetings"
import MyBarChart from "../components/MyBarChart"

export default function Dashboard() {
  
  const [greetingsData, setGreetingsData] = useState(null)
  const [barChartsData, setBarChartsData] = useState(null)
  //etc.

  const { userId } = useParams()

  useEffect(() => {
    let mockedData = "../mockAPI.json"
    fetchGreetingsData(mockedData).then((data) => {
      setGreetingsData(data.filter(userGeneral => parseFloat(userId) === userGeneral.userId))
    })
    fetchBarChartsData(mockedData).then((data) => {
      setBarChartsData(data.filter(userActivity => parseFloat(userId) === userActivity.userId).map(userActivity => userActivity.sessions.map((session, index) => 
        {return ({
            "name": (index+1).toString(),
            "Poids (kg)": session.kilogram,
            "Calories brûlées (kCal)": session.calories
        })}
      )))
    })
  }, [userId])

  return (greetingsData === null) ? (
    <div>Loading...</div>
  ) : (
    <div className="dashboard-container">
      <Greetings data={greetingsData} />
      <MyBarChart data={barChartsData} />
    </div>
  )

}