let mode = "dev"
let urlDev = "../mockAPI.json"
let urlProd = ""

/**
 * 
 * @param {string} id - User's id
 * @returns an array of objects, with data formatted for PieChart component
 * (see https://recharts.org/en-US/api/PieChart for more details about the requested data format) 
 */
export default async function fetchPieChartData(id) {
    if(mode === "dev") {
      try {
        const response = await fetch(urlDev)
        const json = await response.json()
        const data = json.usersGeneral.filter(userGeneral => parseFloat(id) === userGeneral.userId)
        const scoreData = data[0].todayScore
        // ⬆ user'score (floatnumber)
        const percentageScore = scoreData * 100
        // ⬆ user's score converted to percentage
  
        const pieChartData= {
          pieChart: [
            {
              "name": "score",
              "value": percentageScore,
              "color": "#FF0000"
            },
            {
              "name": "remains",
              "value": 100-percentageScore,
              "color": "transparent"
            }
          ],
          legend: [
            {
              "name": "legend",
              "value": 100,
              "color": "#ffffff"
            }
          ]
        }
  
        return pieChartData
  
      } catch (error) {
          console.log("error", error)
      }
    } else {
      try {
        const response = await fetch(urlProd) // ⬅ endPoint with the id
        const json = await response.json()
        return json
      } catch (error) {
          console.log("error", error)
      }
    }
  }