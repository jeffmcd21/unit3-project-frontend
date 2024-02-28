
import React from 'react';
import { useEffect, useState } from 'react';


const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })

    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div className="App">
        {backToTopButton && (
            <button style={{
                position: "fixed",
                bottom: "25px",
                right: "50px",
                height: "25px",
                width: "25px",
                fontSize: "25px",
                alignItems: "center"
            }}
            onClick={scrollUp}>^</button>
        )}
        BackToTopButton</div>
  )
}

export default BackToTopButton