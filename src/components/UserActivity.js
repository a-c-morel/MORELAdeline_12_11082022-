import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer} from "recharts"

export default function UserActivity({data}) {

    /*if (data === null) {
        console.log("loading...")
    } else {
        console.log("here is your data: ", data)
    }*/


        return (data === null) ? ( <div>Loading...</div>) 
        : (
            <div className="barchart-container">
                <h4>Activité quotidienne</h4>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart className="barchart" title="Activité quotidienne" data={data[0]} margin={{left: 32,top: 64}}>
                        <Legend align="right" wrapperStyle={{top: -20, right: 19}}/>
                        <CartesianGrid strokeDasharray="2 1" vertical={false}/>
                        <XAxis dataKey="name" />
                        <YAxis orientation="right" tickCount="3" />
                        <Tooltip cursor={{fill: '#c4c4c480'}}/>
                        <Bar barSize={7} dataKey="Poids (kg)" fill="#282D30" radius={[3, 3, 0, 0]} />
                        <Bar barSize={7} dataKey="Calories brûlées (kCal)" fill="#FF0000" radius={[3, 3, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            
        )
    }