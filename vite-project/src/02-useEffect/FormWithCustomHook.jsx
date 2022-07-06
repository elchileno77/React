import { useForm } from "../Hook/useForm";


export const FormWithCustomHook = () => {

  const { userName, email, password, onInputChange,onReset } = useForm({
    userName: "",
    email: '',
    password: ''
  });

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
      <input type="password"
        onChange={onInputChange}
        className='form-control mt2'
        name='password'
        placeholder='Contraseña'
        value={password} />
        <button onClick={onReset} className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}
