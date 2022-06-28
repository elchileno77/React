import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewObject, PlaceHolder }) => {
  const [inputValue, setInputValue] = useState('')
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }
  const Onsubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewObject(inputValue.trim());
    setInputValue('');
  }
  return (
    <form onSubmit={(event) => Onsubmit(event)}>
      <input
        type="text"
        placeholder= {PlaceHolder}
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      >
      </input>
    </form>
  )
}

AddCategory.protoTypes = {
  PlaceHolder: PropTypes.string.isRequired
}


