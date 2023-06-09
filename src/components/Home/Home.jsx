import React from "react";
import Container from "../Container";
import { useNavigate } from "react-router-dom";
import readMoreIcon from "./../../assets/icons/readMoreIcon.png";
import greetings from "./../../assets/icons/greetings.png";
import man from "./../../assets/imgs/home_man.jpg";
import manCalculator from "./../../assets/imgs/home_calculator.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    // Header
    <Container>
      <div className=" font-maven relative  ">
        <div className=" top-0 relative brightness-50 -z-10 bg-backgroundHome lg:h-headerHeight md:h-[600px] sm:h-[400px] h-80  bg-no-repeat min-w-full bg-center bg-cover font-maven "></div>
        <div className="absolute z-9 flex flex-col items-left xl:right-1/3 md:px-28 sm:px-20 px-10 left-0 top-[30%]">
          <h1 className="lg:text-46px] md:text-[35px] sm:text-2xl text-xl  xl:text-6xl text-white font-medium">
            Accounting services <br /> for your company
          </h1>
          <p className="lg:text-[19px] sm:text-xs md:text-sm text-[8px] font-normal text-subTitle lg:leading-8 md:leading-5 leading-3 lg:mt-10 md:mt-6 mt-3 max-w-[556px] left-0">
            Lorem ipsum dolor sit amet enim. Etiam ullamcorper. <br />{" "}
            Suspendisse pellentesque dui non fells.
          </p>
          <div>
            <button
              onClick={() => navigate("/services")}
              className="bg-buttonColor hover:bg-blue-900 text-white lg:text-xs sm:text-[9px] text-[5px] lg:mt-8 md:mt-5 mt-3  font-medium md:py-3 md:px-5 py-2 px-3 lg:py-6  lg:px-10  md:leading-3 md:tracking-[2px] tracking-wide"
            >
              SEE OUR OFFER <span>&#10132;</span>
            </button>
          </div>
        </div>
        <div className="xl:w-[340px] lg:w-[263px] md:w-[200px] sm:w-[184px] phone:w-36  w-24 xl:h-[170px] lg:h-36 md:h-28 sm:h-24  phone:h-[70px] h-12 xl:pt-8 lg:pt-5 sm:pt-4 phone:pt-2 bottom-0 right-0 absolute bg-buttonColor flex flex-col">
          <img
            className=" lg:ml-10 xl:ml-16 phone:ml-8 ml-4 xl:w-9 lg:w-8 md:w-6 sm:w-5 phone:w-4 w-3 md:my-3 my-2 cursor-auto"
            src={readMoreIcon}
            alt=""
          />
          <button
            onClick={() => navigate("/about")}
            className=" bg-transparent text-white  xl:text-xs md:text-[9px] phone:text-[7px] text-[5px] font-medium xl:pt-5 lg:pt-3
          xl:pr-32 lg:pr-28 sm:pr-16 phone:pr-8 pr-5 leading-3 tracking-[2px] "
          >
            READ MORE
          </button>
        </div>
      </div>
      {/* section */}
      <section className="pt-16 px-[60px] pb-[120px] flex font-maven ">
        <div className=" h-full max-w-[280px]">
          <img src={man} alt="" />
          <button
            onClick={() => navigate("/about")}
            className="bg-buttonColor hover:bg-blue-900 text-white lg:text-xs sm:text-[9px] text-[5px]  font-medium md:py-3 md:px-5 py-2 px-3 lg:py-10  lg:px-[30px] w-full  md:leading-3 md:tracking-[2px] tracking-wide"
          >
            GET TO KNOW <span>&#10132;</span>
          </button>
        </div>
        <div className=" pt-24 max-w-[280px]">
          <img src={manCalculator} alt="" />
        </div>
        <div className="pl-11">
          <div className="w-full flex justify-end items-end text-end pt-10">
            <img src={greetings} alt="" />
          </div>
          <div className="flex gap-6  pt-8 items-center">
            <p className="text-buttonColor text-[17px] mb-4 font-medium ">
              Quis nostrud exercitation ullamco
            </p>
            <div className=" bg-gray-200 h-[2px] w-[70px]"></div>
          </div>
          <h1 className="text-[40px] font-bold mb-4 ">
            Mauris rhoncus orci in imperdiet placerat suscipit ligula urna
          </h1>
         <div className="text-secTitle text-sm font-normal leading-6 max-w-[515px]">
         <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cu
          </p>
         </div>
          <button
            onClick={() => navigate("/services")}
            className="text-black mr-auto lg:text-xs sm:text-[9px] text-[5px] lg:mt-8 md:mt-5 mt-3 text-end w-full font-medium  md:px-5 px-3  lg:px-10  md:leading-3 md:tracking-[2px] tracking-wide"
          >
            SEE MORE OFFER <span>&#10132;</span>
          </button>
        </div>
      </section>
    </Container>
  );
};

export default Home;
