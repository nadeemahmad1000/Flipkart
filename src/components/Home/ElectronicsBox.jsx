import printers from "../../assets/printers.webp";
import mouseAndKeyboards from "../../assets/mouse_and_keyboards.webp";
import monitors from "../../assets/monitors.webp";
import pendrives from "../../assets/pendrives.webp";
import trimmers from "../../assets/trimmers.webp";
import speakers from "../../assets/speakers.webp";
import cameras from "../../assets/cameras.webp";
import PropTypes from "prop-types";
import "./ElectronicsBox.css";

const ElectronicsBox = () => {
    return (
        <div className="electronics-box">
            <div>
                <h3> Best of Electronics </h3>
                <button type="button">
                    view all
                    <svg width="13" height="13" fill="none" viewBox="0 0 16 16">
                        <path d="m6.627 3.749 5 5-5 5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>
            </div>

            <div className="electronics-item-box">
                <ElectronicsItem source={monitors} productName="Monitors" startingPrice="14,999" />
                <ElectronicsItem source={mouseAndKeyboards} productName="Mouse and Keyboards" startingPrice="169" />
                <ElectronicsItem source={printers} productName="Printers" startingPrice="4,999" />
                <ElectronicsItem source={trimmers} productName="Trimmers" startingPrice="399" />
                <ElectronicsItem source={speakers} productName="Speakers" startingPrice="999" />
                <ElectronicsItem source={pendrives} productName="Pendrives" startingPrice="299" />
                <ElectronicsItem source={cameras} productName="Cameras" startingPrice="1,499" />
            </div>
        </div>
    );
};

const ElectronicsItem = (props) => {
    return (
        <div className="electronics-item">
            <img src={props.source} alt="image" loading="lazy" />
            <h5 className="product-name"> {props.productName} </h5>
            <h5 className="starting-price">
                From &#8377;{props.startingPrice}
            </h5>
        </div>
    );
};

ElectronicsItem.propTypes = {
    source: PropTypes.string,
    productName: PropTypes.string,
    startingPrice: PropTypes.string
};

export default ElectronicsBox;