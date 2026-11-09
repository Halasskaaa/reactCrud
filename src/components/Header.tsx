type FejlecProps = {
    setMenu: (menu: string) => void;
}


export default function Fejlec(props: FejlecProps) {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 kartya mb-3">
                    <div className="mt-2 mb-1 p-5 bg-success text-white rounded">
                        <h1 id="focim">Laptop Webshop</h1>

                        <p className="mb-0">Téma: Laptopok nyilvántartása</p>
                    </div>
                </div>
            </div>

            <nav className="d-flex justify-content-center gap-2 my-4">
                <button onClick={() => props.setMenu("index")}>Kezdőlap</button>
                <button onClick={() => props.setMenu("admin")}>Admin</button>
                <button onClick={() => props.setMenu("moderator")}>Moderátor</button>
            </nav>
        </>
    );
}