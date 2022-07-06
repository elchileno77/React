import { useState, useEffect } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

  const [formState, setformState] = useState({
    userName: "Richard",
    email: 'elchileno77@outlook.com'
  })

  const { userName, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({ ...formState, [name]: value })
  };

  useEffect(() => {
    console.log("Se modifico userName")
  }, [userName])

  useEffect(() => {
    console.log("Se modifico email")
  }, [email])

  return (
    <>
      <h1>Fomulario simple</h1>
      <hr />
      <input type="text"
        onChange={onInputChange}
        className='form-control mt2'
        placeholder='useName'
        name='userName'
        value={userName} />
      <input type="text"
        onChange={onInputChange}
        className='form-control mt2'
        name='email'
        placeholder='elchileno77@outlook.com'
        value={email} />

      {
        //userName === 'Richard' && <Message />
        <Message className="username ===" />
      }
    </>
  )
}
