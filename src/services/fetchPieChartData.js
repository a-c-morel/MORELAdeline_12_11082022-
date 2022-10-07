let mode = "dev"
let urlDev = "../mockAPI.json"
let urlProd = ""

//Score (PieChart) ⬇
export default async function fetchPieChartData(id) {
    if(mode === "dev") {
      try {
        const response = await fetch(urlDev)
        const json = await response.json()
        const data = json.usersGeneral.filter(userGeneral => parseFloat(id) === userGeneral.userId)
        // ⬆ toute la data de performance de l'utilisateur choisi
        const scoreData = data[0].todayScore
        // ⬆ score de l'utilisateur (en floatnumber)
        const percentageScore = scoreData * 100
        // ⬆ score de l'utilisateur converti en pourcentage
  
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
        const response = await fetch(urlProd) // ⬅ endPoint avec l'id
        const json = await response.json()
        return json
      } catch (error) {
          console.log("error", error)
      }
    }
  }