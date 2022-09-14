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



/*export default function App() {

  const [dataState, setDataState] = useState({
    users : {},
    loading: true
  })

  useEffect(() => {
    const usersData = fetchData()
    setDataState({
      users: usersData,
      loading: false
    })
  }, [])

  console.log(dataState)*/

  /*return (dataState === {}) ? (
    <PageNotFound />
  ) : (
    <Router>
    <Routes>
      <Route path="/" element={<Home data={dataState.usersGeneral}/>} />
      <Route path="/dashboard/:userId/*" element={<Dashboard data={dataState.usersGeneral} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
  )*/

//}

/*export default function App() {

  const [dataState, setDataState]= useState( {} )
  const [loadingState, setLoadingState] = useState( false )

  useEffect(() => {
    setLoadingState(true)
    fetchData(setLoadingState)
  }, [])
  

  function initState() {
    setDataState({users: {
      usersGeneral: dataState.usersGeneral,
      usersActivity: dataState.usersActivity,
      usersAverageSessions: dataState.usersAverageSessions,
      usersPerformance: dataState.usersPerformance
    }})
    setLoadingState( false )
  }
  initState()

  return (loadingState === true) ? (
    null
  ) : (
    <Router>
    <Routes>
      <Route path="/" element={<Home data={dataState.usersGeneral}/>} />
      <Route path="/dashboard/:userId/*" element={<Dashboard data={dataState.usersGeneral} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
  )
}*/

/*export default class App extends React.Component {
  
  constructor(props) {
      super(props)
      this.state = {users : {}, loading: true}
      //console.log("this is the state before componentDidMount", this.state)
  }

  async componentDidMount() {
      const data = await fetchData()
      //console.log("this is the data", data)
      //console.log("this is the usersGeneral data", data.usersGeneral)
      this.setState({users: {
          usersGeneral: data.usersGeneral,
          usersActivity: data.usersActivity,
          usersAverageSessions: data.usersAverageSessions,
          usersPerformance: data.usersPerformance
        }, loading: false}) //, () => {console.log("this is the state", this.state)}
  }

  render() {
    const { loading } = this.state
    const { users } = this.state
    return loading ? null
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
  
}*/