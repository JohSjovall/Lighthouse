import React from 'react'
import '../styles/selectlight.css'

const SelectLight = ({light}) => {
    return(
        <div>
            <div>{light.label}</div>
            <div>
                <div>
                    <button value={0.0} >0%</button>
                    <button value={0.1} >10%</button>
                    <button value={0.2} >20%</button>
                    <button value={0.3} >30%</button>
                    <button value={0.4} >40%</button>
                    <button value={0.5} >50%</button>
                    <button value={0.6} >60%</button>
                    <button value={0.7} >70%</button>
                    <button value={0.8} >80%</button>
                    <button value={0.9} >90%</button>
                    <button value={1.0} >100%</button>
                </div>
                <div>
                    <button value={2500} >2500K</button>
                    <button value={2750} >2750K</button>
                    <button value={3000} >3000K</button>
                    <button value={3200} >3200K</button>
                    <button value={3500} >3500K</button>
                    <button value={4000} >4000K</button>
                    <button value={5000} >5000K</button>
                    <button value={6000} >6000K</button>
                    <button value={7000} >7000K</button>
                    <button value={8000} >8000K</button>
                    <button value={9000} >9000K</button>
                </div>
            </div>
        </div>
    );
}
export default SelectLight;