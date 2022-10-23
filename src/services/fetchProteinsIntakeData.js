let mode = "prod"
let urlDev = "../mockAPI.json"
let urlProd = "http://localhost:3000/user/"

/**
 * 
 * @param {string} id - User's id
 * @returns a string which is the amount of proteins of the user 
 */
export default async function fetchProteinsIntakeData(id) {
    if(mode === "dev") {
      try {
        const response = await fetch(urlDev)
        const json = await response.json()
        const data = json.usersGeneral
            .filter(userGeneral => parseFloat(id) === userGeneral.userId)
            .map(userGeneral => userGeneral.keyData)
        const proteinsData = data[0].proteinCount.toString()
        return proteinsData
      } catch (error) {
          console.log("error", error)
      }
    } else if (mode === "prod") {
      try {
        const response = await fetch(urlProd+id) // ⬅ endPoint with the id
        const json = await response.json()
        const data = json.data.keyData
        const proteinsData = data.proteinCount.toString()
        return proteinsData
      } catch (error) {
          console.log("error", error)
      }
    }
  }