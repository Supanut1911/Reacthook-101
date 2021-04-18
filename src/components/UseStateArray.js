import React , {useState} from 'react'

export default function UseStateArray() {
    const initAccount = {
        username: "",
        password: ""
    }

    const initialStateAccountList = []
    const [account, setAccount] = useState(initAccount)
    const [accountList, setaccountList] = useState(initialStateAccountList)

    return (
        <div >
            <div className="App">
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

                        setaccountList([...accountList, account])
                    }}>Submit</button>

                    <button onClick={(e) => {
                        e.preventDefault()
                        setAccount(initAccount)
                    }}>Clear</button>
                </form>
            </div>
            <ul>
               {accountList.map((item, index) => {
                   return <li key={index}>Username: {item.username}, Password: {item.password}</li>
               })}
            </ul>
        </div>
    )
}
