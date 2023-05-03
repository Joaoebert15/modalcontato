import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './components/logo'
import Modal from './components/modal'


function App() {

  return (
    <div className='App'>
        
        <nav id='inicio'> 
         <logo><img width={150} src="https://www.transpoli.com.br/imagens/logo.png" alt="" /></logo>
        <a href="#inicio"><button >Inicio</button></a>
         <button>Sobre nós</button>  {/* lembrar de colocar href referente as # de conclusoes de pagina */}
         <Modal className='modal'>
            <div className='modal'>
               <input  type="text" placeholder='Seu email'/>
               <input  type="text" placeholder='Telefone' />
               <input className='enviar' type="button" value="Enviar" />
               </div>


         </Modal>
         <button>Encontre-nos</button>
       </nav>
    
    <main>
     
    </main>

      
    </div>
  )
}

export default App
