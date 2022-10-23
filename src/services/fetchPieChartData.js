let mode = "prod"
let urlDev = "../mockAPI.json"
let urlProd = "http://localhost:3000/user/"

//à retester quand j'aurai forké le backend mis à jour !

/**
 * 
 * @param {string} id - User's id
 * @returns an object, with data formatted for PieChart component
 * (see https://recharts.org/en-US/api/PieChart for more details about the requested data format) 
 */
export default async function fetchPieChartData(id) {
    if(mode === "dev") {
      try {
        const response = await fetch(urlDev)
        const json = await response.json()
        const data = json.usersGeneral.filter(userGeneral => parseFloat(id) === userGeneral.userId)
        let scoreData
        // ⬆ user'score (floatnumber)
        if(data[0].todayScore === undefined) {
          scoreData = data[0].score
        } else {
          scoreData = data[0].todayScore
        }
        
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
    } else if (mode === "prod") {
      try {
        const response = await fetch(urlProd+id) // ⬅ endPoint with the id
        const json = await response.json()
        let scoreData
        // ⬆ user'score (floatnumber)
        if(json.data.todayScore === undefined) {
          scoreData = json.data.score
        } else {
          scoreData = json.data.todayScore
        }

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
    }
  }