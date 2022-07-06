import React from 'react'
import { useState } from 'react';
import { useCounter } from '../Hook/useCounter';
import { Small } from './Small';

export const Memorize = () => {
    const { counter, onSumar } = useCounter();

    const [show, setShow] = useState(true);

    

    return (
        <>
            <h1>Counter : <Small value={counter} /> </h1>
            <button className="btn btn-primary" onClick={onSumar}>
                +1
            </button>

            <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
                show/Hide {JSON.stringify(show)}
            </button>
            
        </>
    )
}
