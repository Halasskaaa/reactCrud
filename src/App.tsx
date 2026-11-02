import { useState } from 'react'
import './App.css'

function App() {
  const [menu, setMenu] = useState("index");

  return (
    <>
      <a href="#" onClick={() => setMenu("index")}>Kezdőlap</a> <br/>
      <a href="#" onClick={() => setMenu("admin")}>Admin</a> <br/>
      <a href="#" onClick={() => setMenu("moderator")}>Moderátor</a> <br/>
    
      <hr/>
    
    {menu === "index" && (
      <div>
        <h1>Kezdőlap</h1>
      </div>
    )}

    {menu === "admin" && (
      <div>
        <h1>Admin</h1>
      </div>
    )}

    {menu === "moderator" && (
      <div>
        <h1>Moderátor</h1>
      </div>
    )}

    </>
  )
}

export default App
