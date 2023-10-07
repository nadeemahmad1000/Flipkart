import sellerIcon from "../assets/seller.svg";
import advertiseIcon from "../assets/advertise.svg";
import giftCardsIcon from "../assets/gift_cards.svg";
import helpCenterIcon from "../assets/help_center.svg";
import paymentMethods from "../assets/payment_methods.svg";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="flipkart-footer">
            <nav className="upper-footer-nav-links">
                <div className="nav-link-column">
                    <h5> ABOUT </h5>
                    <a href="https://www.flipkart.com/helpcentre?otracker=undefined_footer_navlinks" target="_blank" rel="noopener noreferrer">
                        Contact Us
                    </a>
                    <a href="https://corporate.flipkart.net/corporate-home" target="_blank" rel="noopener noreferrer">
                        About Us
                    </a>
                    <a href="https://www.flipkartcareers.com/?otracker=undefined_footer_navlinks#!/" target="_blank" rel="noopener noreferrer">
                        Careers
                    </a>
                    <a href="https://stories.flipkart.com/?otracker=undefined_footer_navlinks" target="_blank" rel="noopener noreferrer">
                        Flipkart Stories
                    </a>
                    <a href="https://stories.flipkart.com/category/top-stories/news/" target="_blank" rel="noopener noreferrer">
                        Press
                    </a>
                    <a href="https://www.flipkartwholesale.com/?otracker=undefined_footer_navlinks" target="_blank" rel="noopener noreferrer">
                        Flipkart Wholesale
                    </a>
                    <a href="https://www.cleartrip.com/" target="_blank" title="Cleartrip: #1 Site for Booking Flights Tickets, Buses & Hotels Online" rel="noopener noreferrer">
                        Cleartrip
                    </a>
                    <a href="https://www.flipkart.com/corporate-information" target="_blank" rel="noopener noreferrer">
                        Corporate Information
                    </a>
                </div>
                <div className="nav-link-column">
                    <h5> HELP </h5>
                    <a href="https://www.flipkart.com/pages/payments" target="_blank" rel="noopener noreferrer">
                        Payments
                    </a>
                    <a href="https://www.flipkart.com/pages/shipping" target="_blank" rel="noopener noreferrer">
                        Shipping
                    </a>
                    <a href="https://www.flipkart.com/helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG" target="_blank" rel="noopener noreferrer">
                        Cancellation & Returns
                    </a>
                    <a href="https://www.flipkart.com/helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG" target="_blank" rel="noopener noreferrer">
                        FAQ
                    </a>
                    <a href="https://seller.flipkart.com" target="_blank" rel="noopener noreferrer">
                        Report Infringement
                    </a>
                </div>
                <div className="nav-link-column">
                    <h5> CONSUMER POLICY </h5>
                    <a href="https://www.flipkart.com/pages/returnpolicy?otracker=undefined_footer_navlinks" target="_blank" rel="noopener noreferrer">
                        Cancellation & Returns
                    </a>
                    <a href="https://www.flipkart.com/pages/terms?otracker=undefined_footer_navlinks" target="_blank" rel="noopener noreferrer">
                        Terms of Use
                    </a>
                    <a href="https://www.flipkart.com/pages/paymentsecurity?otracker=undefined_footer_navlinks" target="_blank" rel="noopener noreferrer">
                        Security
                    </a>
                    <a href="https://www.flipkart.com/pages/privacypolicy?otracker=undefined_footer_navlinks" target="_blank" rel="noopener noreferrer">
                        Privacy
                    </a>
                    <a href="https://www.flipkart.com/sitemap?otracker=undefined_footer_navlinks" target="_blank" rel="noopener noreferrer">
                        Sitemap
                    </a>
                    <a href="https://www.flipkart.com/pages/grievance-redressal-mechanism?otracker=undefined_footer_navlinks" target="_blank" rel="noopener noreferrer">
                        Grievance Redressal
                    </a>
                    <a href="https://www.flipkart.com/pages/ewaste-compliance-tnc?otracker=undefined_footer_navlinks" target="_blank" rel="noopener noreferrer">
                        EPR Compliance
                    </a>
                </div>
                <div className="nav-link-column">
                    <h5> SOCIAL </h5>
                    <a href="https://www.facebook.com/flipkart" target="_blank" rel="noopener noreferrer">
                        Facebook
                    </a>
                    <a href="https://www.twitter.com/flipkart" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <a href="https://www.youtube.com/flipkart" target="_blank" rel="noopener noreferrer">
                        YouTube
                    </a>
                </div>
                <div className="nav-link-column">
                    <h5> Mail Us: </h5>
                    <p> Flipkart Internet Private Limited, </p>
                    <p> Buildings Alyssa, Begonia & </p>
                    <p> Clove Embassy Tech Village, </p>
                    <p> Outer Ring Road, </p>
                    <p> Devarabeesanahalli Village, </p>
                    <p> Bengaluru, 560103, </p>
                    <p> Karnataka, India</p>
                </div>
                <div className="nav-link-column">
                    <h5> Registered Office Address: </h5>
                    <p>Flipkart Internet Private Limited, </p>
                    <p> Buildings Alyssa, Begonia & </p>
                    <p> Clove Embassy Tech Village, </p>
                    <p> Outer Ring Road, </p>
                    <p> Devarabeesanahalli Village, </p>
                    <p> Bengaluru, 560103, </p>
                    <p> Karnataka, India </p>
                    <p> CIN : U51109KA2012PTC066107 </p>
                    <p> Telephone:
                        <a href="tel:044-45614700"> 044-45614700 </a>
                    </p>
                </div>
            </nav>

            <nav className="lower-footer-nav-links">
                <div>
                    <div>
                        <img src={sellerIcon} title="Become a seller" />
                        <a href="https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect">
                            Become a Seller
                        </a>
                    </div>
                    <div>
                        <img src={advertiseIcon} title="Advertise" />
                        <a href="https://brands.flipkart.com">
                            Advertise
                        </a>
                    </div>
                    <div>
                        <img src={giftCardsIcon} title="Gift Cards" />
                        <a href="https://www.flipkart.com/the-gift-card-store?otracker=undefined_footer_footer_navlinks">
                            Gift Cards
                        </a>
                    </div>
                    <div>
                        <img src={helpCenterIcon} title="Help Center" />
                        <a href="https://www.flipkart.com/helpcentre?otracker=undefined_footer_footer_navlinks">
                            Help Center
                        </a>
                    </div>
                </div>
                <div>
                    <span>
                        &copy; 2007 - {new Date().getFullYear()} Flipkart.com
                    </span>
                </div>
                <div>
                    <img src={paymentMethods} alt="payment methods" title="accepted payment methods" />
                </div>
            </nav>
        </footer>
    );
};

export default Footer;