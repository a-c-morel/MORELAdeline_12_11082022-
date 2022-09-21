import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import fetchData from "../fetchData"
import { useState, useEffect } from "react"

export default function Home() {
  
  const [data, setData] = useState(null)

  useEffect(() => {
    let mockedData = "mockAPI.json"
    fetchData(mockedData).then((users) => setData(users))
  }, [])
  
  return (data === null) ? (
    <div>Loading...</div>
  )    
    : (
        <div className="home">
           <p>Select a user</p>
           {data.usersGeneral.map(userGeneral => (
            <Link to={`/dashboard/`+ userGeneral.userId} key={userGeneral.userId}>
              <button>User {userGeneral.userId}</button>
            </Link>
           ))}
        </div>
      )
}

Home.propTypes = {
  data: PropTypes.array
}