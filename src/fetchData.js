                    /*Generic function for the whole data*/

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

/****************************************************************************************************/

                    /*Specialized functions for each component*/

//Greetings
export async function fetchGreetingsData(url) {
  try {
    const response = await fetch(url)
    const json = await response.json()
    const data = json.usersGeneral
    return data
  } catch (error) {
      console.log("error", error)
  }
}

//BarCharts
export async function fetchBarChartsData(url) {
  try {
    const response = await fetch(url)
    const json = await response.json()
    let data = json.usersActivity
    return data
  } catch (error) {
      console.log("error", error)
  }
}