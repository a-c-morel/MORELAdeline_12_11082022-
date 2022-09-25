import {LineChart,Tooltip, XAxis, Line, ResponsiveContainer} from "recharts"

export default function UserAverageSessions({data}) {

        return (data === null) ? ( <div>Loading...</div>) 
        : (
            <div className="linechart-container">
                <h4>Durée moyenne des sessions</h4>
                <div className="linechart-graph">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data[0]} fill="#FF0000">
                        <XAxis dataKey="name" tick={{ fill: "#ffffff8e" }}/>
                        <Tooltip cursor={false} />
                        <Line type="natural" dataKey="min" stroke="#ffffff8e" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </div>
            
        )
    }