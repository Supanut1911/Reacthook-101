import React, {useEffect, useState} from 'react'

export default function UseEffectDemo() {

    const [count, setcount] = useState(0)

    useEffect(() => {
        //Call whenver stat is changed
        document.title = count
        //[] is mean call once, if tag some state it will be reRender
    }, [])

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=> {
                setcount(count+1)
            }}>add</button>
        </div>
    )
}
