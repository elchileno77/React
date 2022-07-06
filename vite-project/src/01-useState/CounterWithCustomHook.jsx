import { useState } from "react"
import { useCounter } from "../Hook/useCounter"


export const CounterWithCustomHook = ({intialCount,increment, decrement}) => {

    const { counter,onSumar,onRestar,onReset } = useCounter(intialCount,increment , decrement);
    return (
        <>
            <h1>Counter con custom Hook {counter} </h1>
            <hr />
            <button className='btn btn-primary' onClick={onSumar}>+1</button>
            <button className='btn btn-primary' onClick={onReset}>Reset</button>
            <button className='btn btn-primary' onClick={onRestar}>-1</button>
        </>
    )
}
