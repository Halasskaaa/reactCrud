import type { Laptop } from "../types/Laptop";

export function ListingLaptop(props: { laptop: Laptop }) {
  return (
    <div>
      <h2>{props.laptop.brand}</h2>
      <p>{props.laptop.model}</p>
      <p>Price: {props.laptop.price} USD</p>
      <p>(
        {props.laptop.inStock ? "In Stock ✅" : "Out of Stock ❌"}
      )</p>
    </div>
  );
}
