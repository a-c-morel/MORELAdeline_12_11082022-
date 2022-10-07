import fetchGreetingsData from "../services/fetchGreetingsData"
import fetchBarChartData from "../services/fetchBarChartData"
import fetchLineChartData from "../services/fetchLineChartData"
import fetchRadarChartData from "../services/fetchRadarChartData"
import fetchPieChartData from "../services/fetchPieChartData"
import fetchIntakeData from "../services/fetchIntakeData"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Greetings from "../components/Greetings"
import UserActivity from "../components/UserActivity"
import UserAverageSessions from "../components/UserAverageSessions"
import UserPerformance from "../components/UserPerformance"
import UserScore from "../components/UserScore"
import Intake from "../components/Intake"

export default function Dashboard() {
  
  const [greetingsData, setGreetingsData] = useState(null)
  const [barChartData, setBarChartData] = useState(null)
  const [lineChartData, setLineChartData] = useState(null)
  const [radarChartData, setRadarChartData] = useState(null)
  const [pieChartData, setPieChartData] = useState(null)
  const [intakeData, setIntakeData] = useState(null)
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
    fetchPieChartData(userId).then((data) => {
      setPieChartData(data)
    })
    fetchIntakeData(userId).then((data) => {
      setIntakeData(data)
    })
  }, [userId])

  return (greetingsData === null) ? (
    <div>Loading...</div>
  ) : (
    <div className="dashboard-container">
      <div className="dashboard-left">
        <Greetings data={greetingsData} />
        <UserActivity data={barChartData} />
        <div className="square-charts_container">
          <UserAverageSessions data={lineChartData} />
          <UserPerformance data={radarChartData} />
          <UserScore data={pieChartData} />
        </div>
      </div>
      <div className="dashboard-right">
        <Intake data={intakeData}/>
      </div>
    </div>
  )

}

/*
      
        
        {/* fin de commentaire}*/