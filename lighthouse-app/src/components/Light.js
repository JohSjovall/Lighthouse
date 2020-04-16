import React from 'react'
import '../styles/light.css'

const Light = ({light, click}) => {
    const action = light.power+' action'
    return(
        <div className={'button_area'}>
            <button value={light.id} className={action} onClick={click}>{light.label}</button>
            <button value={light.id} className={"select"}>&#9660;</button>
        </div>
    );
}
export default Light;