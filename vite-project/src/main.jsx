import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <HooksApp />

        </div>
      </div>
    </div>
  </>
  //</React.StrictMode>
)
