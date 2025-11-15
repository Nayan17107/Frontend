import React, { useReducer } from 'react'
import { counterReducer } from './CounterReducer'

const Counter = () => {
    // const [count,setCount] = useState(0)
    const [hello, ditchpatch] = useReducer(counterReducer, { count: 0})


    const HandalINC = () => {
        ditchpatch({ type: "INC" })
    }

    const HandalDEC = () => {
        // setCount(count=>count-1)
        ditchpatch({ type: "DEC" })

    }

    return (
        <>
            <h2>{hello.name} Counter: {hello.count}</h2>
            <button onClick={HandalINC}>Increment</button>
            <button onClick={HandalDEC}>Decrement</button>
        </>
    )
}

export default Counter