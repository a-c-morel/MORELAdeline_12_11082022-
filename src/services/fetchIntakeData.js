let mode = "dev"
let urlDev = "../mockAPI.json"
let urlProd = ""


//Intake
export default async function fetchIntakeData(id) {
    if(mode === "dev") {
      try {
        const response = await fetch(urlDev)
        const json = await response.json()
        const data = json.usersGeneral
            .filter(userGeneral => parseFloat(id) === userGeneral.userId)
            .map(userGeneral => userGeneral.keyData)

        console.log(data)
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