import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css";
import "./home.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { homeCorsoule, newArrivalsProduct, noOfProducts } from "../../utils/constant";
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
    <div className="w-full">
      {/* first */}
      <div className="mb-[80px]">
        <div className="h-[110vh] overflow-hidden">
          <Slider {...settings} ref={sliderRef}>
            {homeCorsoule.map((item) => {
              return <HomeCrosel item={item} />;
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

      {/* second */}
      <div className="mb-[80px]">
        <div className="p-[15px] mx-[15.5px] flex justify-around">
          {noOfProducts.map((item) => {
            return (
              <div className="group w-[250px] itemxs flex flex-col justify-center text-center mx-[5px]">
                <div className="itemxsImg w-[140px] mx-[auto] rounded-full overflow-hidden mb-[10px]">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full group-hover:scale-[115%] transition-transform"
                  />
                </div>
                <div>
                  <h2 className="text-[20px]">{item.name}</h2>
                </div>
                <div>
                  <p className="text-[14px] text-[gray]">
                    {item.noOfProduct} Product
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* third */}
      <div className="w-full">
        <div className="p-[15px] mx-[15.5px]">
          <div className="flex flex-col text-center mb-[10px]">
            <div>
              <p className="mb-[10px] text-[16px] text-[blue]">
                Hurry Up to Buy
              </p>
            </div>
            <div>
              <h1 className="mb-[10px] text-[38px] font-[500]">New Arrivals</h1>
            </div>
            <div>
              <p className="mb-[10px] text-[16px] text-[gray]">
                How can you evaluate content without design
              </p>
            </div>
            <div className="flex justify-center mt-[20px]">
              <div className="mr-[30px] ml-[5px]">
                <h2 className="caseListing">CASES</h2>
              </div>
              <div className="mr-[30px] ml-[5px]">
                <h2 className="caseListing">STRAPS</h2>
              </div>
              <div className="mr-[30px] ml-[5px]  ">
                <h2 className="caseListing">MAGSAFE</h2>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="px-[15px]">
              <div className="grid grid-rows-2 grid-cols-5 gap-[30px]">
                {newArrivalsProduct.map((item) => {
                  return (
                    <div className="flex flex-col text-center">
                      <div className="overflow-hidden rounded-[30px] object-cover border mb-[10px]">
                        <img src={item.img} />
                      </div>
                      <div>
                        <h3 className="text-[12px] font-[500] mb-[10px]">
                          {item.productName}
                        </h3>
                      </div>
                      <div>
                        <p className="text-[12px] text-[gray] mb-[10px]">
                          {item.productDetail}
                        </p>
                      </div>
                      <div className="text-[blue]  mb-[10px]">
                        <p>${item.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
