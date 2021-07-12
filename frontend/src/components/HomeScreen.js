import React, {useState, useEffect} from 'react'
import { RotateLoader } from 'react-spinners'
import { css } from '@emotion/react'
import ABCJS from 'abcjs'

const HomeScreen = () => {
    const [input, setInput] = useState('')
    const [abcText, setAbcText] = useState('')
    const [loader, setLoader] = useState(false)
    const override = css`
        margin: 0 auto;
        border-color: black;
    `
    
    const showSheetMusic = () => {
        setLoader(true)
        fetch('/api')
        .then(response => response.json())
        .then(data => {
            setAbcText(data.message)
            ABCJS.renderAbc('target', abcText)
            setLoader(false)
        })
        // ABCJS.renderAbc('target', abcText)
        // console.log('after rendering')
    }

    return(
        <div className='homescreen'>
            <div className='homescreen_image' />

            <div className='homescreen_body' align='center'>
                <h1>Welcome to Musica</h1>
                <h3>Wanna listen to music,Enjoy your own music</h3>
                
                <div className='homescreen_input' align='center'>
                    {/* <input
                     placeholder=' Enter your text here '
                     onChange={(e) => setInput(e.target.value)}
                     value={input} 
                    /> */}
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