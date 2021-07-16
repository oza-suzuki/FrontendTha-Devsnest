import React,{useState} from 'react'
import "./FunctionalCounterApp.css"

const FunctionalCounterApp = () => {

    let[count1, setCount1] = useState(0);
    let[count2, setCount2] = useState(0);

    const increaseVal1 = () => setCount1(prevCount => prevCount + 5)
    const increaseVal2 = () => setCount2(count2 + 5)

    // const decreaseVal = () => setCount(count - 1)

    return (
        <div className="FunctionalCounterApp">
            <div className="container">          
                <h1>CounterApp</h1>              
                    <h3 style={{fontSize: '25px'}}>{count1}</h3>
                    <h3 style={{fontSize: '25px'}}>{count2}</h3>                   
                <div class="center">
                <button className="btn" onClick={increaseVal1}>INCRE</button>
                {/* <button className="btn" onClick={decreaseVal}>DECRE</button> */}
                
                {/* <h3>{setCount}</h3>  is an function */}
                <button className="btn" onClick={increaseVal2}>INCRE</button>
                {/* <button className="btn" onClick={increaseVal}>INCRE</button>
                <button className="btn" onClick={increaseVal}>INCRE</button> */}
                </div>
            </div>
        </div>
    )
}

export default FunctionalCounterApp
