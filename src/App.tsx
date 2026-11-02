import { useState } from 'react'
import './App.css'
import { laptops } from './data/laptopok';
import { IndexLaptop } from './components/IndexLaptop';

function App() {
  const [menu, setMenu] = useState("index");

  return (
    <>
      <a href="#" onClick={() => setMenu("index")}>Kezdőlap</a> <br/>
      <a href="#" onClick={() => setMenu("admin")}>Admin</a> <br/>
      <a href="#" onClick={() => setMenu("moderator")}>Moderátor</a> <br/>
    
      <hr/>
    
    {menu === "index" && (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Kezdőlap</h1>
          </div>
        </div>
        <div className="row">
          {laptops.map((laptop, index) => (
            <div key={index} className="col-sm-4">
              <IndexLaptop
                laptopBrand={laptop.brand}
                laptopModel={laptop.model}
                laptopPrice={laptop.price}
                laptopInStock={laptop.inStock}
             />
            </div>
          ))}
        </div>
      </div>
    )}

    {menu === "admin" && (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Admin</h1>
          </div>
        </div>
      </div>
    )}

    {menu === "moderator" && (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>Moderátor</h1>
          </div>
        </div>
      </div>
    )}

    </>
  )
}

export default App
