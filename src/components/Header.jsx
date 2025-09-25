import { LOGO_URL } from "./utils/constants";

const Header = () => {
    return(

        <div className="header">

            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>Contact Us</li>
                    <li>Offers</li>
                    <li>Account</li>
                </ul>
            </div>
        </div>

    );
}

export default Header;