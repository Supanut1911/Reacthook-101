import React, {useState} from 'react'

export default function Countnum() {

    const [count, setCount] = useState(0)
    const [tile, setTitle] = useState('')

    return (
        <div className="App">
            <h1>Count: {count}</h1>
            <h1>Title: {tile}</h1>
            <button onClick={() => {
                setTitle(`New york ${count}`)
                setCount(count + 1)

            }}>Add</button>
        </div>
    )
}