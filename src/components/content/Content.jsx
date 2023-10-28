import React from 'react'
import './Content.css'
import Btn from '../btn/Btn'
import Ghost from '../img/Ghost'

export default function Content () {
  return (
    <div className='contenedor'>
      <div className='info'>
        <p>Error 404</p>
        <h1 className='info__tittle'>Hey Buddy</h1>
        <p>We can´t seem to find the page you´re looking for.</p>
        <Btn BtnText='Go Home' />
      </div>

      <Ghost />

    </div>
  )
}
