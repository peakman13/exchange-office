import { useState } from 'react'

import './App.css'
import Currency from './Compenents/Currency'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Currency/>
      </div>
      
      
    </>
  )
}

export default App
