import React, {useState, useEffect} from 'react'
import { RotateLoader } from 'react-spinners'
import ABCJS from 'abcjs'

const HomeScreen = () => {
    const [abcText, setAbcText] = useState('')
    const [loader, setLoader] = useState(false)
    const [show, setShow] = useState(false)    

    useEffect(() => {
        if(show)
            ABCJS.renderAbc('target', abcText)           
    },[show])

    const showSheetMusic = () => {
        setLoader(true)
        fetch('/api')
        .then(response => response.json())
        .then(data => {
            setAbcText(data.message)
            setShow(true)
            setLoader(false)
            setShow(false)
        })
    }

    return(
        <div className='homescreen'>

            <div className='homescreen_body' align='center'>
                <h1>Welcome to Musica</h1>
                <h3>Wanna listen to music,Enjoy your own music</h3>
                
                <div className='homescreen_input' align='center'>
                    {loader ? (
                        <RotateLoader
                            className='homescreen_loader' 
                            loading
                            size={50}
                            color= '#000'
                        />) : (
                            <button onClick={() => showSheetMusic()} className='homescreen_button' type='submit'> Generate</button>
                        )}
                    
                    
                    <div align='center' id='target'></div>
                </div>
                
            </div>
        </div>
    )
}

export default HomeScreen