import React, {useState} from 'react';
import classes from "./Counter.module.scss"

const Counter = () => {
    const [count,setCount] = useState(0)
    const handlePlus = () => {
        setCount(prevState => prevState + 1)
    }
    const handleMinus = () => {
        setCount(prevState => prevState - 1)
    }
    return (
        <div className={classes.counter}>
            {count}
            <button type="button" onClick={handlePlus}>+</button>
            <button type="button" onClick={handleMinus}>-</button>
        </div>
    );
};

export default Counter;