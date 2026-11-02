type IndexLaptopProps = {
  laptopBrand: string;
  laptopModel: string;
  laptopPrice: number;
  laptopInStock: boolean;
};

export function IndexLaptop(props: IndexLaptopProps) {
  return <>
    <h2>{props.laptopBrand}</h2>
    <p>{props.laptopModel}</p>
    <p>Price: {props.laptopPrice} USD</p>
    <p>(
        {props.laptopInStock ? "In Stock ✅" : "Out of Stock ❌"}
        )</p>
  </>
}