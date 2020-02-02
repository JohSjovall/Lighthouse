import React from 'react'

const Light = ({light, click}) => {
    return(
    <button onClick={click} >{light.name}</button>
    );
}
export default Light;