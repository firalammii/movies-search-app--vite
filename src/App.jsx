import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SeachBar from './components/SeachBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='title' >Movies Search App</h1>
      <SeachBar />
    </div>
  )
}

export default App
