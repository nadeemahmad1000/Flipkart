import Grocery from "../../assets/grocery.webp";
import Mobiles from "../../assets/mobiles.webp";
import Fashion from "../../assets/fashion.webp";
import Electronics from "../../assets/electronics.webp";
import Furniture from "../../assets/furniture.webp";
import Appliances from "../../assets/appliances.webp";
import Travel from "../../assets/travel.webp";
import BeautyNToys from "../../assets/beauty_toys.webp";
import TwoWheelers from "../../assets/two_wheelers.webp";
import PropTypes from "prop-types";

const ProductsBox = () => {
    return (
        <nav className="products-box">
            <Product source={Grocery} productName="Grocery" />
            <Product source={Mobiles} productName="Mobiles" />
            <Product source={Fashion} productName="Fashion" />
            <Product source={Electronics} productName="Electronics" />
            <Product source={Furniture} productName="Furniture" />
            <Product source={Appliances} productName="Appliances" />
            <Product source={Travel} productName="Travel" />
            <Product source={BeautyNToys} productName="Beauty & Toys" />
            <Product source={TwoWheelers} productName="Two Wheelers" />
        </nav>
    );
};

const Product = (props) => {
    return (
        <div className="product">
            <div>
                <img src={props.source} alt={props.productName} />
            </div>
            <span> {props.productName} </span>
        </div>
    );
};

Product.propTypes = {
    source: PropTypes.string,
    productName: PropTypes.string
};

export default ProductsBox;