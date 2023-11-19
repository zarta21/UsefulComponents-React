import React, { useEffect, useState } from 'react'
import "./styles.scss"

const ToggleBtn = () => {

    let storedTheme = localStorage.getItem("DARK_MODE");
    const [darkMode, setDarkMode] = useState(storedTheme);

    useEffect(() => {
        if (localStorage.getItem("DARK_MODE") === "on") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("DARK_MODE", "on");
            let btn =  document.querySelector(".btn");
            btn.classList.add("active");
        }

    }, [darkMode]);

    const toggleTheme = () => {
        storedTheme = localStorage.getItem("DARK_MODE");
        let btn =  document.querySelector(".btn");
        if (storedTheme !== "on") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("DARK_MODE", "on");
            setDarkMode(storedTheme)
            btn.classList.add("active");

        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("DARK_MODE", null);
            setDarkMode(storedTheme)
            btn.classList.remove("active");
        }
    };
  return (
    <div className='container'> 
        <div className="toggle">
            <input type="checkbox" className="checkbox" />
            <label className="btn" onClick={toggleTheme}>
                <div className="sun">
                    <div id="star">
                        <div className="star" id="star-1">★</div>
                        <div className="star" id="star-2">★</div>
                    </div>
                </div>
                <div className="moon"></div>
            </label>
        </div>       
    </div>
  )
}

export default ToggleBtn