import displayImage1 from "../assets/bbd_sale.webp";
import ProductsBox from "./Home/ProductsBox";
import ElectronicsBox from "./Home/ElectronicsBox";
import "./Home.css";

const Home = () => {
    return (
        <main className="flipkart-home">
            <ProductsBox />

            <div className="display">
                <img src={displayImage1} loading="auto" alt="Image" />
            </div>

            <ElectronicsBox />
        </main>
    );
};

export default Home;