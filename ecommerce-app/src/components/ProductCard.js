import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();

    return (
        <div className="card p-3 h-100">
            <img src={product.image} height="150" alt="" />
            <h6>{product.title}</h6>
            <p>${product.price}</p>
            <button
                className="btn btn-primary"
                onClick={() => dispatch(addToCart(product))}
            >
                Add to Cart
            </button>
        </div>
    );
}