import React from "react";
import { Link} from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaRandom } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="h-[90px] nav-bar">
      <div className="px-[15px] mx-[15.5px] flex">
        <div className="h-[90px] w-[230px] flex justify-start items-center">
          <div className="flex h-[90px] items-center justify-center">
            <img
              src="https://woodmartcdn-cec2.kxcdn.com/accessories/wp-content/themes/woodmart/images/wood-logo-dark.svg"
              className="h-[24px]"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 justify-start items-center h-[90px]">
          <div className="w-[584px] flex h-[90px] px-[10px] items-center">
            <div className="flex-1">
              <ul className="nav-links flex justify-between">
                <li>
                  <Link to="/">Cases</Link>
                </li>
                <li>
                  <Link to="/products">Straps</Link>
                </li>
                <li>
                  <Link to="/cart">Power Bank</Link>
                </li>
                <li>
                  <Link to="/cart">Cables</Link>
                </li>
                <li>
                  <Link to="/cart">MagSafe</Link>
                </li>
                <li>
                  <Link to="/cart">Charger</Link>
                </li>
                <li>
                  <Link to="/cart">More</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex h-[90px] items-center w-[350px]">
          <div className="login-items">
            <Link to="/login">Login/Register</Link>
          </div>
          <div className="login-items">
            <Link to="/login">
              <IoSearchSharp className="text-[22px]"/>
            </Link>
          </div>
          <div className="login-items">
            <Link to="/login">
              <FaRandom className="text-[22px]"/>
            </Link>
          </div>
          <div className="login-items">
            <Link to="/login">
              <FaRegHeart className="text-[22px]"/>
            </Link>
          </div>
          <div className="login-items">
            <Link to="/login">
              <MdOutlineShoppingCart className="text-[22px]"/>
            </Link>
          </div>
          <div className="login-items">
            <Link to="/login">$0.00</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
