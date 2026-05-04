import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container mt-3">
      <h2>Cart</h2>

      {cart.map(item => (
        <div key={item.id} className="card p-2 mb-2">
          <h6>{item.title}</h6>
          <p>Qty: {item.qty}</p>

          <button
            className="btn btn-danger me-2"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      ))}

      <h4>Total: ${total}</h4>

      {/* 🔥 IMPORTANT BUTTON */}
      <button
        className="btn btn-success mt-2"
        onClick={() => navigate("/checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}