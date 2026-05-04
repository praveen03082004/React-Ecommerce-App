import { useSelector } from "react-redux";

export default function Checkout() {
  const cart = useSelector(state => state.cart);
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container mt-3">
      <h2>Checkout</h2>

      <div className="row">
        {/* Address */}
        <div className="col-md-6">
          <h5>Shipping Address</h5>
          <input className="form-control mb-2" placeholder="Full Name" />
          <input className="form-control mb-2" placeholder="Address" />
          <input className="form-control mb-2" placeholder="City" />
          <input className="form-control mb-2" placeholder="Pincode" />
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <h5>Order Summary</h5>

          {cart.map(item => (
            <div key={item.id}>
              {item.title} x {item.qty}
            </div>
          ))}

          <h4 className="mt-3">Total: ${total}</h4>

          <button className="btn btn-primary mt-2">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}