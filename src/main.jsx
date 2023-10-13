import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Cabecera } from './components/Header'
import { Buscador } from './components/Buscador'
import { Tarjeta } from './components/Tarjeta'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.Fragment>
    <div className='cabecera'>
      <Cabecera/>
    </div>
    <div className='buscador'>
      <Buscador/>
    </div>
    <main>
      <Tarjeta/>
      <Tarjeta/>
      <Tarjeta/>
      <Tarjeta/>
    </main>
  </React.Fragment>
)
