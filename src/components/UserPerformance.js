import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"

export default function UserPerformance({data}) {

        return (data === null) ? ( <div>Loading...</div>) 
        : (
            <div className="radarchart-container">
                <ResponsiveContainer width="100%" height="100%" >
                    <RadarChart margin={{ top: 0, right: 25, bottom: 0, left: 25 }} data={data}>
                        <PolarGrid radialLines={false}/>
                        <PolarAngleAxis tick={{ fill:"#FFFFFF"}} dataKey="subject" />
                        <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
                        <Radar dataKey="value" stroke="none" fill="#FF0000" fillOpacity={0.6}/>
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        )
    }


/* RadarChart : outerRadius={90}  */

    //console.log("log de la data depuis UserPerformance.js: ", data)
   /* */