import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import { useEffect, useState } from "react";

export default function UserPerformance({data}) {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
      
    useEffect(() => {
    const handleWindowResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
    }, [width, height])

    if (data === null) {
        return ( <div>Loading...</div>)
    } else if (width < 1440 && height < 900) {
        return (
            <div className="radarchart-container square-chart">
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
    } else { return (<div>autres dimensions</div>) }
}