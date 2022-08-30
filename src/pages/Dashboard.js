//import { useParams } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import PageNotFound from "./PageNotFound"

function Dashboard({data}) {
    console.log(data)
    /*let {id} = useParams()
    let idMatching = data.usersGeneral.map(user => user.userId === id)
    return (idMatching.length>0) ? (
        idMatching.map((id) => (
          <div key={id}>
            Hello user {id} !
          </div>
        ))
      ) :*/ return (
        <div>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>  
      )
  }
  
  export default Dashboard;