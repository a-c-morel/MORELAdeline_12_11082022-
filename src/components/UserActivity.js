import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer} from "recharts"
import { useState, useEffect } from "react"
import PropTypes from "prop-types"

/**
 * 
 * @param {array containing objects} data - Formatted data for Recharts Barchart component
 * (see https://recharts.org/en-US/api/BarChart for more details about the data format)
 * @returns a div containing a title and a bar chart component imported from recharts, with a customized tooltip. 
 */
export default function UserActivity({data}) {

    /**
     * 
     * @param {boolean} active - If set true, the tooltip is displayed. If set false, the tooltip is hidden, usually calculated internally
     * (see https://recharts.org/en-US/api/Tooltip#active for more information)
     * @param {array} payload - The source data of the content to be displayed in the tooltip, usually calculated internally
     * (see https://recharts.org/en-US/api/Tooltip#payload for more information)
     * @returns a div showing kg and KCal values
     */
    const CustomTooltip = ({ active, payload }) => {
        return (active && payload && payload.length) ? (
            <div className="custom-tooltip_barchart">
              <p className="value">{`${payload[0].value}kg`}</p>
              <p className="value">{`${payload[1].value}Kcal`}</p>
            </div>
        ) : (null)
    }
    
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [responsiveContainerHeight, setResponsiveContainerHeight] = useState(170)
    const [legendFontSize, setLegendFontSize] = useState(".67rem")
    const [legendTop, setLegendTop] = useState(-63)
      
    useEffect(() => {
        
        const handleWindowResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight);
        if (width < 1280) {
            setResponsiveContainerHeight(170)
            setLegendFontSize(".67rem")
        } else if (width < 1440) {
            setResponsiveContainerHeight(165)
            setLegendFontSize(".7rem")
        } else {
            setResponsiveContainerHeight(190)
            setLegendFontSize(".88rem")
        }

        if (height < 850) {
            setLegendTop(-63)
        } else if (height < 900) {
            setLegendTop(-74)
        } else {
            setLegendTop(-79)
        }
    }

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);

    }, [width, height, responsiveContainerHeight, legendFontSize, legendTop])

    if (data === null) {
        return ( <div>Loading...</div>)
    } else { return (
            <div className="barchart-container">
                <h4>Activité quotidienne</h4>
                <ResponsiveContainer width="100%" height={responsiveContainerHeight}>
                    <BarChart title="Activité quotidienne" data={data[0]} margin={{left: 32, bottom: 21, right: 21}}>
                        <Legend align="right" wrapperStyle={{top: legendTop, right: 19, fontSize: legendFontSize}} iconSize= "8" iconType="circle"/>
                        <CartesianGrid strokeDasharray="2 1" vertical={false} />
                        <XAxis dy={15} padding={{ right: -32, left: -32 }} axisLine={{stroke:"#DEDEDE"}} tickLine={false} tick={{ fontSize: '.75rem' }} dataKey="name" />
                        <YAxis dx={30} axisLine={false} tickLine={false} tick={{ fontSize: '.75rem' }} orientation="right" tickCount="3" />
                        <Tooltip content={<CustomTooltip />} wrapperStyle={{width: "2.44rem", height: "3.94rem", outline: "none", backgroundColor: "#FF0000"}} />
                        <Bar barSize={7} dataKey="Poids (kg)" fill="#282D30" radius={[3, 3, 0, 0]} />
                        <Bar barSize={7} dataKey="Calories brûlées (kCal)" fill="#FF0000" radius={[3, 3, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}

UserActivity.propTypes = {
    data: PropTypes.array.isRequired
}

UserActivity.defaultProps = {
    data: 'erreur',
}