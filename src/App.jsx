import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
        <hr/>
      <button onClick={()=>setCount(count+1)}>
        Increase Count
      </button>
    </>
  )
}

export default App
