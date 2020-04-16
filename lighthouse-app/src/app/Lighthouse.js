import React from 'react';
import axios from 'axios';
import Light from '../components/Light'
import SelectLight from '../components/SelectLight'
import '../styles/lighthouse.css'

const baseUrl = 'http://localhost:3001/lights'

class Lighthouse extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            "lights": []    
        }
        
    }

    componentWillMount() {
        axios
            .get(baseUrl)
            .then(response => {
                this.setState({"lights": response.data })
            })
    }
    handelSwitch = (event) => {
        event.preventDefault()
        //const id = this.state.lights.map(light => light.id.toString()).indexOf(event.target.value)
        console.log(event.target.value)
        const lightL = this.state.lights.find(light => light.id === Number(event.target.value))
        //console.log('painettu '+ lightL.label)

        if(lightL.power === 'on'){
            console.log("ei")
            this.state.lights.find(light => light.id === Number(event.target.value)).power = 'off'
            event.target.className = 'action off'
        }else{
            console.log("on")
            this.state.lights.find(light => light.id === Number(event.target.value)).power = 'on'
            event.target.className = 'action on'
        }
        axios.patch(`${baseUrl}/${event.target.value}`, {
            "power": this.state.lights.find(light => light.id === Number(event.target.value)).power
        }).then(response => response.data)
    }
    render(){
        return (
            <div>
                <div className='heder_name'>Lighthouse</div>
                <div className='buttons'>
                    {this.state.lights.map(light=>
                        <Light key={light.id} light={light} className={light.power} click={this.handelSwitch}/>
                        //<SelectLight key={light.id} light={light}/>
                    )}
                </div>
            </div>
        )
    }
}

export default Lighthouse