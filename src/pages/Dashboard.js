import { useParams } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import PageNotFound from "./PageNotFound"

export default function Dashboard({data}) {
  console.log("Dashboard data", data)
  const { userId } = useParams()
  console.log("userId in url: ", userId)
  
  const idMatching = data.filter(user => parseFloat(userId) ===  user.userId)
  console.log("idMatching :", idMatching) //output: [] (should be an array containing an object)
  
  if (data === undefined) {
    return null
  }
  
  return (idMatching.length>0) ? (
    idMatching.map(user => (
      <div key={user.userId}>
        Hello user {user.userId} !
      </div>
    ))
  ) : (
      <div>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>  
    )
  }