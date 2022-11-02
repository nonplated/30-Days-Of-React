import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {increment} from "../actions";

const ToggleDisplayMode = () => {

    const [ isDarkMode, setDarkMode ] = useState(false)

    const dispatch = useDispatch();

    // let isDarkMode = false;
    const toggleDarkMode = () => {
        dispatch( increment() );
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