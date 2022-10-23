let mode = "prod"
let urlDev = "../mockAPI.json"
let urlProd = "http://localhost:3000/user/"

/**
 * 
 * @param {string} id - User's id
 * @returns a string, which is the name of the user
 */
export default async function fetchGreetingsData(id) {
    if(mode === "dev") {
      try {
        const response = await fetch(urlDev)
        const json = await response.json()
        const data = json.usersGeneral.filter(userGeneral => parseFloat(id) === userGeneral.userId)
        const [name] = data.map(userGeneral => userGeneral.userInfos.firstName)
        return name
      } catch (error) {
          console.log("error", error)
      }
    } else if (mode === "prod") {
      try {
        const response = await fetch(urlProd+id) // ⬅ endPoint with the id
        const json = await response.json()
        const data = json.data.userInfos
        const name = data.firstName
        return name
      } catch (error) {
          console.log("error", error)
      }
    }
  }