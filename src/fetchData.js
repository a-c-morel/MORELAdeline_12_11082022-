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

//User Activity (BarChart)
export async function fetchBarChartData(url) {
  try {
    const response = await fetch(url)
    const json = await response.json()
    let data = json.usersActivity
    return data
  } catch (error) {
      console.log("error", error)
  }
}

//User Average Sessions (LineChart)
export async function fetchLineChartData(url) {
  try {
    const response = await fetch(url)
    const json = await response.json()
    let data = json.usersAverageSessions
    return data
  } catch (error) {
      console.log("error", error)
  }
}

export function getDayOfWeek(weekday) {
  if (weekday === 1) {
    return "L"
  }
  if (weekday === 2 || weekday === 3) {
    return "M"
  }
  if (weekday === 4) {
    return "J"
  } if (weekday === 5) {
    return "V"
  } if (weekday === 6) {
    return "S"
  } if (weekday === 7) {
    return "D"
  }
}