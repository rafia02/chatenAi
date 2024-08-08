import React, { useContext, useState } from "react";
import "../../App.css";
import { Typewriter } from "react-simple-typewriter";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import { context } from "../../Context/AuthContex";

const Hero = () => {
  const {user} = useContext(context)
  const [stars, setStars] = useState([
    { id: 1, left: "10%", top: "20%", delay: "0s" },
    { id: 2, left: "50%", top: "50%", delay: "0.5s" },
    { id: 3, left: "80%", top: "30%", delay: "1s" },
  ]);

  return (
    <div>
      <div className="my-5 md:my-10 w-10/12 md:w-3/4 mx-auto">
        <div>
          <div className="relative w-14 h-8 bg-black flex justify-center items-center">
            {stars.map((star) => (
              <div
                key={star.id}
                className="star absolute"
                style={{
                  left: star.left,
                  top: star.top,
                  animation: `twinkle 2s infinite ${star.delay}`,
                }}
              ></div>
            ))}
          </div>

          <div className="text-3xl md:text-7xl  mt-0 font-medium">
            <Typewriter
              words={["Chaten AI forms that can ask and answer questions."]}
              loop:true
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={0}
            />
          </div>
        </div>
      </div>

      <Link to={`${user?.email ? "/workspace" : "/login"}`} className="flex justify-center mt-10 md:mt-20">
        <button className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 px-5 py-2 text-xl rounded-full font-medium text-gray-50">
          Get a free trial
        </button>
      </Link>
    </div>
  );
};

export default Hero;
