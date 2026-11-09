import { useEffect, useState } from 'react'
import './App.css'
import { laptops } from './data/laptopok';
import { ListingLaptop } from './components/listingLaptop';
import { AdminLaptop } from './components/AdminLaptop';
import Lablec from './components/Footer';
import Fejlec from './components/Header';
import { ModeratorLaptop } from './components/ModeratorLaptop';

function App() {
  const [menu, setMenu] = useState("index");
  const [laptopok, setLaptopok] = useState(laptops);

  // const [item, setItem] = useState<Laptop[]>([])

  // useEffect(() => {
  //   fetch("./")
  //   .then(response => response.json)
  //   .then(data => setItem(data))
  // }, [])
  return (
    <>

    
      <div className='container mt-4'>

        <Fejlec setMenu={setMenu} />

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
              <ModeratorLaptop
                laptop={laptopok}
                setLaptopok={setLaptopok}
              />
            </div>
          )}
        </main>

        <Lablec />
      </div>


    </>
  )
}

export default App
