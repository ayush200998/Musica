import React from 'react'
import {render} from 'react-dom'

const App = () => {
    return(
        <h1>Welcome to Musica</h1>
    )
}

const appDiv = document.getElementById('app')
render(<App/>, appDiv)