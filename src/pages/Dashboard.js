import { useParams } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import PageNotFound from "./PageNotFound"
import Greetings from "../components/Greetings"
//import PropTypes from "prop-types"

export default function Dashboard({data}) {
  //console.log("Dashboard data", data)
  const { userId } = useParams()
  //console.log("userId in url: ", userId)
  
  const idMatching = data.filter(user => parseFloat(userId) ===  user.userId)
  //console.log("idMatching :", idMatching)
  
  if (data === undefined) {
    return null
  }
  
  return (idMatching.length>0) ? (
    idMatching.map(user => (
      <Greetings key={user.userId} name={user.userInfos.firstName} />
    ))
  ) : (
      <div>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>  
    )
  }

/*Dashboard.propTypes = {
    data: PropTypes.array
}*/