import React from 'react'
import {render} from 'react-dom'
import HomeScreen from './HomeScreen'

const App = () => {
    return(
        <div className='app_body'>
            <HomeScreen />
        </div>
    )
}

const appDiv = document.getElementById('app')
render(<App/>, appDiv)