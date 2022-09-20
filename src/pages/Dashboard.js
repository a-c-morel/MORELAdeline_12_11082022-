import fetchData from "../fetchData"
import { useState, useEffect } from "react"
import { Routes, Route, useParams } from "react-router-dom"
import PageNotFound from "./PageNotFound"
import Greetings from "../components/Greetings"
import PropTypes from "prop-types"

export default function Dashboard() {
  
  const [data, setData] = useState(null)

  const { userId } = useParams()

  useEffect(() => {
    let mockedData = "../mockAPI.json"
    fetchData(mockedData).then((users) => setData(users.usersGeneral.filter(userGeneral => parseFloat(userId) ===  userGeneral.userId)))
  }, [userId])

  return (data === null) ? (
    <div>Loading...</div>
  ) : (
        (data.length > 0) ? (
          data.map(user => (
            <Greetings key={user.userId} name={user.userInfos.firstName} />
          ))
        ) : (
          <div>
            <Routes>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>  
        )
  )

}

Dashboard.propTypes = {
    data: PropTypes.array
}