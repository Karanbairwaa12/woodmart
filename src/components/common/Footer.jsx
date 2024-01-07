import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-[100px] bg-[#000] text-white">
      <div className="px-[15px] mx-[15.5px] flex">
        <div className="h-[100px] w-[366px] flex justify-start items-center">
          <div className="flex h-[100px] items-center justify-center">
            <img
              src="https://woodmartcdn-cec2.kxcdn.com/accessories/wp-content/uploads/sites/7/2022/04/wood-logo-white-reserve.svg"
              className="h-[24px]"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1 justify-start items-center h-[100px]">
          <div className="w-[584px] flex h-[100px] px-[10px] items-center">
            <div className="flex-1">
              <ul className="nav-links flex justify-between">
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/products">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/cart">Shipping</Link>
                </li>
                <li>
                  <Link to="/cart">Track Order</Link>
                </li>
                <li>
                  <Link to="/cart">Faq's</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
