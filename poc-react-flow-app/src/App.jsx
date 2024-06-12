import { useState } from 'react'
import SidebarLayout from './components/SidebarLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-200'>
      <SidebarLayout />
    </div>
  )
}

export default App
