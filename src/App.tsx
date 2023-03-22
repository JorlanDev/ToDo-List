/*import { useState } from 'react'*/
import Logo from './assets/Logo.png'
import Pasta from './assets/Pasta.png'
import './App.css'
function App() {

  return (
    <div>
      <header className="h-32 shadow-md">
          <img  className='absolute top-3 left-8 h-24' src={Logo} />
      </header>
      <div id='container' className='relative  container mx-auto px-30 '>
          <div className='relative flex  top-16'>
            <input placeholder='Descreva a tarefa aqui...'  className='h-8 w-full   relative  bg-input-gray , rounded , mr-1.5'  type="text"  />
            <button className='h-8 w-2/12 , rounded , bg-btn-blue , text-white' >Criar tarefa</button>
          </div>        
          <div>
            <h5 id='h5-01' className='absolute top-36 '>Tarefas a fazer {0}</h5>
            <h5 id='h5-02' className='absolute top-36 '>Concluidas {0} de {0}</h5>
          </div>
        <div className='hidden'>
          <div id='div01' className=' relative  top-32 w-full h-4/5 '>
            <img className='absolute ' src={Pasta} />
            <h1  className='relative top-20 , text-h1-blue , text-center '>
            <strong>A SUA LISTA DE TAREFAS ESTÁ VAZIA</strong> <br />
            Adicione uma nova tarefa e comece a organizar o seu dia
            </h1>
          </div>
        </div>  
          <div className='relative flex  top-36'>
            <div id='div-check' className='relative , rounded-l-md , left-0 w-12 h-20 bg-btn-blue'>
            <input type="checkbox" className='default:ring-2 scale-[2.00] ' />
            </div>
            <div className=' relative  flex  w-full h-20 bg-btn-blue mr-1.5 ml-1.5'>
              <h5 className='text-white mt-2 ml-4 mr-4'>{'asdaaaaaaaaaaaaa'}</h5>
            </div>
              <div id='div-check01' className='relative flex    right-0 w-12 h-20 '>
                <button id='btn-trash' className='w-full h-10 rounded-tr-md'><i className="gg-trash text-white center"></i></button>
                <button id='btn-edit' className='w-full h-10  rounded-br-md'><i className="gg-pen text-white center"></i></button>               
              </div> 
          </div>
      </div>
      <footer>
      </footer>     
    </div>
  )
}

export default App
