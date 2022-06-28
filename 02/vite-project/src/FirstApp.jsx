import PropTypes from 'prop-types';

export const FirstApp = (
    {
        Nombre,
        Apellido,
        Rut
    } 
    ) => {
    return (
        <>
            <div>{Nombre}</div>
            <div>{Apellido}</div>

            <div>{Rut}</div>
        </>
    )
}

FirstApp.propTypes = {
    Nombre : PropTypes.string.isRequired,
    Apellido : PropTypes.string.isRequired,
    Rut : PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    Nombre :'Gabriel',
    Apellido : 'Mendoza',
    Rut : '18764686-4'
}