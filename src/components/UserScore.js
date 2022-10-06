import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

export default function UserScore({data}) {

    return (data === null) ? ( <div>Loading...</div>) 
    : (
        <div className="piechart-container" data={data}>
            <ResponsiveContainer>
                <PieChart width={730} height={250}>
                    <Pie stroke="none" data={data} dataKey="value" innerRadius={70} outerRadius={80} startAngle={85} endAngle={445} >
                    {data.map((section, index) => (
                        <Cell key={`cell-${index}`} fill={section.color} cornerRadius="50%" />
                    ))}
                    </Pie>
                </PieChart> 
            </ResponsiveContainer>
        </div>
    )
}