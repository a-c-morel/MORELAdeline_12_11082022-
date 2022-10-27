import fetchDataService from "../services/fetchDataService"

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

/**
 * Render a div containing the main content of the app (user's informations)
 * Wait for the data Promise resolutions, then re-renders Dashboard component with data.
 * @returns {React.ReactElement}
 */
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
    fetchDataService().fetchGreetingsData(userId).then((data) => {
      setGreetingsData(data)
    })
    fetchDataService().fetchBarChartData(userId).then((data) => {
      setBarChartData(data)
    })
    fetchDataService().fetchLineChartData(userId).then((data) => {
      setLineChartData(data)
    })
    fetchDataService().fetchRadarChartData(userId).then((data) => {
      setRadarChartData(data)
    })
    fetchDataService().fetchPieChartData(userId).then((data) => {
      setPieChartData(data)
    })
    fetchDataService().fetchCaloriesIntakeData(userId).then((data) => {
      setCaloriesIntakeData(data)
    })
    fetchDataService().fetchProteinsIntakeData(userId).then((data) => {
      setProteinsIntakeData(data)
    })
    fetchDataService().fetchCarbIntakeData(userId).then((data) => {
      setCarbIntakeData(data)
    })
    fetchDataService().fetchLipidsIntakeData(userId).then((data) => {
      setLipidsIntakeData(data)
    })
  }, [userId])

  return (greetingsData === null) ? (
    <div>Loading...</div>
  ) : (
    <div className="dashboard-container">
      <div className="charts">
        <Greetings name={greetingsData} />
        <UserActivity data={barChartData} />
        <div className="square-charts_container">
          <UserAverageSessions data={lineChartData} />
          <UserPerformance data={radarChartData} />
          <UserScore data={pieChartData} />
        </div>
      </div>
      <div className="intake">
        <CaloriesIntake amountOfCalories={caloriesIntakeData} />
        <ProteinsIntake amountOfProteins={proteinsIntakeData} />
        <CarbIntake amountOfCarbs={carbIntakeData} />
        <LipidsIntake amountOfLipids={lipidsIntakeData} />
      </div>
    </div>
  )

}