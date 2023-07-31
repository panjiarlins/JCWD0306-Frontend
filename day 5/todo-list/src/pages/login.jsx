import { ReactComponent as LoginShape } from "../assets/login.svg";
import { ReactComponent as Shape } from "../assets/brown-shape.svg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ users = [] }) => {
  const nav = useNavigate();
  const [user, setUser] = useState({
    password: "",
    email: "",
  });

  const InputHandler = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const login = () => {
    console.log(users);
    try {
      const check = users.find(
        (cek) => cek.email == user.email && cek.password == user.password
      );
      if (check.email) {
        alert(`welcome ${check.fullname}`);
        return nav(`/dashboard?email=${check.email}`);
      }
    } catch (err) {
      alert("email/password salah");
    }
  };
  return (
    <>
      <div className="bg" style={{ height: 0 }}>
        <Shape className="shape" fill="#FF9162" />
      </div>
      <div className="center">
        <div className="container">
          <div className="container2 col gap-15 center">
            <div>
              <div className="center full semibold header">Welcome Back!</div>
              <div className="center">Let’s help you meet your tasks</div>
            </div>

            <LoginShape />

            <input
              className="input"
              onChange={(e) => InputHandler("email", e.target.value)}
              placeholder="Enter your email"
              type="email"
            />
            <input
              className="input"
              placeholder="Conform passwords"
              type="password"
              onChange={(e) => InputHandler("password", e.target.value)}
            />
            <div className="center bold-orange semibold">Forget Password</div>

            <button onClick={login}>Login</button>

            <div className="center ">
              Don't have an account ? &nbsp;
              <a href="/register">
                <span className="bold-orange semibold"> Sign Up</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;