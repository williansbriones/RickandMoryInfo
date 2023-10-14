import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Cabecera } from './components/Header'
import { Buscador } from './components/Buscador'
import { TarjetasContainer } from './components/TarjetasContainer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.Fragment>
    <div className='cabecera'>
      <Cabecera/>
    </div>
    <div className='buscador'>
      <Buscador/>
    </div>
    <TarjetasContainer/>
  </React.Fragment>
)
