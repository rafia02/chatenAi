import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { context } from "../../Context/AuthContex";

const Content = ({filteredData, isOpen}) => {
    const {user} = useContext(context)








  return (
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
                              <p className="text-[#8a8bc4] mt-2">
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









    // <div className={`flex flex-col space-y-8 mb-4 ${!isOpen ? "mx-28" : ""}`}>
    //   {filteredData.map((msg, index) => (
    //     <div>
    //       <div>
    //         <div className="box2 flex justify-items-end mb-10 self-end  bg-gradient-to-r from-[#282953] via-[#1a1c3a] to-[#14152c] rounded-2xl duration-500 px-10 py-6">
    //           <div className="flex items-center leading-loose gap-7">
    //             <img
    //               className="h-9 w-9 rounded-full"
    //               src="https://www.unr.edu/main/images/colleges-schools/business/home/profile/profile-dick-bartholet.jpg"
    //               alt=""
    //             />
    //             <div>
    //               <p className="text-lg">You</p>
    //               <p className="text-[#8386c4] mt-2">{msg.sub}</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="self-start box2 leading-loose bg-gradient-to-r from-[#282953] via-[#1a1c3a] to-[#14152c] duration-500 p-5 rounded-2xl  px-10 py-6">
    //           <div>
    //             <div className="flex gap-6">
    //               <img
    //                 className="w-9 h-9 rounded-full"
    //                 src="https://chatenai-nextjs.vercel.app/_next/image?url=%2Fimages%2Fteam%2Favater.png&w=96&q=75"
    //                 alt=""
    //               />
    //               <div>
    //                 <div className="flex items-center gap-4">
    //                   <p className="text-lg">ChatenAi</p>
    //                   <button className="px-2 text-white font-bold rounded-2xl text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400">
    //                     Bot
    //                   </button>
    //                 </div>
    //                 <p className="text-[#8a8bc4] mt-2">{msg.content}</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Content;
