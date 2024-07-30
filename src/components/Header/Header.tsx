import { useState } from "react";
import "./Header.scss";

export const Header = ({ isLogin }: any) => {
  const [isSignout, setIsSignout] = useState<boolean>(false);
  const user = (isLogin || sessionStorage.getItem("isLogin") === "true") && !isSignout;
  const onSignout = () => {
    setIsSignout(true);
  };
  return (
    <nav>
      <div role="banner" className="left">
        <span>ABC Property Search</span>
        <a href="/buy">Buy</a>
        <a href="/sell">Sell</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <span>Thomas Oliver</span>
            <button
              style={{
                marginLeft: "2rem",
                padding: "0.5rem",
                color: "blue",
              }}
              onClick={onSignout}
            >
              Sign out
            </button>
          </div>
        ) : (
          <>
            <a href="/login">Login</a>
            {/* <a href="/newuser">New User</a>*/}

          </>
        )}
      </div>
    </nav>
  );
};
