import React, { useState, useEffect} from 'react'
import ThemeContext from './ThemeContext'
import UseContextChild1 from './UseContextChild1'

export default function Usecontext() {
    return (
        <div>
            {/* //sending props to components -> UseContextChild1 */}
            {/* assign ค่าให้กับ global */}
            <ThemeContext.Provider value="red">
                <UseContextChild1/>
            </ThemeContext.Provider>
        </div>
    )
}
