import React,{useState} from 'react'
import "./FunctionalCounterApp.css"

const FunctionalCounterApp = () => {

    let[count, setCount] = useState(0);

    const increaseVal = () => setCount(count + 1)

    const decreaseVal = () => setCount(count - 1)

    return (
        <div className="FunctionalCounterApp">
            <div className="container">          
                <h1>CounterApp</h1>
                <h3 style={{fontSize: '25px'}}>{count}</h3>
                <div class="center">
                <button className="btn" onClick={increaseVal}>INCRE</button>
                <button className="btn" onClick={decreaseVal}>DECRE</button>
                {/* <h3>{setCount}</h3>  is an function */}
                </div>
            </div>
        </div>
    )
}

export default FunctionalCounterApp
