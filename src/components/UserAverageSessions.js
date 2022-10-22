import {LineChart,Tooltip, XAxis, YAxis, Line, ResponsiveContainer} from "recharts"
import { useEffect, useState } from "react";

export default function UserAverageSessions({data}) {

    const CustomTooltip = ({ active, payload }) => {
        return (active && payload && payload.length) ? (
            <div className="custom-tooltip_linechart">
              <p className="value">{`${payload[0].value} min`}</p>
            </div>
        ) : (null)
    }

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [tickFontSize, setTickFontSize] = useState(".57rem")
      
    useEffect(() => {
    const handleWindowResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        if (width < 1280 && height < 800) {
            setTickFontSize(".57rem")
        } else if (width < 1440 && height < 900) {
            setTickFontSize(".6rem")
        } else if (width >= 1440) {
            setTickFontSize(".75rem")
        }
    }

    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
    }, [width, height, tickFontSize])

    if (data === null) {
        return ( <div>Loading...</div>)
    } else {
        return (
            <div className="linechart-container square-chart">
                <h4>Durée moyenne des sessions</h4>
                <div className="linechart-graph">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data[0]} fill="#FF0000">
                        <XAxis tickSize="0" axisLine={false} dataKey="name" tick={{ fill: "#ffffff8e", fontSize: tickFontSize, transform: "translate(0, 22)" }}/>
                        <YAxis unit="min" hide={true} tickSize="0" axisLine={false} dataKey="min"/>
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{outline: "none", width: "2.44rem", height: "1.5rem", backgroundColor: "#ffffff"}} cursor={{ stroke: '#0202030a', strokeWidth: 50 }} />
                        <Line type="natural" dataKey="min" stroke="#ffffff8e" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </div>
        )
    }
}
