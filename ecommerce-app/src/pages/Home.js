import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";

export default function Home() {
    const dispatch = useDispatch();
    const { items, status } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === "loading") return <h2>Loading...</h2>;
    if (status === "error") return <h2>Error loading products</h2>;

    return (
        <div className="container mt-3">
            <div className="row">
                {items.map(p => (
                    <div className="col-md-3 mb-3" key={p.id}>
                        <ProductCard product={p} />
                    </div>
                ))}
            </div>
        </div>
    );
}