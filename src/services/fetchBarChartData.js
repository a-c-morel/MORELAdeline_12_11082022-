let mode = "prod"
let urlDev = "../mockAPI.json"
let urlProd = "http://localhost:3000/user/"

/**
 * 
 * @param {string} id - User's id
 * @returns an array of objects, with data formatted for BarChart component
 * (see https://recharts.org/en-US/api/BarChart for more details about the requested data format)
 */
export default async function fetchBarChartData(id) {
    if (mode === "dev") {
      try {
        const response = await fetch(urlDev)
        const json = await response.json()
        let data = json.usersActivity
          .filter(userActivity => parseFloat(id) === userActivity.userId)
          .map(userActivity => userActivity.sessions
            .map((session, index) => 
              { return ({
                  "name": (index+1).toString(),
                  "Poids (kg)": session.kilogram,
                  "Calories brûlées (kCal)": session.calories
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
        const response = await fetch(urlProd+id+"/activity") // ⬅ endPoint with the id
        const json = await response.json()
        let data = json.data.sessions
            .map((session, index) => 
              { return ({
                  "name": (index+1).toString(),
                  "Poids (kg)": session.kilogram,
                  "Calories brûlées (kCal)": session.calories
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