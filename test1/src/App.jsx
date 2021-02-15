import React from 'react'

import './App.css'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Cond from './components/Condicional'

//simple component to test props, props children and etc...
export default props => {
  return (
    <div className="App">
        <Card titulo="Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
        <Card titulo="Componentes com filhos">
            <ComFilhos>
                <ul>
                    <li>ana</li>
                    <li>pedro</li>
                    <li>joao</li>
                    <li>maria</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="Componente com parametro">
            <ComParametro titulo="hulk" subtitulo="filme do cara verde" />
        </Card>
        <Card titulo="Lista">
            <Repeticao/>
        </Card>
        <Card titulo="Cond">
            <Cond numero={10} />
        </Card>
    </div>
  )
}