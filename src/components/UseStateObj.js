
import React, {useState} from 'react'

export default function UseStateObj() {
    const initAccount = {
        username: "",
        password: ""
    }
    const [account, setAccount] = useState(initAccount)

    return (
        <div className="App">
            {/* <p>#Debug {JSON.stringify(account)}</p> */}
            <form>
                <input type='text' value={account.username} placeholder="username" onChange={(e)=> {
                    setAccount({...account, username: e.target.value})
                }}/>
                <br/>
                <input type='text' value={account.password} placeholder="password" onChange={(e)=> {
                    setAccount({...account, password: e.target.value})
                }}/>
                <br/>
                <button onClick={(e) => {
                    e.preventDefault()
                    alert(JSON.stringify(account))
                }}>Submit</button>
                <button onClick={(e) => {
                    e.preventDefault()
                    setAccount(initAccount)
                    //library formik
                }}>Clear</button>
            </form>
        </div>
    )
}
