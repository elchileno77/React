import PropTypes from 'prop-types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import swal from 'sweetalert'

export const AddUser = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const userDefault = {
        Nombre: '',
        Profesion: '',
        IntitucionEducativa: '',
        Edad: '',
        Rut: ''
    }
    const [User, setUser] = useState(userDefault)

    const [Users, setUsers] = useState([])

    const Onsubmit = (user) => {
        if (Users.find(element => element.Rut === user.Rut.trim()) != undefined)
            return swal(
                'Error',
                'Usuario ' + user.Rut.trim() + ' ya se encuentra en la lista',
                'error'
            );

        setUsers([...Users, user]);
        setUser(userDefault);
        return swal(
            'OK',
            'Usuario creado ' + user.Rut.trim() + ' correctamente',
            'success'
        );
    }

    const OnChange = (event) => {
        setUser({
            ...User,
            [event.target.name]: event.target.value
        });
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={handleSubmit(Onsubmit)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Rut"
                                    name='Rut'
                                    onChange={OnChange}
                                    className="form-control"
                                    {...register('Rut', {
                                        required: true
                                    })}
                                />
                                {errors.Rut?.type === 'required' && <p class="MessageError">El campo Rut es requerido</p>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    name='Nombre'
                                    onChange={OnChange}
                                    className="form-control"
                                    {...register('Nombre', {
                                        required: true
                                    })}

                                />{errors.Nombre?.type === 'required' && <p class="MessageError">El campo Nombre es requerido</p>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    placeholder="Profesion"
                                    name='Profesion'
                                    onChange={OnChange}
                                    className="form-control"
                                    {...register('Profesion', {
                                        required: true
                                    })}
                                />{errors.Profesion?.type === 'required' && <p class="MessageError">El campo Profesión es requerido</p>}
                            </div>
                            <div class="form-group">
                                <input
                                    type="text"
                                    placeholder="Intitucion Educativa"
                                    name='IntitucionEducativa'
                                    onChange={OnChange}
                                    className="form-control"
                                    {...register('IntitucionEducativa', {
                                        required: true
                                    })}
                                />{errors.IntitucionEducativa?.type === 'required' && <p class="MessageError">El campo Intitucion Educativa es requerido</p>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="number"
                                    placeholder="Edad"
                                    name='Edad'
                                    onChange={OnChange}
                                    className="form-control"
                                    {...register('Edad', {
                                        required: true
                                    })}
                                />{errors.Edad?.value >= 0 && <p class="MessageError">El campo Edad es requerido</p>}
                            </div>
                            <div className="form-group">
                                <button type='submit' className="btn btn-primary">Enviar</button></div>
                        </form>
                    </div>
                    <div className="col-sm-12">
                        <table className="table table-striped table-bordered" key='TableUsers'>
                            <thead>
                                <tr>
                                    <th>Rut</th>
                                    <th>Nombre</th>
                                    <th>Profesion</th>
                                    <th>Intitucion Educativa</th>
                                    <th>Edad</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    Users.map(user =>
                                        <>
                                            <tr key={user.Rut}>
                                                <td>{user.Rut}</td>
                                                <td>{user.Nombre}</td>
                                                <td>{user.Profesion}</td>
                                                <td>{user.IntitucionEducativa}</td>
                                                <td>{user.Edad}</td>
                                            </tr>
                                        </>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </>
    )
}


AddUser.protoTypes = {
    Nombre: PropTypes.string.isRequired,
    Profesion: PropTypes.string.isRequired,
    IntitucionEducativa: PropTypes.string.isRequired,
    Edad: PropTypes.number,
    Rut: PropTypes.string.isRequired
}