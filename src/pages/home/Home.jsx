import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slick.css";
import "./home.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { LuThumbsUp } from "react-icons/lu";
import { PiKeyReturnBold } from "react-icons/pi";
import {
  TypeOfItems,
  homeCorsoule,
  newArrivalsProduct,
  noOfProducts,
} from "../../utils/constant";
import HomeCrosel from "../../components/crousel/HomeCrosel";

const Home = () => {
  const sliderRef = useRef(null);
  const [imageScale, setImageScale] = useState({});

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

  useEffect(() => {
    // Function to trigger the scaling transition after a delay
    const triggerScalingTransition = () => {
      // Update the state to trigger the transition
      setImageScale((prevScale) => ({ ...prevScale, transition: true }));
    };

    // Trigger the scaling transition after a delay (adjust the delay as needed)
    const delay = 100; // milliseconds
    const timeoutId = setTimeout(triggerScalingTransition, delay);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="w-full mb-[10px]">
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
          <div className="w-full mb-[80px]">
            <div className="px-[15px]">
              <div className="grid grid-rows-2 grid-cols-5 gap-[30px]">
                {newArrivalsProduct.map((item) => {
                  return (
                    <div className="flex flex-col text-center">
                      <div className="overflow-hidden rounded-[30px] object-cover border mb-[10px]">
                        <img src={item.img} alt="" />
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
      <div className="mb-[80px]">
        <div className="px-[15px] mx-[15px]">
          <div className="flex flex-col text-center mb-[30px]">
            <div>
              <p className="mb-[10px] text-[16px] text-[blue]">
                There are some redeeming factors
              </p>
            </div>
            <div>
              <h1 className="mb-[10px] text-[32px] font-[400] tracking-[1px]">
                We Provide High Quality Goods
              </h1>
            </div>
            <div>
              <p className="mb-[10px] text-[14px] text-[gray] tracking-[.4px]">
                A client that's unhappy for a reason is a problem, a client
                that's unhappy though he or her can't
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 text-center justify-center mx-[10px]">
              <div className="flex justify-center">
                <TbTruckDelivery className="mb-[10px] text-[44px] text-[blue]" />
              </div>
              <div>
                <h1 className="mb-[10px] text-[24px] font-[400] tracking-[1px]">
                  Fast Delivery
                </h1>
              </div>
              <div>
                <p className="mb-[10px] text-[14px] text-[gray] tracking-[.4px]">
                  Chances are there wasn’t collaboration and checkpoints, there
                  wasn’t a process.
                </p>
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="flex justify-center">
                <LuThumbsUp className="mb-[10px] text-[44px] text-[blue]" />
              </div>
              <div>
                <h1 className="mb-[10px] text-[24px] font-[400] tracking-[1px]">
                  Best Quality
                </h1>
              </div>
              <div>
                <p className="mb-[10px] text-[14px] text-[gray] tracking-[.4px]">
                  It’s content strategy gone awry right from the start.
                  Forswearing the use of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="flex-1 text-center">
              <div className="flex justify-center">
                <PiKeyReturnBold className="mb-[10px] text-[44px] text-[blue]" />
              </div>
              <div>
                <h1 className="mb-[10px] text-[24px] font-[400] tracking-[1px]">
                  Free Return
                </h1>
              </div>
              <div>
                <p className="mb-[10px] text-[14px] text-[gray] tracking-[.4px]">
                  True enough, but that’s not all that it takes to get things
                  back on track out there for a text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[80px]">
        <div className="px-[15px] mx-[15px]">
          <div className="grid grid-cols-5 gap-4">
            {TypeOfItems.map((item, i) => {
              return (
                <div className={`${item.grid} rounded-[20px] relative`}>
                  <div className="w-full h-full object-cover overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full"
                      style={{
                        // Apply the scaling factor based on the state
                        transform: `scale(${imageScale.transition ? 1 : 1.15})`,
                        transition: "transform 0.5s ease", // Adjust the transition duration as needed
                      }}
                      onLoad={() =>
                        setImageScale((prevScale) => ({
                          ...prevScale,
                          [i]: true,
                        }))
                      }
                    />
                  </div>
                  <div className="absolute w-full h-full top-[0px] left-[0px] z-10 p-[30px]">
                    <div className="w-[70%]">
                      <p className="mr-[100px] mb-[10px]">{item.heading}</p>
                      <h6 className="font-[400] text-[34px] mb-[10px]">
                        {item.itemType}
                      </h6>

                      <div className="w-[200px] flex items-center justify-between">
                        {item.button !== "TO SHOP" ? (
                          <button className="w-[130px] h-[45px] bg-[#fff] text-[#141414] text-sm font-[600] rounded-md shadow-[0_0px_2px_0px_rgba(0,0,0,0.2)] focus:outline-none">
                            {item.button}
                          </button>
                        ) : (
                          <button className="py-3 px-5 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-indigo-500/50 focus:outline-none">
                            {item.button}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="">
        <div className="px-[15px] mx-[15px]">
          <div className="flex flex-col text-center mb-[30px]">
            <div>
              <p className="mb-[10px] text-[16px] text-[blue]">
                Our new article best news
              </p>
            </div>
            <div>
              <h1 className="mb-[10px] text-[38px] font-[500]">
                Interesting About Gadgets
              </h1>
            </div>
            <div>
              <p className="mb-[10px] text-[16px] text-[gray]">
                Whenever draft copy comes up in a meeting confused questions
                about
              </p>
            </div>
          </div>
          <div className="grid grid-rows-1 grid-cols-4 gap-[30px]">
            {newArrivalsProduct.map(
              (item, i) =>
                i < 4 && (
                  <div className="flex flex-col text-center" key={i}>
                    <div className="overflow-hidden rounded-[30px] object-cover border mb-[10px]">
                      <img src={item.img} alt="" />
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
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
