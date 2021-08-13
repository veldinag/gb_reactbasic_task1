import { useEffect, useState } from "react";
import './Counter.css'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("use Effect")
    }, [counter]);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    }
    return (
        <div className="Counter">
            <span>{counter}</span>
            <button onClick={handleClick} className="Button-counter">Click me!</button>
        </div>
    )
}

export default Counter;