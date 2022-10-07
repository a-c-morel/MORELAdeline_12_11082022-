let mode = "dev"
let urlDev = "../mockAPI.json"
let urlProd = ""

//User Activity (BarChart) ⬇
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