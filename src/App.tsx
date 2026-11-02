import { useState } from 'react'
import './App.css'
import { laptops } from './data/laptopok';
import {ListingLaptop} from './components/listingLaptop';
import {AdminLaptop} from './components/AdminLaptop';

function App() {
  const [menu, setMenu] = useState("index");
  const [ laptopok, setLaptopok ] = useState(laptops);

  return (
    <>
      <button onClick={() => setMenu("index")}>Kezdőlap</button> <br/>
      <button onClick={() => setMenu("admin")}>Admin</button> <br/>
      <button onClick={() => setMenu("moderator")}>Moderátor</button> <br/>

      <main>
        {menu === "index" && (
          <div className="row">
            {laptopok.map((laptop, index) => (
              <div key={index} className="col-sm-4">
                <ListingLaptop laptop={laptop} />
              </div>
            ))}
          </div>
        )}
        {menu === "admin" && (
          <div className="row">
            <AdminLaptop laptop={laptopok} setLaptopok={setLaptopok} />
          </div>
        )}
        {menu === "moderator" && (
          <div className="row">
            {laptopok.map((laptop, index) => (
              <div key={index} className="col-sm-4">
                <ListingLaptop laptop={laptop} />
              </div>
            ))}
          </div>
        )}
      </main>

    </>
  )
}

export default App
