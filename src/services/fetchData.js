//This is only for HomePage, please make sure to use the specialized functions for each component
export default async function fetchData(url) {
  try {
    const response = await fetch(url)
    const json = await response.json()
    const users = {
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