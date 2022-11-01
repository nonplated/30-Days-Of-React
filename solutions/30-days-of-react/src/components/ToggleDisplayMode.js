import React, {useState} from 'react'

const ToggleDisplayMode = () => {

    const [ isDarkMode, setDarkMode ] = useState(false)

    // let isDarkMode = false;
    const toggleDarkMode = () => {
        let nextIsDarkMode = !isDarkMode;
        document.querySelector('html').setAttribute('mode', (nextIsDarkMode ? 'dark' : '') );
        setDarkMode(nextIsDarkMode)
    }

    return (
        <div>
            <button onClick={()=>toggleDarkMode()}>BUTTON DARK/LIGHT MODE: {(isDarkMode ? 'TO LIGHT' : 'TO DARK')}</button>
        </div>
    )
}

export default ToggleDisplayMode;