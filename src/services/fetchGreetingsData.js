let mode = "dev"
let urlDev = "../mockAPI.json"
let urlProd = ""

export default async function fetchGreetingsData(id) {
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
        const response = await fetch(urlProd) // ⬅ endPoint avec l'id
        const json = await response.json()
        return json
      } catch (error) {
          console.log("error", error)
      }
    }
  }