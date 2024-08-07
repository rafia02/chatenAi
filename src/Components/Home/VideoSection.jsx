import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";
import Spinner from "../Shared/Spinner";

import { useTypewriter, Cursor } from "react-simple-typewriter";

// "Great! With Chaten AI, you can create AI-powered forms that are dynamic and conversational. They're designed to collect data and answer user questions simultaneously, providing a seamless experience for your visitors. How can I help you? Please explaine your problem."

const VideoSection = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
 const [items, setItems] = useState([
    "Great! With Chaten AI, you can create AI-powered forms that are dynamic and conversational. They're designed to collect data and answer user questions simultaneously, providing a seamless experience for your visitors. How can I help you? Please explaine your problem.",
  ]);








  const sendMessage = async () => {
    console.log("lodaing.....");

    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDF9nNjK3OCj1F7rK8LDa3G9_zlf6CVbgs",
      method: "POST",
      data: { contents: [{ parts: [{ text: input }] }] },
    })

    const newItem = response.data.candidates[0].content.parts[0].text.slice(0, 400)

    setItems([...items, newItem])

    setItems((prevItems) => prevItems.slice(1));



    


    setInput("");
  };

  const [text] = useTypewriter({
    words: items,
    loop: 0, 
    typeSpeed: 50,
    deleteSpeed: 0,
    delaySpeed: 10000,
  });

  console.log(items);

  console.log(items.length);

  return (
    <div className="my-10 md:my-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-1">
        <div>
          <video className="md:h-[500px] rounded" controls autoPlay muted loop>
            <source
              src="https://filmora.wondershare.com/2023video/ai-page/01-Ai-Copilot_transcode_100800.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div>
          {open ? (
            <div className=" text-2xl font-semibold bg-gray-950 px-8 py-10 shadow-gray-500 w-full h-full  shadow-inner rounded-md">
              <div>


                
              {/* <Typewriter
                    words={[element]}
                    loop:true
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={0}
                  /> */}



                {text}
                <Cursor cursorStyle="|" />

                {/* {ans.slice(0, 400)} */}
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={4}
                cols={5}
                type="text"
                placeholder="Type here..."
                className=" normal-case bg-gray-950 mt-12 w-full outline-none"
              ></textarea>

              {input && (
                <div onClick={sendMessage} className="flex justify-end mt-3">
                  <IoIosSend className="bg-white text-black text-3xl w-12 py-1 rounded-xl" />
                </div>
              )}
            </div>
          ) : (
            <div>
              <h1 className="text-2xl md:text-5xl md:leading-[3.5rem] mb-6 font-semibold">
                Instant Content Generation with AI
              </h1>
              <p>
                It looks like you have a conversation in progress. Do you want
                to continue from where you left off?
              </p>
              <button
                onClick={() => setOpen(true)}
                className="py-2 hover:bg-gray-300 hover:text-black hover:border-black duration-500 px-5 text-lg border-gray-200 mt-9 font-bold border-2 rounded-full"
              >
                Yes continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
