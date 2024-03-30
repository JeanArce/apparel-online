import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const { id, title, image, price } = product;

    //const { addItemToCart } = useContext(CartContext);
    //const addProductToCart = () => addItemToCart(product);

    const viewDetails = (id) => {
        navigate(`/shop/${id}`);
    };

    return (
        <div className="product-card-container">
            <img src={image.url} alt={`${title}`} />

            <div className="footer">
                <div className="name">{title}</div>
                <div className="price">{price}</div>
            </div>

            <Button
                onClick={() => viewDetails(id)}
                type="button"
                buttonType={BUTTON_TYPE_CLASSES.inverted}
            >
                View Details
            </Button>
            
        </div>
    );


};

export default ProductCard;
