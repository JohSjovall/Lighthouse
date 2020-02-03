import React from 'react'

const Light = ({light, click}) => {
    console.log(light.label)
    return(
    <button onClick={click} >{light.label}</button>
    );
}
export default Light;