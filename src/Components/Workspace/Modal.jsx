import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { context } from '../../Context/AuthContex';
import { useQuery } from '@tanstack/react-query';

const Modal = ({ show, onClose, onAdd}) => {
    const [inputValue, setInputValue] = React.useState('')
    const {user} = useContext(context)



    const { data: allsub = [], refetch } = useQuery({
      queryKey: ['sub', user?.email],
      queryFn: async () => {
          // const res = await fetch(`https://hati-server.vercel.app/sub?email=${user?.email}`)
          // const data = await res.json()
          return data
  
      }
  })




    const handleAdd = () => {
      onAdd(inputValue);



      fetch("https://hati-server.vercel.app/sub", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({main: inputValue, email: user.email}),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success(" complited");
          refetch()
          setInputValue('');
          onClose();
        })
        .catch((e) => console.log(e))




      
    //   setInputValue('');
    //   onClose();
    };
  
    if (!show) {
      return null;
    }


  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="chat">
            New Chat
          </label>
          <input
            type="text"
            id="chat"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal