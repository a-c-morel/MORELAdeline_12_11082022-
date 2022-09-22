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

            //A TESTER :

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

export async function fetchBarChartsData(url) {
  try {
    const response = await fetch(url)
    const json = await response.json()
    let data = json.usersActivity
    
    /*et ensuite sessions.map(session => (
      {name: session.day, uv: session.kilogram, pv: session.calories}
    )) -> peut-être dans le then ?*/

    return data
  } catch (error) {
      console.log("error", error)
  }
}