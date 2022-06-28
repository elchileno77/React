import React from 'react';
import ReactDOM from 'react-dom/client';
import { PerfilUser } from './PerfilUser';

import './style.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PerfilUser NombreUser="Rasenjo" Email="richardasenjo2088@gmail.com" Telefono="+56957326739" Direccion="Refgidor Gregorio Bravo 1420,Maipú,Region Metropolitana,Chile" contInitial={15} >
    </PerfilUser>
  </React.StrictMode>


)
