//import { useState, useEffect } from "react"

export default async function fetchData(url, users) {
  try {
    const response = await fetch(url)
    const json = await response.json()
    users = {
      usersGeneral: json.usersGeneral,
      usersActivity: json.usersActivity,
      usersAverageSessions: json.usersAverageSessions,
      usersPerformance: json.usersPerformance
    }
    return users
  } catch (error) {
      console.log("error", error)
  }
}

/*export default function fetchData() {

  let mockedData = "mockAPI.json"
  let fetchAllData = fetch(mockedData)

  fetchAllData.then(response => {
    if(response.ok) {
      return response.json()
    }
    throw response
  })
  .then((data) => {
    const users = {
      usersGeneral: data.usersGeneral,
      usersActivity: data.usersActivity,
      usersAverageSessions: data.usersAverageSessions,
      usersPerformance: data.usersPerformance
    }
    return users
  })
  .catch(error => {
    console.error("Error fetching data : ", error)
    return error
  })

}*/

/*export default function FetchData() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("mockAPI.json")
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw response
    })
    .then((data) => {
      setData(data)
    })
    .catch(error => {
      console.error("Error fetching data : ", error)
      setError(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  if(loading) return "Loading..."
  if(error) return "Error!"

  return data
  
}*/