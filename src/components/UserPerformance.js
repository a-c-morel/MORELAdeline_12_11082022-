import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"

/**
 * 
 * @param {array of objects} data - Formatted data for Recharts RadarChart component
 * (see https://recharts.org/en-US/api/RadarChart for more details about the data format)
 * @returns a div containing a radar chart component imported from recharts
 */
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
    } else {
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
    }
}

UserPerformance.propTypes = {
    data: PropTypes.array.isRequired
}

UserPerformance.defaultProps = {
    data: 'erreur',
}