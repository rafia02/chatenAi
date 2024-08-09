import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Components/Shared/Sidebar";
import { Link, Outlet } from "react-router-dom";
import { TbPencilStar } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";
import Modal from "../Components/Workspace/Modal";
import { context } from "../Context/AuthContex";
import { useQuery } from "@tanstack/react-query";
import Content from "../Components/Workspace/Content";
import { Typewriter } from "react-simple-typewriter";

const WorkspaceLayout = () => {
  const { user } = useContext(context)
  const [isOpen, setIsOpen] = useState(true)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  const [elements, setElements] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [sub, setSub] = useState("")
  const [show, setShow] = useState("")



  const [filteredData, setFilterData] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addNewElement = (newElement) => {
    setSub(newElement);
    setElements([...elements, newElement]);
  };

  const { data: allsub = [], refetch } = useQuery({
    queryKey: ["sub", user?.email],
    queryFn: async () => {
      const res = await fetch(`https://hati-server.vercel.app/sub?email=${user?.email}`);
      const data = await res.json();
      return data;
    },
  });

  //   useEffect(() => {
  //     fetch(`https://hati-server.vercel.app/sub?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("..................................", data);
  //         setAllsub(data.reverse());
  //       })
  //       .catch((e) => console.log(e));
  //   }, [user?.email]);

  // console.log(user?.email)

  // console.log(allsub)

  const sendMessage = async () => {
    console.log("lodaing.....");

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDF9nNjK3OCj1F7rK8LDa3G9_zlf6CVbgs",
      method: "POST",
      data: { contents: [{ parts: [{ text: input }] }] },
    });

    console.log(
      "aaaaaaaaaaaaaaaaaaaaaaaaa",
      response.data.candidates[0].content.parts[0].text
    );

    const botMessage = {
      role: "bot",
      content: response.data.candidates[0].content.parts[0].text,
      sub: input,
      email: user.email,
      main: show,
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
        refetch();
        setInput("");
        // reset();
        // navigate("/home/alltask")
      })
      .catch((e) => console.log(e));
  };

  // useEffect(() => {
  //   fetch(`https://hati-server.vercel.app/datas`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log("..................................", data);
  //       setMess(data);
  //     })
  //     .catch((e) => console.log(e));
  // }, [mess]);

  // const [searchTerm, setSearchTerm] = useState('what is your name');

  // const filteredData = mess?.filter(item =>
  //   item.sub.includes(searchTerm)
  // )

  //   const { data = [] } = useQuery({
  //     queryKey: ['sub'],
  //     queryFn: async () => {
  //         const res = await fetch(`https://hati-server.vercel.app/datas?email=${user?.email}??sub=${show}`)
  //         const data = await res.json()
  //         return data

  //     }
  // })

  // const { data: filteredData = [] } = useQuery({
  //   queryKey: ['sub', user?.email],
  //   queryFn: async () => {
  //       const res = await fetch(`https://hati-server.vercel.app/datas?email=${user?.email}&&sub=${show}`)
  //       const data = await res.json()
  //       return data

  //   }
  // })

  useEffect(() => {
    fetch(`https://hati-server.vercel.app/datas?email=${user?.email}&&sub=${show}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("..................................", data);
        refetch();
        setFilterData(data);
      })
      .catch((e) => console.log(e));
  }, [user?.email, show, input]);

  // console.log(".............filter", filteredData)

  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900  transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <Link to="/">
            <img
              className=" mt-10 ml-5 md:h-9"
              src="https://chatenai-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4f98a1d7.png&w=640&q=75"
              alt=""
            />
          </Link>

          <button
            onClick={openModal}
            className="bg-secondary ml-5 mb-10 border mt-7 border-[#43679d] justify-center flex items-center  gap-3 hover:bg-indigo-500 duration-500  rounded-md px-12 py-2  font-bold"
          >
            <TbPencilStar className="text-2xl" />
            New chat
          </button>

          <div className="p-4 h-80 capitalize flex flex-col gap-3 overflow-y-auto text-[#8386c4] scrollbar-hide">
            {allsub.map((element, index) => (
              <button
                onClick={() => setShow(element.main)}
                className={`cursor-pointer text-start  px-5 rounded py-1 ${
                  show === element.main ? "bg-gray-700" : ""
                }`}
                key={index}
              >
                {element.main}
              </button>
            ))}
          </div>

          <div className=" absolute bg-gray-900 bottom-2 p-5 mt-5">
            <div className="flex gap-3 mb-5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWvRBKQ78rfLVw4-qlKDl0NTS7pNcf0xVJ-xljgMfevoEujQQ9T5RUrVFcfPwcUlJxjo&usqp=CAU"
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

        {/* Main content */}
        <div className={`flex-1  min-h-screen ${isOpen ? "ml-48 pl-10" : ""}`}>
          <div className="p-4  mt-5">
            <div className="flex justify-between items-center">
              <button
                className="px-2 text-gray-800 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                ☰
              </button>

              <img
                className="h-10 w-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWvRBKQ78rfLVw4-qlKDl0NTS7pNcf0xVJ-xljgMfevoEujQQ9T5RUrVFcfPwcUlJxjo&usqp=CAU"
                alt=""
              />
            </div>

            <div
              className={`overflow-y-auto  scrollbar-hide ${
                !isOpen
                  ? "mt-5 w-full md:w-4/5 mx-auto h-[300px]"
                  : "mt-6 h-[390px]"
              }`}
            >
              {/* <Content isOpen={isOpen} filteredData={data}></Content> */}

              <div
                className={`flex flex-col space-y-8 mb-4 ${
                  !isOpen ? "mx-28" : ""
                }`}
              >
                {filteredData.map((msg, index) => (
                  <div>
                    <div>
                      <div className="box2 flex justify-items-end mb-10 self-end  bg-gradient-to-r from-[#282953] via-[#1a1c3a] to-[#14152c] rounded-2xl duration-500 px-10 py-6">
                        <div className="flex items-center leading-loose gap-7">
                          <img
                            className="h-9 w-9 rounded-full"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWvRBKQ78rfLVw4-qlKDl0NTS7pNcf0xVJ-xljgMfevoEujQQ9T5RUrVFcfPwcUlJxjo&usqp=CAU"
                            alt=""
                          />
                          <div>
                            <p className="text-lg">You</p>

                            <p className="text-[#8386c4] mt-2">
                              {/* <Typewriter
                                words={[msg.sub]}
                                loop:false
                                cursor
                                cursorStyle="|"
                                typeSpeed={10}
                                deleteSpeed={0}
                              /> */}
                              {msg.sub}
                            </p>
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
                              <p className="text-[#8a8bc4] mt-2">
                                {/* <Typewriter
                                  words={[msg.content]}
                                  loop:false
                                  cursor
                                  cursorStyle="|"
                                  typeSpeed={2}
                                  deleteSpeed={0}
                                /> */}
                                {msg.content}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative mt-5  `}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={`ring-2 ring-violet-500 w-full py-2 px-4 bg-black text-white focus:outline-none rounded-lg pr-10`}
                placeholder="Type a message"
              />
              <button
                onClick={sendMessage}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <IoSend className="text-2xl"></IoSend>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={isModalOpen} onClose={closeModal} onAdd={addNewElement} />
    </div>
  );
};

export default WorkspaceLayout;
