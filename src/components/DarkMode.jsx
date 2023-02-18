import React, { useState } from 'react'
import useDarkMode from '../hook/useDarkMode';
import { CiDark, CiLight } from "react-icons/ci"

function DarkMode() {

    const [colorTheme, setTheme] = useDarkMode();
    const [isDarkMode, setDarkMode] = useState( colorTheme === "light" ? true : false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkMode(checked);
    };

    let modeName = colorTheme.charAt(0).toUpperCase() + colorTheme.substring(1)


  return (
    <div>
        <div className='cursor-pointer flex gap-2 font-[600]' onClick={toggleDarkMode}>
            {colorTheme === "dark" ?  <CiDark size={22} className="mt-[1px]"/> : <CiLight size={22} className="mt-[1px]"/> }
            <span>{modeName} Mode</span>
        </div>
    </div>
  )
}

export default DarkMode