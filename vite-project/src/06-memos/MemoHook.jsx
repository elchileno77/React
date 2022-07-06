import React, { useMemo } from 'react'
import { useState } from 'react';
import { useCounter } from '../Hook/useCounter';
import { Small } from './Small';

const heavyStuff = (iterationNumeber = 100) => {
    
    for (let index = 0; index < iterationNumeber; index++) {
        console.log('Ahí vamos...');
    }

    return `${iterationNumeber} iteraciones realizadas`;
}

export const MemoHook = () => {
    const { counter, onSumar } = useCounter();

    const [show, setShow] = useState(true);

    const memorizeValue = useMemo( () =>   heavyStuff(counter),[counter]   );

    return (
        <>
            <h1>Counter : <Small value={counter} /> </h1>
            <hr />
            <h4>{memorizeValue}</h4>
            <hr />
            <button className="btn btn-primary" onClick={onSumar}>
                +1
            </button>

            <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
                show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}
