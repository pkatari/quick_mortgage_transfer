import { Link } from "react-router-dom";
import "./PropertyContainer.scss";

export const PropertyContainer = ({ item }: any) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.img} alt="This is Image of Property." />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <span>{item.address}</span>
        </p>
        <p className="price">£ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <span>{item.bedroom} BHK</span>
            </div>
            <div className="feature">
              <span>{item.area}</span>
            </div>
          </div>
        </div>
        <div>
          <button
            style={{
              padding: "0.5rem 1rem 0.5rem 1rem",
              color: "#fff",
              backgroundColor: "#5e10b1",
              fontSize: "18px",
            }}
          >
            Seller Contact
          </button>
          <button
            style={{
              marginLeft: "1rem",
              padding: "0.5rem 1rem 0.5rem 1rem",
              color: "#fff",
              backgroundColor: "#5e10b1",
              fontSize: "18px",
            }}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};
