import PropTypes from "prop-types";
import "./Category.css";

const Category = () => {
    return (
        <section className="category-box">
            <div>
                <CategoryOption categoryName="Electronics" />

                <CategoryOption categoryName="TV & Appliances" />

                <CategoryOption categoryName="Men" />

                <CategoryOption categoryName="Women" />

                <CategoryOption categoryName="Baby & Kids" />

                <CategoryOption categoryName="Home & Furniture" />

                <CategoryOption categoryName="Sports, Books & More" />

                <span className="category-option"> Flights </span>

                <span className="category-option"> Offer Zone </span>
            </div>
        </section>
    );
}

const CategoryOption = (props) => {
    return (
        <span className="category-option">
            {props.categoryName}
            <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="caret-dark">
                <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"></path>
            </svg>
        </span>
    );
};

CategoryOption.propTypes = {
    categoryName: PropTypes.string
};

export default Category;