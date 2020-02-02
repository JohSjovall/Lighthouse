import React from 'react';
import ReactDOM from 'react-dom';
import Lighthouse from './app/Lighthouse'

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