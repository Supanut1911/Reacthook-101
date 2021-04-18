import React, { useState, useEffect} from 'react'


export default function UseEffectInterval() {

    const [count, setcount] = useState(0)
    const dosomething = () => {
        setcount(count => count + 1)
    }

    useEffect(() => {
 
        const intervalId = setInterval(dosomething, 1000);

        //Cleanup
        return () => {
            clearInterval(intervalId)
        };
    }, [])

    return (
        <div>
            <h1>Count:{count}</h1>
        </div>
    )
}
