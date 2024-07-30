import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

export const Login = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    sessionStorage.setItem("isLogin", "true");
    navigate("/", {
      state: {
        isLogin: true,
      },
    });
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={onLogin}>
          <h1>Login</h1>
          <input
            name="username"
            type="email"
            required
            placeholder="Email/Mobile Number"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
