import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css";
import "./home.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { homeCorsoule } from "../../utils/constant";
import HomeCrosel from "../../components/crousel/HomeCrosel";

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
              <HomeCrosel item={item}/>
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
