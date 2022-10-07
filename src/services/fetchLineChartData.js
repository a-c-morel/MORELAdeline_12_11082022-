let mode = "dev"
let urlDev = "../mockAPI.json"
let urlProd = ""

//User Average Sessions (LineChart) ⬇
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
    } else {
      try {
        const response = await fetch(urlProd) // ⬅ endPoint avec l'id
        const json = await response.json()
        return json
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