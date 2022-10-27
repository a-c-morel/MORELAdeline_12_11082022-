import {Link} from "react-router-dom"
import PropTypes from "prop-types"
import fetchHomePageData from "../services/fetchHomePageData"
import { useState, useEffect } from "react"

/**
 * Render a div representing a homepage for the app.
 * It allows the developpers to select a user with a clickable button instead of typing an endpoint.
 * This is optional, and you can use the app without this component.
 * @returns {React.ReactElement}
 */
export default function Home() {
  
  const [data, setData] = useState(null)

  useEffect(() => {
    let mockedData = "mockAPI.json"
    fetchHomePageData(mockedData).then((users) => setData(users))
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