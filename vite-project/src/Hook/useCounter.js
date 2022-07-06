import { useState } from "react"

export const useCounter = (initialValue = 1, increment =1 , decrement=1) => {
  
    const [counter, setCounter] = useState(initialValue)

    const onSumar = () =>
    {
        setCounter(counter+increment)

    }

    const onRestar = () =>
    {
        setCounter(counter-decrement)

    }

    const onReset = () =>
    {
        setCounter(initialValue)

    }

    return { counter,onSumar,onRestar,onReset }
}
