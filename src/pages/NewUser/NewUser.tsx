import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./NewUser.scss";

export const NewUser = () => {
  const navigate = useNavigate();
  const onSignUp = () => {
    navigate("/", {
      state: {
        isLogin: true,
      },
    });
  };
  return (
    <div className="register">
      <div className="formContainer">
        <form>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Mobile Number" />
          <input name="email" type="text" placeholder="Email Id" />
          <input name="password" type="password" placeholder="Password" />
          <button onClick={onSignUp}>Sign Up</button>
          <Link to="/login">Do you have an account?</Link>
        </form>
      </div>
    </div>
  );
};
