
import { useState } from "react";
import type { Laptop } from "../types/Laptop";

export function AdminLaptop(props: {
    laptop: Laptop[],
    setLaptopok: (laptopok: Laptop[]) => void
}) {

    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState(0);
    const [inStock, setInStock] = useState(true);
    const [editIndex, setEditIndex] = useState<number | null>(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newLaptop: Laptop = {
            brand: brand,
            model: model,
            price: price,
            inStock: inStock
        };

        if (editIndex === null) {
            props.setLaptopok([...props.laptop, newLaptop]);
        } else {
            const updatedLaptopok = props.laptop.map((laptop, index) =>
                index === editIndex ? newLaptop : laptop
            );

            props.setLaptopok(updatedLaptopok);
            setEditIndex(null);
        }

        setBrand("");
        setModel("");
        setPrice(0);
        setInStock(true);
    }

    function handleEdit(index: number) {
        const laptop = props.laptop[index];

        setBrand(laptop.brand);
        setModel(laptop.model);
        setPrice(laptop.price);
        setInStock(laptop.inStock);
        setEditIndex(index);
    }

    return (
        <>
            <section className="col-12 mb-4">
                <h2>{editIndex === null ? "Új laptop hozzáadása" : "Laptop szerkesztése"}</h2>

                <form onSubmit={handleSubmit}>

                    <label>Márka:</label>
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                    />

                    <label>Modell:</label>
                    <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        required
                    />

                    <label>Ár (USD):</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        min="0"
                        required
                    />

                    <label>
                        <input
                            type="checkbox"
                            checked={inStock}
                            onChange={(e) => setInStock(e.target.checked)}
                        />
                        Készleten
                    </label>

                    <button type="submit">
                        {editIndex === null ? "Hozzáadás" : "Mentés"}
                    </button>

                    {editIndex !== null && (
                        <button type="button" onClick={() => {
                            setEditIndex(null);
                            setBrand("");
                            setModel("");
                            setPrice(0);
                            setInStock(true);
                        }}>
                            Mégse
                        </button>
                    )}

                </form>
            </section>

            <section className="row">
                <h2 className="col-12">Laptopok kezelése</h2>

                {props.laptop.map((laptop, index) => (
                    <article key={index} className="col-sm-4 mb-4">
                        <div className="card p-3 h-100">
                            <h3>{laptop.brand}</h3>
                            <p>{laptop.model}</p>
                            <p>Ár: {laptop.price} USD</p>
                            <p>
                                {laptop.inStock ? "Készleten ✅" : "Nincs készleten ❌"}
                            </p>

                            <button type="button" onClick={() => handleEdit(index)}>
                                Szerkesztés
                            </button>

                            <button type="button" onClick={() => {
                                const newLaptopok = props.laptop.filter((l, i) => i !== index);
                                props.setLaptopok(newLaptopok);
                            }}>
                                Törlés
                            </button>
                        </div>
                    </article>
                ))}
            </section>
        </>
    );
}
