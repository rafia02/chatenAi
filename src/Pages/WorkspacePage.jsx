import React, { useEffect, useState } from "react";
import { PiSquareHalfBold } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { TbPencilStar } from "react-icons/tb";
import { Link } from "react-router-dom";
import SideNavber from "../Components/Shared/SideNavber";
import "../App.css";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import Spinner from "../Components/Shared/Spinner";
import toast from "react-hot-toast";

// border-[#232f6c]

const WorkspacePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [mess, setMess] = useState([]);

  const [count, setCount] = useState(1);

  const handleNewMassege = () => {
    setCount(count + 1);
  };

  console.log(count);

  const sendMessage = async () => {
    <Spinner></Spinner>;
    console.log("lodaing.....");

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDF9nNjK3OCj1F7rK8LDa3G9_zlf6CVbgs",
      method: "POST",
      data: { contents: [{ parts: [{ text: input }] }] },
    });

    console.log(response.data.candidates[0].content.parts[0].text);

    const botMessage = {
      role: "bot",
      content: response.data.candidates[0].content.parts[0].text,
      sub: input,
      email: "abc@gmail.com"
    };

    console.log("botmassgae :", botMessage);
    setMessages([...newMessages, botMessage]);

    fetch("https://hati-server.vercel.app/datas", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(botMessage),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Ansering complited");
        setInput("");
        reset();
        navigate("/home/alltask")
      })
      .catch((e) => console.log(e));
  };

  fetch(`https://hati-server.vercel.app/datas?count=${count}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("..................................", data);
      setMess(data);
    })
    .catch((e) => console.log(e));







  return (
  <div>




  </div>

    
  );
};

export default WorkspacePage;





{/* <div className="flex flex-col md:flex-row a gap-16">
<div className={`  ${isOpen ? "md:w-3/12 w-full h-full" : "w-0 hidden"}`}>
  <div onClick={() => setIsOpen(!isOpen)}>
    <PiSquareHalfBold className="h-7 w-7  ml-5 font-extrabold bg-violet-700 rounded p-1 "></PiSquareHalfBold>
  </div>

  <div
    className={`bg-[#03051e] pt-5 left-0 transform ${
      isOpen ? "translate-x-0" : "-translate-x-[150%]"
    } transition-transform duration-300 ease-in-out`}
  >
    <button
      onClick={handleNewMassege}
      className="bg-secondary border ml-5 mb-5 border-[#43679d] justify-center flex items-center  gap-3 hover:bg-indigo-500 duration-500  rounded-md px-12 py-2  font-bold"
    >
      <TbPencilStar className="text-2xl" />
      New chat
    </button>

    <div className="p-4 h-56 capitalize flex flex-col gap-3 overflow-y-auto text-[#8386c4] scrollbar-hide">
      {
        mess.map(m => <div>
          <h4>{m?.sub?.slice(0, 20)}...</h4>
        </div>)
      }
    </div>

    <div className=" p-5 mt-5">
      <div className="flex gap-3 mb-5">
        <img
          className="h-10 w-10 rounded-full"
          src="https://www.unr.edu/main/images/colleges-schools/business/home/profile/profile-dick-bartholet.jpg"
          alt=""
        />
        <div>
          <h1 className="font-semibold">Johan Mark</h1>
          <p className="text-sm text-text">Sofware Developer</p>
        </div>
      </div>
      <button className="bg-secondary border  border-[#232f6c] flex items-center justify-center gap-3 hover:bg-indigo-600 duration-500  rounded-md px-8 py-2  font-bold">
        <BsStars className="text-xl"></BsStars>
        Upgrade Plan
      </button>
    </div>
  </div>
</div>

<div
  className={`  ${
    isOpen ? " h-full md:w-9/12 w-full md:px-16" : "w-full"
  }`}
>
  {!isOpen && (
    <div onClick={() => setIsOpen(!isOpen)}>
      <PiSquareHalfBold className="h-7 w-7 ml-5 font-extrabold bg-violet-700 rounded p-1 "></PiSquareHalfBold>
    </div>
  )}







  <div
    className={`overflow-y-auto  scrollbar-hide ${
      !isOpen
        ? "mt-5 w-full md:w-4/5 mx-auto h-[300px]"
        : "mt-6 h-[390px]"
    }`}>
    <div
      className={`flex flex-col space-y-8 mb-4 ${!isOpen ? "mx-28" : ""}`}
    >
      {mess.map((msg, index) => (
        <div
          key={index}
          className={`p-2 rounded capitalize ${
            msg.role === "user" ? "  self-end" : " self-start"
          }`}
        >
          {count == msg.count ? (
            <div>
              <div className="box2 flex justify-items-end mb-10 self-end  bg-gradient-to-r from-[#282953] via-[#1a1c3a] to-[#14152c] rounded-2xl duration-500 px-10 py-6">
                <div className="flex items-center leading-loose gap-7">
                  <img
                    className="h-9 w-9 rounded-full"
                    src="https://www.unr.edu/main/images/colleges-schools/business/home/profile/profile-dick-bartholet.jpg"
                    alt=""
                  />
                  <div>
                    <p className="text-lg">You</p>
                    <p className="text-[#8386c4] mt-2">{msg.sub}</p>
                  </div>
                </div>
              </div>

              <div className="self-start box2 leading-loose bg-gradient-to-r from-[#282953] via-[#1a1c3a] to-[#14152c] duration-500 p-5 rounded-2xl  px-10 py-6">
                <div>
                  <div className="flex gap-6">
                    <img
                      className="w-9 h-9 rounded-full"
                      src="https://chatenai-nextjs.vercel.app/_next/image?url=%2Fimages%2Fteam%2Favater.png&w=96&q=75"
                      alt=""
                    />
                    <div>
                      <div className="flex items-center gap-4">
                        <p className="text-lg">ChatenAi</p>
                        <button className="px-2 text-white font-bold rounded-2xl text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400">
                          Bot
                        </button>
                      </div>
                      <p className="text-[#8a8bc4] mt-2">{msg.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {msg.content}
        </div>
      ))}
    </div>
  </div>

  <div className={`relative mt-5  ${!isOpen ? "w-3/5 mx-auto" : ""}`}>
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="ring-2 ring-violet-500 w-full py-2 px-4 bg-black text-white focus:outline-none rounded-lg pr-10"
      placeholder="Type a message"
    />
    <button
      onClick={sendMessage}
      className="absolute inset-y-0 right-0 flex items-center pr-3"
    >
      <IoSend></IoSend>
    </button>
  </div>
</div>
</div> */}
