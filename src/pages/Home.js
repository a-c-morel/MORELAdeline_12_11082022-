import {Link} from "react-router-dom"

export default function Home({data}) {
    console.log("Home data", data)
    return (data === undefined) ? (null)    
    : (
        <div>
           <p>Select a user</p>
           {data.map(user => (
            <Link to={`/dashboard/`+ user.userId} key={user.userId}>
              <button>User {user.userId}</button>
            </Link>
           ))}
        </div>
      )
  }