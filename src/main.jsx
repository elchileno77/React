import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from '../../../React/04/vite-project/src/GifExpertApp'
import { AddUser } from './components/AddUser'

import './styles.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp /> 
     <hr></hr>
    <AddUser /> 
  </React.StrictMode>
)
