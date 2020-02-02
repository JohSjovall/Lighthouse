import React from 'react';
import axios from 'axios';
import Light from '../components/Light'

const baseUrl = 'http://localhost:3001/light'

class Lighthouse extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            lights: []    
        }
        
    }

    componentWillMount() {
        axios
            .get(baseUrl)
            .then(response => {
                this.setState({lights: response.data})
            })
    }
    handelSwitch = (id) => {
        //const id = this.state.lights.map(light => light.id.toString()).indexOf(event.target.value)
        console.log(id)
        const lightL = this.state.lights.find(light => light.id === id)
        console.log('painettu '+ lightL.name)

        if(lightL.switch){
            console.log("ei")
            this.state.lights.find(light => light.id === id).switch = false
        }else{
            console.log("on")
            this.state.lights.find(light => light.id === id).switch = true
        }
        axios.put(`${baseUrl}/${id}`, {
            "name": lightL.name,
            "switch": this.state.lights.find(light => light.id === id).switch,
            "id": lightL.id
        })
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