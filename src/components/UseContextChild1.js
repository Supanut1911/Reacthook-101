import React from 'react'
import ThemeContext from './ThemeContext'

export default function UseContextChild1() {

    //case ดึงค่าจาก global
    const cc = React.useContext(ThemeContext)

    return (
        <div>
            {/* case ดึงค่าโดยใช้ .Consumer */}
            <ThemeContext.Consumer>
                {carColor => <h1 style={{color: carColor}}> car is {carColor}</h1>}        
            </ThemeContext.Consumer>


            <h1>{cc}</h1>
        </div>
    )
}
