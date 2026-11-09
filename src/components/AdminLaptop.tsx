import { useState } from "react";
import type { Laptop } from "../types/Laptop";

export function AdminLaptop(props: {
    laptop: Laptop[],
    setLaptopok: (laptopok: Laptop[]) => void
}) {

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");

    return (
        <>
            <form>
                <label>Brand:</label>
                <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />

                <label>Model:</label>
                <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                />
            </form>

            <div className="row">
                {props.laptop.map((laptop, index) => (
                    <div key={index} className="col-sm-4">
                        <h2>{laptop.brand}</h2>
                        <p>{laptop.model}</p>
                        <p>Price: {laptop.price} USD</p>
                        <p>
                            {laptop.inStock ? "In Stock ✅" : "Out of Stock ❌"}
                        </p>

                        <button onClick={() => {
                            const newLaptopok = props.laptop.filter(l => l !== laptop);
                            props.setLaptopok(newLaptopok);
                        }}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}