import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts"

export default function UserPerformance({data}) {

        return (data === null) ? ( <div>Loading...</div>) 
        : (
            <div className="radarchart-container">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius={90} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>
            </div>
        )
    }

    //console.log("log de la data depuis UserPerformance.js: ", data)
   /* */