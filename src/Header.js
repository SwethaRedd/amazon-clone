import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import userEvent from "@testing-library/user-event";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log("basket length===>", basket);
  console.log("dispatch user value===>", user);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            {/* <div className="header__optionLineOne">Hello {user?.email} </div> */}
            <div className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}{" "}
            </div>
            <div className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign in"}
            </div>
          </div>
        </Link>
        <div className="header__option">
          <div className="header__optionLineOne">Returns</div>
          <div className="header__optionLineTwo">& Orders</div>
        </div>
        <div className="header__option">
          <div className="header__optionLineOne">Your</div>
          <div className="header__optionLineTwo">Prime</div>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
              {/*{basket? basket.length : ''}*/}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
