import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function Cart() {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

    return (
        <div className="container mt-3">
            <h2>Cart</h2>

            {cart.map(item => (
                <div key={item.id} className="card p-2 mb-2">
                    <h6>{item.title}</h6>
                    <p>Qty: {item.qty}</p>
                    <button
                        className="btn btn-danger"
                        onClick={() => dispatch(removeFromCart(item.id))}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <h4>Total: ${total}</h4>
        </div>
    );
}