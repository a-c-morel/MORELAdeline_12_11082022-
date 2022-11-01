/**
 * This class contains functions that fetch data from mock or API, and format it for each component of the app
 */
export default class FetchDataService {
    constructor() {
        /**
         * The environment mode : either "dev" (when mock is used) or "prod" (when using the API endpoints)
         * @type {string}
         */
        this.mode = "dev"
        /**
         * The url of the mocked data file (in "dev" mode, when not using the API)
         * @type {string}
         */
        this.urlDev = "../mockAPI.json"
        /**
         * The beginning of the endpoint url where we can get the data
         * (in "prod" mode, when using the API)
         * @type {string}
         */
        this.urlProd = "http://localhost:3000/user/"
    }

    /**
     * Fetch Greetings component data
     * @param {string} id - User's id
     * @returns {Promise.<string, Error>} - A promise that returns a string (the user's name) if resolved, or an Error if rejected
     */
    async fetchGreetingsData(id) {
        if(this.mode === "dev") {
          try {
            const response = await fetch(this.urlDev)
            const json = await response.json()
            const data = json.usersGeneral.filter(userGeneral => parseFloat(id) === userGeneral.userId)
            const name = data.map(userGeneral => userGeneral.userInfos.firstName).toString()
            return name
          } catch (error) {
              console.log("error", error)
          }
        } else if (this.mode === "prod") {
          try {
            const response = await fetch(this.urlProd+id)
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
     * Fetch UserActivity component data (data formatted for Recharts BarChart component : see https://recharts.org/en-US/api/BarChart for more details about the requested data format)
     * @param {string} id - User's id
     * @returns {Promise.<Array, Error>} - A promise that returns an Array if resolved, or an Error if rejected
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
                const response = await fetch(this.urlProd+id+"/activity")
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
     * Fetch UserAverageSessions component data (data formatted for LineChart component : see https://recharts.org/en-US/api/LineChart for more details about the requested data format)
     * @param {string} id - User's id
     * @returns {Promise.<Array, Error>} - A promise that returns an Array if resolved, or an Error if rejected 
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
                const response = await fetch(this.urlProd+id+"/average-sessions")
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

    /**
     * Get a week day initial letter
     * @param {number} weekday - The day of the week (1 for Monday, 2 for Tuesday,...)
     * @returns {string} - The initial of the french day of week name
     */
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
     * Fetch UserPerformance component data (ata formatted for RadarChart component : see https://recharts.org/en-US/api/RadarChart for more details about the requested data format)
     * @param {string} id - User's id
     * @returns {Promise.<Array, Error>} - A promise that returns an Array if resolved, or an Error if rejected 
     */
    async fetchRadarChartData(id) {
        if(this.mode === "dev") {
            try {
                const response = await fetch(this.urlDev)
                const json = await response.json()
                let data = json.usersPerformance.filter(userPerformance => parseFloat(id) === userPerformance.userId)
                let kind = data[0].kind
                //console.log(kind)
                let dataArray = data[0].data.reverse()
                let radarChartData = dataArray.map((myData) => {
                    return {
                    "subject": this.tradKindFr(this.getKind(myData.kind, kind)),
                    "value" : myData.value
                    }
                }
                )
        
            return radarChartData
        
            } catch (error) {
                console.log("error", error)
            }
        } else if (this.mode === "prod") {
            try {
                const response = await fetch(this.urlProd+id+"/performance")
                const json = await response.json()
                let kind = json.data.kind
                let dataArray = json.data.data.reverse()
                let radarChartData = dataArray.map((myData) => {
                    return {
                    "subject": this.tradKindFr(this.getKind(myData.kind, kind)),
                    "value" : myData.value
                    }
                }
            )

            return radarChartData

            } catch (error) {
                console.log("error", error)
            }
        }
    }

    /**
     * Get the value corresponding to the key matching with a given number
     * @param {number} number 
     * @param {string} kind 
     * @returns {string} - The name of the kind of performance
     */
    getKind(number, kind) {
        let myNumber = number.toString()
        return kind[myNumber]
    }

    /**
     * Translate the name of the kind of performance from english to french
     * @param {string} kind - The name of the kind of performance (in english)
     * @returns {string} - The name of the kind of performance (in french)
     */
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
     * Fetch UserScore component data (data formatted for PieChart component : see https://recharts.org/en-US/api/PieChart for more details about the requested data format) 
     * @param {string} id - User's id
     * @returns {Promise.<Object, Error>} - A promise that returns an Object if resolved, or an Error if rejected
     */
    async fetchPieChartData(id) {
        if(this.mode === "dev") {
            try {
                const response = await fetch(this.urlDev)
                const json = await response.json()
                const data = json.usersGeneral.filter(userGeneral => parseFloat(id) === userGeneral.userId)
                let scoreData
                if(data[0].todayScore === undefined) {
                scoreData = data[0].score
                } else {
                scoreData = data[0].todayScore
                }
                const percentageScore = scoreData * 100
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
                const response = await fetch(this.urlProd+id)
                const json = await response.json()
                let scoreData
                if(json.data.todayScore === undefined) {
                scoreData = json.data.score
                } else {
                scoreData = json.data.todayScore
                }
                const percentageScore = scoreData * 100
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
     * Fetch CaloriesIntake component data
     * @param {string} id - User's id
     * @returns {Promise.<string, Error>} - A promise that returns a string (the amount of calories of the user) if resolved, or an Error if rejected
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
                const response = await fetch(this.urlProd+id)
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
     * Fetch ProteinsIntake component data
     * @param {string} id - User's id
     * @returns {Promise.<string, Error>} - A promise that returns a string (the amount of proteins of the user) if resolved, or an Error if rejected
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
                const response = await fetch(this.urlProd+id)
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
     * Fetch CarbIntake component data
     * @param {string} id - User's id
     * @returns {Promise.<string, Error>} - A promise that returns a string (the amount of carbohydrates of the user) if resolved, or an Error if rejected
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
                const response = await fetch(this.urlProd+id)
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
     * Fetch LipidsIntake component data
     * @param {string} id - User's id
     * @returns {Promise.<string, Error>} - A promise that returns a string (the amount of lipids of the user) if resolved, or an Error if rejected
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
                const response = await fetch(this.urlProd+id)
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
