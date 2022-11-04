import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"

/**
 * Render a div containing a title, a pie chart component imported from recharts, and a div containing the score
 * @param {Array} data - Formatted data for Recharts PieChart component
 * (see https://recharts.org/en-US/api/PieChart for more details about the data format)
 * @returns {React.ReactElement}
 */
function UserScore({data}) {

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [pie1OuterRadius, setPie1OuterRadius] = useState(60)
    const [pie2InnerRadius, setPie2InnerRadius] = useState(61)
    const [pie2OuterRadius, setPie2OuterRadius] = useState(69)
      
    useEffect(() => {
    const handleWindowResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
        if (width < 1280 && height < 840) {
            setPie1OuterRadius(60)
            setPie2InnerRadius(61)
            setPie2OuterRadius(69)
        } else if (width < 1440 && height < 900) {
            setPie1OuterRadius(70)
            setPie2InnerRadius(68)
            setPie2OuterRadius(76)
        } else if (width >= 1440) {
            setPie1OuterRadius(81)
            setPie2InnerRadius(79)
            setPie2OuterRadius(87)
        }
    }

    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
    }, [width, height, pie1OuterRadius, pie2InnerRadius, pie2OuterRadius])

    if (data === null) {
        return ( <div>Loading...</div>)
    } else { 
        return (
            <div className="piechart-container square-chart" data={data.pieChart}>
                <h4>Score</h4>
                    <ResponsiveContainer width="100%" height="100%">
                    <PieChart margin={{top: 20}}>
                        <Pie data={data.legend} stroke="none" dataKey="value" isAnimationActive={false} outerRadius={pie1OuterRadius} fill="#ffffff" />
                        <Pie stroke="none" data={data.pieChart} dataKey="value" innerRadius={pie2InnerRadius} outerRadius={pie2OuterRadius} startAngle={85} endAngle={445} >
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

UserScore.propTypes = {
    data: PropTypes.object
}

export default UserScore