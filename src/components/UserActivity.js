import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer} from "recharts"

export default function UserActivity({data}) {

    const CustomTooltip = ({ active, payload }) => {
        return (active && payload && payload.length) ? (
            <div className="custom-tooltip_barchart">
              <p className="value">{`${payload[0].value}kg`}</p>
              <p className="value">{`${payload[1].value}Kcal`}</p>
            </div>
        ) : (null)
    }

        return (data === null) ? ( <div>Loading...</div>) 
        : (
            <div className="barchart-container">
                <h4>Activité quotidienne</h4>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart className="barchart" title="Activité quotidienne" data={data[0]} margin={{left: 32,top: 64}}>
                        <Legend align="right" wrapperStyle={{top: -20, right: 19}}/>
                        <CartesianGrid strokeDasharray="2 1" vertical={false} />
                        <XAxis dataKey="name" />
                        <YAxis orientation="right" tickCount="3" />
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{width: "2.44rem", height: "3.94rem", outline: "none", backgroundColor: "#FF0000"}} />
                        <Bar barSize={7} dataKey="Poids (kg)" fill="#282D30" radius={[3, 3, 0, 0]} />
                        <Bar barSize={7} dataKey="Calories brûlées (kCal)" fill="#FF0000" radius={[3, 3, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
        )
    }