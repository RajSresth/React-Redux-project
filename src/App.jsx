import React,{useState} from 'react'
import Child from './component/Child'
import "./App.css"

const App = () => {
  const [account, setAccount] = useState({amount:0})

    const handleInc=()=>{
        setAccount({amount:account.amount+1})        
        
    }
    const handleDec=()=>{
        setAccount({amount:account.amount-1})
    }
    const handleRes=()=>{
        setAccount({amount:account.amount*0})
    }
  return (
    <div>
      <div className='border-black border-[2px] mb-5 py-3 px-10 text-center text-[3rem]'><h1>Amount: {account.amount}</h1></div>
      <Child account={account} handleInc={handleInc} handleDec={handleDec}  handleRes={handleRes}></Child>
    </div>
  )
}

export default App