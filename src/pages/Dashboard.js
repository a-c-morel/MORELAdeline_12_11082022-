import { fetchGreetingsData, fetchBarChartData, fetchLineChartData, fetchRadarChartData } from "../fetchData"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Greetings from "../components/Greetings"
import UserActivity from "../components/UserActivity"
import UserAverageSessions from "../components/UserAverageSessions"
import UserPerformance from "../components/UserPerformance"

export default function Dashboard() {
  
  const [greetingsData, setGreetingsData] = useState(null)
  const [barChartData, setBarChartData] = useState(null)
  const [lineChartData, setLineChartData] = useState(null)
  const [radarChartData, setRadarChartData] = useState(null)
  //etc.

  const { userId } = useParams()

  useEffect(() => {
    fetchGreetingsData(userId).then((data) => {
      setGreetingsData(data)
    })
    fetchBarChartData(userId).then((data) => {
      setBarChartData(data)
    })
    fetchLineChartData(userId).then((data) => {
      setLineChartData(data)
    })
    fetchRadarChartData(userId).then((data) => {
      setRadarChartData(data)
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
        <UserPerformance data={radarChartData} />
      </div>
    </div>
  )

}

/*
      
        
        {/* fin de commentaire}*/