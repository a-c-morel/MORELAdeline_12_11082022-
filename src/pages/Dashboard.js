import { fetchGreetingsData, fetchBarChartData, fetchLineChartData } from "../fetchData"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Greetings from "../components/Greetings"
import UserActivity from "../components/UserActivity"
import UserAverageSessions from "../components/UserAverageSessions"
import { getDayOfWeek } from "../fetchData"

export default function Dashboard() {
  
  const [greetingsData, setGreetingsData] = useState(null)
  const [barChartData, setBarChartData] = useState(null)
  const [lineChartData, setLineChartData] = useState(null)
  //etc.

  const { userId } = useParams()

  useEffect(() => {
    let mockedData = "../mockAPI.json"
    fetchGreetingsData(mockedData).then((data) => {
      setGreetingsData(data.filter(userGeneral => parseFloat(userId) === userGeneral.userId))
    })
    fetchBarChartData(mockedData).then((data) => {
      setBarChartData(data.filter(userActivity => parseFloat(userId) === userActivity.userId).map(userActivity => userActivity.sessions.map((session, index) => 
        {return ({
            "name": (index+1).toString(),
            "Poids (kg)": session.kilogram,
            "Calories brûlées (kCal)": session.calories
        })}
      )))
    })
    fetchLineChartData(mockedData).then((data) => {
      setLineChartData(data.filter(userAverageSessions => parseFloat(userId) === userAverageSessions.userId).map(userAverageSession => userAverageSession.sessions.map((session, index) => 
        {return ({
            "name": getDayOfWeek(session.day),
            "min": session.sessionLength
        })}
      )))
    })
  }, [userId])

  return (greetingsData === null) ? (
    <div>Loading...</div>
  ) : (
    <div className="dashboard-container">
      <Greetings data={greetingsData} />
      <UserActivity data={barChartData} />
      <div className="square-charts_container">
        <UserAverageSessions data={lineChartData} />
      </div>
    </div>
  )

}