let mode = "prod"
let urlDev = "../mockAPI.json"
let urlProd = "http://localhost:3000/user/"

/**
 * 
 * @param {string} id- User's id
 * @returns an array of objects, with data formatted for LineChart component
 * (see https://recharts.org/en-US/api/LineChart for more details about the requested data format)
 */
export default async function fetchLineChartData(id) {
    if (mode === "dev") {
      try {
        const response = await fetch(urlDev)
        const json = await response.json()
        let data = json.usersAverageSessions
          .filter(userAverageSessions => parseFloat(id) === userAverageSessions.userId)
          .map(userAverageSession => userAverageSession.sessions
            .map((session) => 
              {return ({
                  "name": getDayOfWeek(session.day),
                  "min": session.sessionLength
                })
              }
            )
          )
        return data
      } catch (error) {
          console.log("error", error)
      }
    } else if (mode === "prod") {
      try {
        const arrayData = []
        const response = await fetch(urlProd+id+"/average-sessions") // ⬅ endPoint with the id
        const json = await response.json()
        let data = json.data.sessions
          .map((session) => 
            {return ({
                "name": getDayOfWeek(session.day),
                "min": session.sessionLength
              })
            }
          )
        arrayData.push(data)
        return arrayData
      } catch (error) {
          console.log("error", error)
      }
    }
  }

  function getDayOfWeek(weekday) {
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