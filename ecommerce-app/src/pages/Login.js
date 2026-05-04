import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useState } from "react";

export default function Login() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleLogin = () => {
        dispatch(login({ name }));
    };

    return (
        <div className="container mt-3">
            <h2>Login</h2>
            <input
                className="form-control mb-2"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
}