import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css";
import "./home.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { homeCorsoule } from "../../utils/constant";

const Home = () => {
  const sliderRef = useRef(null);

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 90) {
        console.log("I want to do my som...");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="">
      <div className="h-[110vh] overflow-hidden">
        <Slider {...settings} ref={sliderRef}>
          {homeCorsoule.map((item) => {
            return (
              <div className="crousel-images flex relative">
                <div className="absolute w-[100%] h-[100vh] pl-[45px] flex justify-start items-center">
                  <div className="w-[40%]">
                    <h6 className="font-bold text-[72px] mb-[20px] leading-[082px]">
                      {item.heading}
                    </h6>
                    <p className="mr-[100px] mb-[25px]">{item.about}</p>
                    <div className="w-[200px] flex items-center justify-between">
                      <button className="py-3 px-5 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/50 focus:outline-none">
                        To shop
                      </button>
                      <button className="py-3 px-5 bg-[#ffffffe8] text-[#5e5e5e] text-sm font-semibold rounded-md shadow-lg shadow- focus:outline-none">
                        To shop
                      </button>
                    </div>
                  </div>
                </div>

                <div className="z-10">
                  <img src={item.img} className="" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      <button onClick={goToPrevSlide} className="arrayBttnleft">
        <MdKeyboardArrowLeft className="arrow" />
      </button>
      <button onClick={goToNextSlide} className="arrayBttnright">
        <MdKeyboardArrowRight className="arrow" />
      </button>
    </div>
  );
};

export default Home;
