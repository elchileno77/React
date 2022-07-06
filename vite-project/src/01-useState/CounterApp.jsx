import { useState } from "react";


export const CounterApp = () => {
  const [ state , setState] = useState({
    Counter1: 0,
    Counter2: 0,
    Counter3: 0
  });

  const { Counter1, Counter2, Counter3 } = state;

  return (
    <>
      <h1>Counter 1: {Counter1}</h1>
      <h1>Counter 2: {Counter2}</h1>
      <h1>Counter 3: {Counter3}</h1>
      <div>CounterState</div>
      <button className="btn btn-primary" onClick={() => setState({
        ...state, Counter1: Counter1 + 1

      })}>+1 Counter 1</button>
      <button className="btn btn-primary" onClick={() => setState({
        ...state, Counter2: Counter2 + 1

      })}>+1 Counter 2</button>
      <button className="btn btn-primary" onClick={() => setState({
        ...state, Counter3: Counter3 + 1

      })}>+1 Counter 3</button>
    </>

  )
}
