import PropTypes from 'prop-types'
import { useState } from 'react'




export const PerfilUser = ({ NombreUser, Email, Telefono, Direccion ,contInitial}) => {
    const [contador,setContador] = useState(contInitial);
    const OnclickMenosUno = () => { setContador(a=>a-1) }
    const OnclickMasUno = () => { setContador(a=>a+1) }
    const ResetContador = () => { setContador(contInitial) }
    return (
        <>
            <h1>Perfil del usuario</h1>
            <h4>Nombre de usuario :</h4> <p>{NombreUser}</p>
            <h4>Email de usuario :</h4> <p>{Email}</p>
            <h4>Telefono de usuario :</h4> <p>{Telefono}</p>
            <h4>Direccion de usuario :</h4> <p>{Direccion}</p>
            <h4>Contador :</h4> <p>{contador}</p>
            <button onClick={OnclickMasUno}>+1</button>
            <button onClick={OnclickMenosUno}>-1</button>
            <button onClick={ResetContador}>Reset</button>
        </>
    )
}

PerfilUser.protoTypes = {
    NombreUser: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Telefono: PropTypes.string.isRequired,
    Direccion: PropTypes.string.isRequired,
    Edad: PropTypes.number
}