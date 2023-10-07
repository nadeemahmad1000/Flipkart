import flipkartLogo from "../assets/flipkart.png";
import flipkartPlusLogo from "../assets/flipkartPlus.png";
import searchIcon from "../assets/search.svg";
import cartIcon from "../assets/cart.svg";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo-box">
                    <img src={flipkartLogo} alt="flipkart" style={{ width: "4.5rem" }} title="flipkart" />

                    <a href="/plus" onClick={(event) => {
                        event.preventDefault()
                    }}>
                        Explore
                        <span> Plus </span>
                        <img src={flipkartPlusLogo} alt="flipkart plus" title="flipkart plus" className="flipkart-plus-logo" />
                    </a>
                </div>

                <form action="/search" className="search-box" method="GET">
                    <input type="text" name="search" className="search-input" title="Search for products, brands and more" placeholder="Search for products, brands and more" autoComplete="off" />
                    <button type="button" className="search-button">
                        <img src={searchIcon} alt="search" />
                    </button>
                </form>

                <div className="nav-box">
                    <button type="button" id="account">
                        My account
                        <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="caret-light">
                            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"></path>
                        </svg>
                    </button>

                    <button type="button">
                        Become a Seller
                    </button>

                    <button type="button" id="more">
                        More
                        <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="caret-light">
                            <path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"></path>
                        </svg>
                    </button>

                    <button type="button">
                        <img src={cartIcon} alt="cart" title="cart" className="cart-icon" />
                        Cart
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Header;