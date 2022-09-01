import React from "react";

export default class App extends React.Component {
  
  constructor(props) {
      super(props)
      this.state = {users : {}, loading: true}
      console.log("this is the state before componentDidMount", this.state)
  }

  async componentDidMount() {
    try {
      //faire appel fonction qui fait le fetch ici
      const response = await fetch("mockAPI.json")
      const data = await response.json()
      
      console.log("this is the data", data)
      console.log("this is the usersGeneral data", data.usersGeneral)
      this.setState({users: {
          usersGeneral: data.usersGeneral,
          usersActivity: data.usersActivity,
          usersAverageSessions: data.usersAverageSessions,
          usersPerformance: data.usersPerformance
        }, loading: false}, () => {console.log("this is the state", this.state)})
      if (!response.ok) {
        throw Error(response.statusText)
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { loading } = this.state
    const { users } = this.state
    return loading ? (<div>loading...</div>)
    : (
      <div>
        <p>Hey guys!</p>
        <ul>
        {users.usersGeneral.map(userGeneral => 
          <li key={userGeneral.userId}>Hello, user {userGeneral.userId}</li>
        )}
        </ul>
      </div>
    )
  }
  
}

/*import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {data: []}
  }

  componentDidMount() {
    const fetchData = async () => {
      const response = await fetch('mockAPI.json')
      const { data } = await response.json()
      this.setState({data})
    }
    fetchData()
  }
  
  render() {
    console.log(this.sate.data)

    return (
      <Router>
        <Routes>
          <Route path="/:id/*" element={<Dashboard data={this.state.usersGeneral}/>} />
          <Route path="*" element={<PageNotFound data={this.state.usersGeneral}/>} />
        </Routes>
    </Router>
    )
  }
 
}

export default App*/