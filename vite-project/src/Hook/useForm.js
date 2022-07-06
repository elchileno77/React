import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setformState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({ ...formState, [name]: value })
    };

    const onReset = () => {
        setformState(initialForm)
    };

    return { ...formState, formState, onInputChange,onReset }
}
