import type { Laptop } from "../types/Laptop";

export function ModeratorLaptop(props:
    {
        laptop: Laptop[]
        setLaptopok: (laptopok: Laptop[]) => void
    }
) {
    return (
        <>
            {props.laptop.map((laptop, index) => (
                <article key={index} className="col-sm-4">
                    <h2>{laptop.brand}</h2>
                    <h2>{laptop.model}</h2>
                    <h2>{laptop.price}USD</h2>

                    <p>
                        {laptop.inStock ? "Készleten ✅" : "Nincs készleten ❌"}
                    </p>

                    <button onClick={() => {
                        const newLaptopok = props.laptop.map((l, i) =>
                            i === index ? { ...l, inStock: !l.inStock } : l
                        );

                        props.setLaptopok(newLaptopok);
                    }}>
                        Készlet módosítása
                    </button>

                </article>

            ))}
        </>
    )
}