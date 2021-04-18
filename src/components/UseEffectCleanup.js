import React, { useState, useEffect} from 'react'

export default function UseEffectCleanup() {
    const [count, setcount] = useState(0)

    useEffect(() => {
        document.title = count

        return () => {

            //clean up ถูกเรียก 2 กรณีคือ 1.คอมโพเน้นเราถูกทำลาย, 2.ทุกครั้งที่ useEffect ตัวใหม่ทุกเรียก

            //call when component is destroy (didunmount)
            document.title = "Delete"

            //useEffect ถูกเรียกใหม่
            console.log('detroy')
        };
    }, [count])

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=> {
                setcount(count+1)
            }}>add</button>
        </div>
    )
}
