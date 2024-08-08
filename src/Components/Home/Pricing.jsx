import React from "react";
import "../../App.css";
import { FiCheckCircle } from "react-icons/fi";

const Pricing = () => {
  return (
    <div className="my-28 overflow-hidden scrollbar-hide">
      <div>
        <h5 className="gradient-texts text-center mb-5 text-xl font-bold">
          Pricing
        </h5>
        <div className="text-center">
          <h3 className="text-2xl md:text-5xl font-bold mb-7  ">
            Commence Content Journey with AI
          </h3>
          <p className="text-lg text-text font-semibold">
            Collaborate with AI to generate content that resonates.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 my-10 md:grid-cols-3 mx-5 gap-10 mt-16">
        <div className="box2 duration-500 py-8 rounded-2xl md:hover:scale-105 bg-primary">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Basic</h2>
            <h1 className="text-7xl mt-4 text-indigo-500 font-bold">Free</h1>
            <p className="text-text mt-4">Forever</p>
            <div className="relative w-11/12 mx-auto my-5">
              <hr className="border-0 w-full  h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-4" />
              <div className=" w-full rounded-full absolute top-[-1px] move-infinite">
                <div className="w-[5px] h-[5px] bg-indigo-300 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="text-text flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              7,700 Words
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              6+ Templates
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              5+ Languages
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              AI Blog generate
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              Advance Editor Tool
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              Consistent support
            </div>

            <button className="rounded text-lg font-semibold px-6 mt-7 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500  text-gray-50">
              Try it now
            </button>
          </div>
        </div>

        <div className="box2 duration-500 py-8 rounded-2xl hover:scale-105 bg-primary">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Business</h2>
            <div className="flex flex-row items-center gap-1  justify-center">
              <p className="text-4xl font-semibold text-text">$</p>
              <h1 className="text-7xl mt-5 mb-3 text-indigo-500 font-bold">
                50
              </h1>
            </div>
            <p className="text-text">USD Per Month</p>

            <div className="relative w-11/12 mx-auto my-5">
              <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-4" />
              <div className=" w-full rounded-full absolute top-[-1px] move-infinite">
                <div className="w-[5px] h-[5px] bg-indigo-300 rounded-full"></div>
              </div>
            </div>

          </div>
          <div className="text-text flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              7,700 Words
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              6+ Templates
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              5+ Languages
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              AI Blog generate
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              Advance Editor Tool
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              Consistent support
            </div>
            <button className="rounded text-lg font-semibold px-6 mt-7 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500  text-gray-50">
              Purchase now
            </button>
          </div>
        </div>

        <div className="box2 duration-500 py-8 rounded-2xl hover:scale-105 bg-primary">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Advanced</h2>
            <div className="flex flex-row items-center gap-1  justify-center">
              <p className="text-4xl font-semibold text-text">$</p>
              <h1 className="text-7xl mt-5 mb-3 text-indigo-500 font-bold">
                100
              </h1>
            </div>

            <p className="text-text">USD Per Month</p>

            <div className="relative w-11/12 mx-auto my-5">
              <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-4" />
              <div className=" w-full rounded-full absolute top-[-1px] move-infinite">
                <div className="w-[5px] h-[5px] bg-indigo-300 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="text-text flex flex-col gap-2 items-center">
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              7,700 Words
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              6+ Templates
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              5+ Languages
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              AI Blog generate
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              Advance Editor Tool
            </div>
            <div className="flex items-center gap-2 text-lg">
              <FiCheckCircle />
              Consistent support
            </div>
            <button className="rounded  text-lg font-semibold px-6 mt-7 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500  text-gray-50">
              Purchase now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
