import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts"

export default function MyBarChart({data}) {

    if (data === null) {
        console.log("loading...")
    } else {
        console.log("here is your data: ", JSON.stringify(data))
    }


        return (data === null) ? ( <div>Loading...</div>) 
        : (
            <BarChart width={835} height={320} data={data[0]} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Poids (kg)" fill="#282D30" radius="5px" />
                <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" />
            </BarChart>
        )
    }
    
    
    /*data = [
        {"name": "1", "Poids (kg)": 80, "Calories brûlées (kCal)": 240},
        {"name": "2", "Poids (kg)": 80, "Calories brûlées (kCal)": 220},
        {"name": "3", "Poids (kg)": 81, "Calories brûlées (kCal)": 280},
        {"name": "4", "Poids (kg)": 81, "Calories brûlées (kCal)": 290},
        {"name": "5", "Poids (kg)": 80, "Calories brûlées (kCal)": 160},
        {"name": "6", "Poids (kg)": 78, "Calories brûlées (kCal)": 162},
        {"name": "6", "Poids (kg)": 76, "Calories brûlées (kCal)": 390},
    ]*/ //ok