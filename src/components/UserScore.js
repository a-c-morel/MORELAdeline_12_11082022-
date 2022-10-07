import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts" /*ResponsiveContainer,  */

export default function UserScore({data}) {

    return (data === null) ? ( <div>Loading...</div>) 
    : (
        <div className="piechart-container" data={data.pieChart}>
            <h4>Score</h4>
                <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{top: 20}}>
                    <Pie data={data.legend} stroke="none" dataKey="value" isAnimationActive={false} outerRadius={80} fill="#ffffff" />
                    <Pie stroke="none" data={data.pieChart} dataKey="value" innerRadius={72} outerRadius={80} startAngle={85} endAngle={445} >
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
/*<ResponsiveContainer width={140} height="100%"> 
            </ResponsiveContainer>*/