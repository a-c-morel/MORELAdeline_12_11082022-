import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts" /*ResponsiveContainer,  */
import { useEffect, useState } from "react";

export default function UserScore({data}) {

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
    } else if (width < 1280 && height < 840) { 
        return (
            <div className="piechart-container square-chart" data={data.pieChart}>
                <h4>Score</h4>
                    <ResponsiveContainer width="100%" height="100%">
                    <PieChart margin={{top: 20}}>
                        <Pie data={data.legend} stroke="none" dataKey="value" isAnimationActive={false} outerRadius={60} fill="#ffffff" />
                        <Pie stroke="none" data={data.pieChart} dataKey="value" innerRadius={61} outerRadius={69} startAngle={85} endAngle={445} >
                        {data.pieChart.map((section, index) => (
                            <Cell key={`cell-${index}`} fill={section.color} cornerRadius="50%" />
                        ))}
                        </Pie>
                    </PieChart>
                    </ResponsiveContainer>
                    
                <div className="piechart-legend">
                    <h3>{data.pieChart[0].value.toString()} %</h3>
                    <p>de votre objectif</p>
                </div>
            </div>
        )
    } else if (width < 1440 && height < 900) {
        return (
            <div className="piechart-container square-chart" data={data.pieChart}>
                <h4>Score</h4>
                    <ResponsiveContainer width="100%" height="100%">
                    <PieChart margin={{top: 20}}>
                        <Pie data={data.legend} stroke="none" dataKey="value" isAnimationActive={false} outerRadius={70} fill="#ffffff" />
                        <Pie stroke="none" data={data.pieChart} dataKey="value" innerRadius={68} outerRadius={76} startAngle={85} endAngle={445} >
                        {data.pieChart.map((section, index) => (
                            <Cell key={`cell-${index}`} fill={section.color} cornerRadius="50%" />
                        ))}
                        </Pie>
                    </PieChart>
                    </ResponsiveContainer>
                    
                <div className="piechart-legend">
                    <h3>{data.pieChart[0].value.toString()} %</h3>
                    <p>de votre objectif</p>
                </div>
            </div>
        )
    }
}