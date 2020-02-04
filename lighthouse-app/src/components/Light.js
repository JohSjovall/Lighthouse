import React from 'react'
import '../styles/light.css'

const Light = ({light, click}) => {
    return(
    <button value={light.id} className={light.power} onClick={click}>{light.label}</button>
    );
}
export default Light;