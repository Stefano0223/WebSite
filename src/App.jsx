import { useState } from 'react'
import Navbar from './navbar' 
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="black">
    <Navbar></Navbar>
    
    </div>
  )
}

export default App
