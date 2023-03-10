import { useState } from "react"

function Counter(){
    const [counter, setCounter]= useState(0)
    function incrementar(){
        setCounter(counter+1)
    }
    function decrementar(){
        counter>0?setCounter(counter-1): 0
    }
    function reset(){
        setCounter(0)
    }
    return(
        <div style={{display: 'flex', flexDirection: 'column', background: 'green', height: '100vh', alignItems: 'center', justifyContent: 'center', gap: '10px'}}>
           <div style={{display:'flex', flexDirection: 'column', background:'yellow', alignItems: 'center', border: '3px solid black', width: '300px'}}>
                <h1>Mi contador</h1>
                <p>{counter}</p>
           </div>
           <div style={{display: 'flex', background: 'red', justifyContent:'space-between', width:'300px'}}>
                <button onClick={incrementar}>+</button>
                <button onClick={reset} >reset</button>
                <button onClick={decrementar}>-</button>
           </div>
        </div>
    )
}

export default Counter