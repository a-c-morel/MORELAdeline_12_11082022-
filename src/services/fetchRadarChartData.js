let mode = "dev"
let urlDev = "../mockAPI.json"
let urlProd = ""


/**
 * 
 * @param {string} id - User's id
 * @returns an array of objects, with data formatted for RadarChart component
 * (see https://recharts.org/en-US/api/RadarChart for more details about the requested data format)
 */
export default async function fetchRadarChartData(id) {
    if(mode === "dev") {
      try {
        const response = await fetch(urlDev)
        const json = await response.json()
        let data = json.usersPerformance.filter(userPerformance => parseFloat(id) === userPerformance.userId)
        // ⬆ performance data of the user matching with the id
        let kind = data[0].kind
        // ⬆ {"1": "cardio", "2": "energy", "3": "endurance", "4": "strength", "5": "speed", "6": "intensity"}
        let dataArray = data[0].data.reverse()
        // ⬆ [{"value": 200, "kind": 1}, {"value": 240, "kind": 2}, {"value": 80, "kind": 3}, {"value": 80, "kind": 4}, {"value": 220, "kind": 5}, {"value": 110, "kind": 6}]
        
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
        const response = await fetch(urlProd) // ⬅ endPoint avec l'id
        const json = await response.json()
        return json
      } catch (error) {
          console.log("error", error)
      }
    }
  }