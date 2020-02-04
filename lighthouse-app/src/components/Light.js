import React from 'react'

const Light = ({light, click}) => {
    return(
    <button onClick={click} >{light.label}</button>
    );
}
export default Light;