import fetchGreetingsData from "../services/fetchGreetingsData"
import fetchBarChartData from "../services/fetchBarChartData"
import fetchLineChartData from "../services/fetchLineChartData"
import fetchRadarChartData from "../services/fetchRadarChartData"
import fetchPieChartData from "../services/fetchPieChartData"
import fetchCaloriesIntakeData from "../services/fetchCaloriesIntakeData"
import fetchProteinsIntakeData from "../services/fetchProteinsIntakeData"
import fetchCarbIntakeData from "../services/fetchCarbIntakeData"
import fetchLipidsIntakeData from "../services/fetchLipidsIntakeData"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import Greetings from "../components/Greetings"
import UserActivity from "../components/UserActivity"
import UserAverageSessions from "../components/UserAverageSessions"
import UserPerformance from "../components/UserPerformance"
import UserScore from "../components/UserScore"
import CaloriesIntake from "../components/CaloriesIntake"
import ProteinsIntake from "../components/ProteinsIntake"
import CarbIntake from "../components/CarbIntake"
import LipidsIntake from "../components/LipidsIntake"
//import apple from "../assets/apple.png"
//import cheeseburger from "../assets/cheeseburger.png"

export default function Dashboard() {
  
  const [greetingsData, setGreetingsData] = useState(null)
  const [barChartData, setBarChartData] = useState(null)
  const [lineChartData, setLineChartData] = useState(null)
  const [radarChartData, setRadarChartData] = useState(null)
  const [pieChartData, setPieChartData] = useState(null)
  const [caloriesIntakeData, setCaloriesIntakeData] = useState(null)
  const [proteinsIntakeData, setProteinsIntakeData] = useState(null)
  const [carbIntakeData, setCarbIntakeData] = useState(null)
  const [lipidsIntakeData, setLipidsIntakeData] = useState(null)

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
    fetchCaloriesIntakeData(userId).then((data) => {
      setCaloriesIntakeData(data)
    })
    fetchProteinsIntakeData(userId).then((data) => {
      setProteinsIntakeData(data)
    })
    fetchCarbIntakeData(userId).then((data) => {
      setCarbIntakeData(data)
    })
    fetchLipidsIntakeData(userId).then((data) => {
      setLipidsIntakeData(data)
    })
  }, [userId])

  return (greetingsData === null) ? (
    <div>Loading...</div>
  ) : (
    <div className="dashboard-container">
      <div className="charts">
        <Greetings data={greetingsData} />
        <UserActivity data={barChartData} />
        <div className="square-charts_container">
          <UserAverageSessions data={lineChartData} />
          <UserPerformance data={radarChartData} />
          <UserScore data={pieChartData} />
        </div>
      </div>
      <div className="intake">
        <CaloriesIntake data={caloriesIntakeData} />
        <ProteinsIntake data={proteinsIntakeData} />
        <CarbIntake data={carbIntakeData} />
        <LipidsIntake data={lipidsIntakeData} />
      </div>
    </div>
  )

}

/*
      
        
        {/* fin de commentaire}*/