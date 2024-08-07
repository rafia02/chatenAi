import React, { useState } from "react";

const Spinner = () => {
  // const [items, setItems] = useState([]);
  // const sendMessage =  async() => {
  
  //   const newItem = `Item ${items.length + 1}`;
  //   setItems([...items, newItem]);
  // };

  // console.log(items)
  // console.log(items.length)

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>

    // <div>
    //    <button onClick={sendMessage} className="p-2 bg-blue-500 text-white rounded">Send</button>
    // </div>
  );
};

export default Spinner;
