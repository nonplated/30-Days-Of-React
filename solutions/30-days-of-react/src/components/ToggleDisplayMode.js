import React, {useState} from 'react'

const ToggleDisplayMode = () => {

    const [ isDarkMode, setDarkMode ] = useState(false)

    // let isDarkMode = false;
    const toggleDarkMode = () => {
        // let nextIsDarkMode = !isDarkMode;
        document.querySelector('html').setAttribute('mode', (!isDarkMode ? 'dark' : '') );
        setDarkMode(!isDarkMode)
    }

    return (
        <div>
            <button onClick={()=>toggleDarkMode()}>TOGGLE MODE TO: {(isDarkMode ? 'LIGHT' : 'DARK')}</button>
        </div>
    )
}

export default ToggleDisplayMode;