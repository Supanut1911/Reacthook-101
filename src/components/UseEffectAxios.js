import React, { useState, useEffect} from 'react'
import axios from 'axios'

export default function UseEffectAxios() {

    const [datas, setdatas] = useState([])

    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res => {
           const {data} = res
           console.log(data);
           setdatas(data)
       })
    }, [])

    return (
        <div>
            <ul>
                {datas.map( (item, index) => {
                    return <li key={index}>{item.title}</li>
                })}
            </ul>
        </div>
    )
}

