import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Home from "./pages/Home"

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard/:userId/*" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
  )
}