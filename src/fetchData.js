import { useState, useEffect } from "react"

export default function FetchData() {
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
  
}