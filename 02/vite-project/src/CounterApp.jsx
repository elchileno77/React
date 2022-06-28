import PropTypes from 'prop-types';

export const CounterApp = (
    {
        ValueNumeric
    } 
    ) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ValueNumeric}</h2>
        </>
    )
}

CounterApp.propTypes = {
    ValueNumeric : PropTypes.number
}
