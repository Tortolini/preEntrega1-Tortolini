import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from "./components/NavBar/index"
import ItemListContaier from "./components/ItemListConteiner/itemListContainer"

function App() {
  const [count, setCount] = useState(0)

  const Salute = () => <p style={{marginLeft: 15}}> Hello !</p>

  return (    
    <div className='body'>
      <div>
      <NavBar/>
      </div>
      <div>
        <ItemListContaier/>
      </div>
      <div>
        <h1 className='myapp'>My app</h1>
      </div>
    </div>
  )
}

export default App
