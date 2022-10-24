/**
 * 
 * @returns an instance of FetchDataService class
 */
export default function fetchDataService() {
    return new FetchDataService()
}

class FetchDataService {
    constructor() {
        this.mode = "prod"
        this.urlDev = "../mockAPI.json"
        this.urlProd = "http://localhost:3000/user/"
    }

    /**
     * 
     * @param {string} id - User's id
     * @returns a string, which is the name of the user
     */
    async fetchGreetingsData(id) {
        if(this.mode === "dev") {
          try {
            const response = await fetch(this.urlDev)
            const json = await response.json()
            const data = json.usersGeneral.filter(userGeneral => parseFloat(id) === userGeneral.userId)
            const [name] = data.map(userGeneral => userGeneral.userInfos.firstName)
            return name
          } catch (error) {
              console.log("error", error)
          }
        } else if (this.mode === "prod") {
          try {
            const response = await fetch(this.urlProd+id) // ⬅ endPoint with the id
            const json = await response.json()
            const data = json.data.userInfos
            const name = data.firstName
            return name
          } catch (error) {
              console.log("error", error)
          }
        }
      }

    /**
     * 
     * @param {string} id - User's id
     * @returns an array of objects, with data formatted for BarChart component
     * (see https://recharts.org/en-US/api/BarChart for more details about the requested data format)
     */
     async fetchBarChartData(id) {
        if (this.mode === "dev") {
        try {
            const response = await fetch(this.urlDev)
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
        } else if (this.mode === "prod") {
        try {
            const arrayData = []
            const response = await fetch(this.urlProd+id+"/activity") // ⬅ endPoint with the id
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

    /**
     * 
     * @param {string} id- User's id
     * @returns an array of objects, with data formatted for LineChart component
     * (see https://recharts.org/en-US/api/LineChart for more details about the requested data format)
     */
    async fetchLineChartData(id) {
        if (this.mode === "dev") {
            try {
                const response = await fetch(this.urlDev)
                const json = await response.json()
                let data = json.usersAverageSessions
                .filter(userAverageSessions => parseFloat(id) === userAverageSessions.userId)
                .map(userAverageSession => userAverageSession.sessions
                    .map((session) => 
                    {return ({
                        "name": this.getDayOfWeek(session.day),
                        "min": session.sessionLength
                        })
                    }
                    )
                )
                return data
            } catch (error) {
                console.log("error", error)
            }
        } else if (this.mode === "prod") {
            try {
                const arrayData = []
                const response = await fetch(this.urlProd+id+"/average-sessions") // ⬅ endPoint with the id
                const json = await response.json()
                let data = json.data.sessions
                .map((session) => 
                    {return ({
                        "name": this.getDayOfWeek(session.day),
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

    getDayOfWeek(weekday) {
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

    /**
    * 
     * @param {string} id - User's id
     * @returns an array of objects, with data formatted for RadarChart component
     * (see https://recharts.org/en-US/api/RadarChart for more details about the requested data format)
     */
    async fetchRadarChartData(id) {
        if(this.mode === "dev") {
            try {
                const response = await fetch(this.urlDev)
                const json = await response.json()
                let data = json.usersPerformance.filter(userPerformance => parseFloat(id) === userPerformance.userId)
                // ⬆ performance data of the user matching with the id
                let kind = data[0].kind
                // ⬆ {"1": "cardio", "2": "energy", "3": "endurance", "4": "strength", "5": "speed", "6": "intensity"}
                let dataArray = data[0].data.reverse()
                // ⬆ [{"value": 200, "kind": 1}, {"value": 240, "kind": 2}, {"value": 80, "kind": 3}, {"value": 80, "kind": 4}, {"value": 220, "kind": 5}, {"value": 110, "kind": 6}]
                        
                let radarChartData = dataArray.map((formattedData) => {
                    return {
                    "subject": this.tradKindFr(this.getKind(formattedData.kind, kind)),
                    "value" : formattedData.value
                    }
                }
                )
        
            return radarChartData
        
            } catch (error) {
                console.log("error", error)
            }
        } else if (this.mode === "prod") {
            try {
                const response = await fetch(this.urlProd+id+"/performance") // ⬅ endPoint with the id
                const json = await response.json()
                let kind = json.data.kind
                let dataArray = json.data.data.reverse()

                let radarChartData = dataArray.map((formattedData) => {
                return {
                "subject": this.tradKindFr(this.getKind(formattedData.kind, kind)),
                "value" : formattedData.value
                }
                }
            )

            return radarChartData
            } catch (error) {
                console.log("error", error)
            }
        }
    }

    getKind(number, kind) {
        let myNumber = number.toString()
        return kind[myNumber]
    }

    tradKindFr(kind) {
        if (kind === "energy") {
            return "énergie"
        } else if (kind === "strength") {
            return "force"
        } else if (kind === "speed") {
            return "vitesse"
        } else if (kind === "intensity") {
            return "intensité"
        } else {
            return kind
        }
    }

    /**
     * 
     * @param {string} id - User's id
     * @returns an object, with data formatted for PieChart component
     * (see https://recharts.org/en-US/api/PieChart for more details about the requested data format) 
     */
    async fetchPieChartData(id) {
        if(this.mode === "dev") {
            try {
                const response = await fetch(this.urlDev)
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
        } else if (this.mode === "prod") {
            try {
                const response = await fetch(this.urlProd+id) // ⬅ endPoint with the id
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

    /**
     * 
     * @param {string} id - User's id
     * @returns a string which is the amount of calories of the user
     */
    async fetchCaloriesIntakeData(id) {
        if(this.mode === "dev") {
            try {
                const response = await fetch(this.urlDev)
                const json = await response.json()
                const data = json.usersGeneral
                    .filter(userGeneral => parseFloat(id) === userGeneral.userId)
                    .map(userGeneral => userGeneral.keyData)
                const caloriesData = data[0].calorieCount.toString()
                return caloriesData
            } catch (error) {
                console.log("error", error)
            }
        } else if (this.mode === "prod") {
            try {
                const response = await fetch(this.urlProd+id) // ⬅ endPoint with the id
                const json = await response.json()
                const data = json.data.keyData
                const caloriesData = data.calorieCount.toString()
                return caloriesData
            } catch (error) {
                console.log("error", error)
            }
        }
    }

    /**
     * 
     * @param {string} id - User's id
     * @returns a string which is the amount of proteins of the user 
     */
    async fetchProteinsIntakeData(id) {
        if(this.mode === "dev") {
            try {
                const response = await fetch(this.urlDev)
                const json = await response.json()
                const data = json.usersGeneral
                    .filter(userGeneral => parseFloat(id) === userGeneral.userId)
                    .map(userGeneral => userGeneral.keyData)
                const proteinsData = data[0].proteinCount.toString()
                return proteinsData
            } catch (error) {
                console.log("error", error)
            }
        } else if (this.mode === "prod") {
            try {
                const response = await fetch(this.urlProd+id) // ⬅ endPoint with the id
                const json = await response.json()
                const data = json.data.keyData
                const proteinsData = data.proteinCount.toString()
                return proteinsData
            } catch (error) {
                console.log("error", error)
            }
        }
    }

    /**
     * 
     * @param {string} id - User's id
     * @returns a string which is the amount of carbohydrates of the user 
     */
    async fetchCarbIntakeData(id) {
        if(this.mode === "dev") {
            try {
                const response = await fetch(this.urlDev)
                const json = await response.json()
                const data = json.usersGeneral
                    .filter(userGeneral => parseFloat(id) === userGeneral.userId)
                    .map(userGeneral => userGeneral.keyData)
                const carbData = data[0].carbohydrateCount.toString()
                return carbData
            } catch (error) {
                console.log("error", error)
            }
        } else if (this.mode === "prod") {
            try {
                const response = await fetch(this.urlProd+id) // ⬅ endPoint with the id
                const json = await response.json()
                const data = json.data.keyData
                const carbData = data.carbohydrateCount.toString()
                return carbData
            } catch (error) {
                console.log("error", error)
            }
        }
    }

    /**
     * 
     * @param {string} id - User's id
     * @returns a string which is the amount of lipids of the user
     */
    async fetchLipidsIntakeData(id) {
        if(this.mode === "dev") {
            try {
                const response = await fetch(this.urlDev)
                const json = await response.json()
                const data = json.usersGeneral
                    .filter(userGeneral => parseFloat(id) === userGeneral.userId)
                    .map(userGeneral => userGeneral.keyData)
                const lipidsData = data[0].lipidCount.toString()
                return lipidsData
            } catch (error) {
                console.log("error", error)
            }
        } else if (this.mode === "prod") {
            try {
                const response = await fetch(this.urlProd+id) // ⬅ endPoint with the id
                const json = await response.json()
                const data = json.data.keyData
                const lipidsData = data.lipidCount.toString()
                return lipidsData
            } catch (error) {
                console.log("error", error)
            }
        }
    }

}
