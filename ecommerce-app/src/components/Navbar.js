import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function Navbar() {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-dark bg-dark p-3">
      <Link to="/" className="navbar-brand">Shop</Link>

      <div>
        <Link to="/cart" className="btn btn-warning me-2">
          Cart ({cart.length})
        </Link>

        {user ? (
          <>
            <span className="text-white me-2">{user.name}</span>
            <button onClick={() => dispatch(logout())} className="btn btn-danger">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-success">Login</Link>
        )}
      </div>
    </nav>
  );
}