import React from 'react';
import axios from 'axios';
import Light from '../components/Light'

const baseUrl = 'http://localhost:3001/lights'

class Lighthouse extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            'lights': []
        }
        
    }

    componentWillMount() {
        axios
            .get(baseUrl)
            .then(response => {
                this.setState({'lights': response.data})
            })
    }
    handelSwitch = (id) => {
        //const id = this.state.lights.map(light => light.id.toString()).indexOf(event.target.value)
        console.log(id)
        const lightL = this.state.lights.find(light => light.id === id)
        console.log('painettu '+ lightL.label)

        if(lightL.power === 'on'){
            console.log("off")
            this.state.lights.find(light => light.id === id).power = 'off'
        }else{
            console.log("on")
            this.state.lights.find(light => light.id === id).power = 'on'
        }
        this.state.lights.find(light => light.id === id).brightness = 1
        const powerLamp = this.state.lights.find(light => light.id === id).power
        axios.patch(`${baseUrl}/${id}`,{"power":powerLamp, "brightness": 1})
    }
    render(){
        return (
            <div>
                <h1>Lighthouse</h1>
                {this.state.lights.map(light=>
                    <Light key={light.id} light={light} click={() => this.handelSwitch(light.id)}/>
                )}
            </div>
        )
    }
}

export default Lighthouse