export default async function fetchData() {
    try {
        const response = await fetch("mockAPI.json")
        const data = await response.json()
    if (!response.ok) {
        throw Error(response.statusText)
      }
    return data
    } catch (error) {
      console.log(error)
    }
}
