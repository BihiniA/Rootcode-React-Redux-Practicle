import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ id, name, price, size, tag, image, type }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
      <p className="info__id">{id}</p>
        <p className="info__name">{name}</p>
        <p className="info__price">${price}</p>
        <p className="info__size">{size}</p>
        <p className="info__tag">{tag}</p>
        <p className="info__imageUrl">{imageUrl}</p>
        <p className="info__description">{type.substring(0, 100)}...</p>

        

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
