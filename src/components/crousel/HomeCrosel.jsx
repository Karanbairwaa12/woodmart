import React from "react";

const HomeCrosel = ({item}) => {
  return (
    <div className="crousel-images flex relative">
      <div className="absolute w-[100%] h-[100vh] pl-[45px] flex justify-start items-center">
        <div className="w-[40%]">
          <h6 className="font-bold text-[72px] mb-[20px] leading-[082px]">
            {item.heading}
          </h6>
          <p className="mr-[100px] mb-[25px]">{item.about}</p>
          <div className="w-[220px] flex items-center justify-between">
            <button className="py-3 px-5 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/50 focus:outline-none">
              To shop
            </button>
            <button className="py-3 px-5 bg-[#ffffffe8] text-[#5e5e5e] text-sm font-semibold rounded-md shadow-lg shadow- focus:outline-none">
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <img src={item.img} className="" />
      </div>
    </div>
  );
};

export default HomeCrosel;
