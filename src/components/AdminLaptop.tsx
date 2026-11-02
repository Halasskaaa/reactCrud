import type { Laptop } from "../types/Laptop";

export function AdminLaptop(props: { laptop: Laptop[], setLaptopok: (laptopok: Laptop[]) => void }) {
    return (
    props.laptop.map((laptop, index) => (
            <div>
      <h2>{laptop.brand}</h2>
      <p>{laptop.model}</p>
      <p>Price: {laptop.price} USD</p>
      <p>(
        {laptop.inStock ? "In Stock ✅" : "Out of Stock ❌"}
      )</p>
      <div className="row">
        <button onClick={() => {
          const newLaptopok = props.laptop.filter(l => l !== laptop);
          props.setLaptopok(newLaptopok);
        }}>
          Delete
        </button>

      </div>
    </div> 

    ))
)}