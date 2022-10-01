let mode = "dev"
let urlDev = "../mockAPI.json"
let urlProd = ""
 
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
export async function fetchGreetingsData(id) {
  if(mode === "dev") {
    try {
      const response = await fetch(urlDev)
      const json = await response.json()
      const data = json.usersGeneral.filter(userGeneral => parseFloat(id) === userGeneral.userId)
      return data
    } catch (error) {
        console.log("error", error)
    }
  } else {
    try {
      const response = await fetch(urlProd) //endPoint avec l'id
      const json = await response.json()
      return json
    } catch (error) {
        console.log("error", error)
    }
  }
}

//User Activity (BarChart)
export async function fetchBarChartData(id) {
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
      const response = await fetch(urlProd) //endPoint avec l'id
      const json = await response.json()
      return json
    } catch (error) {
        console.log("error", error)
    }
  }
  
}

//User Average Sessions (LineChart)
export async function fetchLineChartData(id) {
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
      const response = await fetch(urlProd) //endPoint avec l'id
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

// User Performance (RadarChart)
export async function fetchRadarChartData(id) {
  if(mode === "dev") {
    try {
      const response = await fetch(urlDev)
      const json = await response.json()
      
      let data = json.usersPerformance.filter(userPerformance => parseFloat(id) === userPerformance.userId)
      //console.log("data from fetchRadarChartData: ", data)
      //toute la data de l'utilisateur choisi

      let kind = data[0].kind
      //console.log("kind object: ", kind)
      //{"1": "cardio", "2": "energy", "3": "endurance", "4": "strength", "5": "speed", "6": "intensity"}
      
      let dataArray = data[0].data
      //console.log("Array qui s'appelle 'data': ", dataArray)
      //[{"value": 200, "kind": 1}, {"value": 240, "kind": 2}, {"value": 80, "kind": 3}, {"value": 80, "kind": 4}, {"value": 220, "kind": 5}, {"value": 110, "kind": 6}]
      
      const getKind = function(number) {
        let myNumber = number.toString()
        return kind[myNumber]
      }
      
      let radarChartData = dataArray.map((formattedData) => {
          return {
          "subject": getKind(formattedData.kind),
          "value" : formattedData.value
          }
        }
      )

      return radarChartData

    } catch (error) {
        console.log("error", error)
    }
  } else {
    try {
      const response = await fetch(urlProd) //endPoint avec l'id
      const json = await response.json()
      return json
    } catch (error) {
        console.log("error", error)
    }
  }
}

/*async function getSubject(myNumber, myId) {
  if(mode === "dev") {
    try {
      const response = await fetch(urlDev)
      const json = await response.json()
      let myKind = json.usersPerformance
        .filter(userPerformance => parseFloat(myId) === userPerformance.userId)
        .map(userPerformance => 
          Object.keys(userPerformance.kind)
            .map(myKey => 
              ( myKey === myNumber) ? userPerformance.kind : null
            )
        )
      return myKind
    } catch (error) {
        console.log("error", error)
    }
  } else {
    try {
      const response = await fetch(urlProd) //endPoint avec l'id
      const json = await response.json()
      return json
    } catch (error) {
        console.log("error", error)
    }
  }
}*/