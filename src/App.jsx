import React, { useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import { Toaster } from 'react-hot-toast'
import Layout from './Layout/Layout'
import Homepage from './Pages/Homepage'
import Login from './Components/Shared/Login'
import Signup from './Components/Shared/Signup'
import WorkspaceLayout from './Layout/WorkspaceLayout'
import Content from './Components/Workspace/Content'
import { context } from './Context/AuthContex'

const App = () => {

  const {user} = useContext(context)

  const router = createBrowserRouter([
    {path: "/", element: <Layout></Layout>, children: [
        {path: "/", element: <Homepage></Homepage>},
        // {path: "/workspace", element: <WorkspacePage></WorkspacePage>},
        {path: "/login", element: <Login></Login>},
        {path: "/signup", element: <Signup></Signup>},
    ]},

    {path: "/workspace", element: <WorkspaceLayout></WorkspaceLayout>, children: [
        // {path: "/workspace", element: <WorkspacePage></WorkspacePage>},
        // {path: "/workspace/:id", element: <Content></Content>}
    ]}
])

  
  return (
    <div className='px-5 lg:px-8'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  )
}

export default App