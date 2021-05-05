import React, {useState} from 'react'

const HomeScreen = () => {
    const [input, setInput] = useState('')

    return(
        <div className='homescreen'>
            <div className='homescreen_image' />

            <div className='homescreen_body' align='center'>
                <h1>Welcome to Musica</h1>
                <h3>Wanna listen to music,Enjoy your own music</h3>
                
                <div className='homescreen_input' align='center'>
                    <input
                     placeholder=' Enter your text here '
                     onChange={(e) => setInput(e.target.value)}
                     value={input} 
                    />
                    <button className='homescreen_button' type='submit'> Generate</button>
                    <p> {input} </p>
                </div>
                
            </div>
        </div>
    )
}

export default HomeScreen