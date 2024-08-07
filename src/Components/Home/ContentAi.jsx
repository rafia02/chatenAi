import React from "react";
import "../../App.css";
import { RiSquareRoot } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuBookDown } from "react-icons/lu";
import { PiSpinnerBold } from "react-icons/pi";
import { PiSquareLogoLight } from "react-icons/pi";
import { BsChevronBarRight } from "react-icons/bs";

const ContentAi = () => {
  return (
    <div className="mb-20">
      <div className="text-center">
        <h3 className="text-2xl md:text-5xl font-bold mb-7  ">
          Instant Content Generation with AI
        </h3>
        <p className="text-lg text-text font-semibold">
          Provide Descriptions, Get Instant AI-Generated Content
        </p>
      </div>

      <div className="grid mt-16 grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
        <div className="box duration-500  hover:scale-105 bg-primary rounded-2xl  p-5 text-center flex flex-col justify-center w-full items-center">
          <RiSquareRoot className="text-6xl font-bold text-indigo-500"></RiSquareRoot>
          <h2 className="text-2xl font-bold my-5 hover:text-indigo-500 duration-500">
            Effortless Content AI
          </h2>
          <p className="text-lg text-text leading-normal">
            Let our AI-powered service take the hard work out of content
            creation. Get started today with AI.
          </p>
        </div>
        <div className="box duration-500  hover:scale-105 bg-primary rounded-2xl  p-5 text-center flex flex-col justify-center w-full items-center">
          <FaArrowUpRightFromSquare className="text-6xl font-bold text-indigo-500"></FaArrowUpRightFromSquare>
          <h2 className="text-2xl font-bold my-5 hover:text-indigo-500 duration-500">
          Your Words, Our Tech
          </h2>
          <p className="text-lg text-text leading-normal">
          Discover how AI can transform your ideas into engaging with our qualitifull service for a better content.
          </p>
        </div>
        <div className="box duration-500  hover:scale-105 bg-primary rounded-2xl  p-5 text-center flex flex-col justify-center w-full items-center">
          <LuBookDown className="text-6xl font-bold text-indigo-500"></LuBookDown>
          <h2 className="text-2xl font-bold my-5 hover:text-indigo-500 duration-500">
            AI-Powered Writing
          </h2>
          <p className="text-lg text-text leading-normal">
            Access AI-generated content for your blogs, websites, and more with
            our qualitifull convenient service.
          </p>
        </div>
        <div className="box duration-500  hover:scale-105 bg-primary rounded-2xl  p-5 text-center flex flex-col justify-center w-full items-center">
          <PiSpinnerBold className="text-6xl font-bold text-indigo-500"></PiSpinnerBold>
          <h2 className="text-2xl font-bold my-5 hover:text-indigo-500 duration-500">
            AI Generation Simple
          </h2>
          <p className="text-lg text-text leading-normal">
            Experience the ease of content creation with our AI service. Write
            less, achieve more.
          </p>
        </div>
        <div className="box duration-500  hover:scale-105 bg-primary rounded-2xl  p-5 text-center flex flex-col justify-center w-full items-center">
          <PiSquareLogoLight className="text-6xl font-bold text-indigo-500"></PiSquareLogoLight>
          <h2 className="text-2xl font-bold my-5 hover:text-indigo-500 duration-500">
            Quality AI Content
          </h2>
          <p className="text-lg text-text leading-normal">
            Get professionally written content in no time with our AI service.
            Quality meets speed.
          </p>
        </div>
        <div className="box duration-500  hover:scale-105 bg-primary rounded-2xl  p-5 text-center flex flex-col justify-center w-full items-center">
          <BsChevronBarRight className="text-6xl font-bold text-indigo-500"></BsChevronBarRight>
          <h2 className="text-2xl font-bold my-5 hover:text-indigo-500 duration-500">
            Your Writing Assistant
          </h2>
          <p className="text-lg text-text leading-normal">
            Collaborate with AI to generate content that resonates with your
            audience. Try it now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentAi;
