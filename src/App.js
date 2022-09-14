import FetchData from "./fetchData"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Home from "./pages/Home"

export default function App() {
  const data = FetchData()

  const users = {
    usersGeneral: data.usersGeneral,
    usersActivity: data.usersActivity,
    usersAverageSessions: data.usersAverageSessions,
    usersPerformance: data.usersPerformance
  }

  return (data === undefined) ? (null)
  : (
    <Router>
    <Routes>
      <Route path="/" element={<Home data={users.usersGeneral}/>} />
      <Route path="/dashboard/:userId/*" element={<Dashboard data={users.usersGeneral} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
  )
}