import React from 'react';
import ReactDOM from 'react-dom';
import Lighthouse from './app/Lighthouse'
import './styles/index.css'

const App = () => {
    return(
        <div>
            <Lighthouse />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
    )