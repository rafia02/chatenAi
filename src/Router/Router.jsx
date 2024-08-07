import { createBrowserRouter } from "react-router-dom"
import Layout from "../Layout/Layout"
import Homepage from "../Pages/Homepage"
import WorkspacePage from "../Pages/WorkspacePage"
import WorkspaceLayout from "../Layout/WorkspaceLayout"
import Login from "../Components/Shared/Login"
import Signup from "../Components/Shared/Signup"
import Content from "../Components/Workspace/Content"


// export const router = createBrowserRouter([
//     {path: "/", element: <Layout></Layout>, children: [
//         {path: "/", element: <Homepage></Homepage>},
//         // {path: "/workspace", element: <WorkspacePage></WorkspacePage>},
//         {path: "/login", element: <Login></Login>},
//         {path: "/signup", element: <Signup></Signup>},
//     ]},

//     {path: "/workspace", element: <WorkspaceLayout></WorkspaceLayout>, children: [
//         // {path: "/workspace", element: <WorkspacePage></WorkspacePage>},
//         {path: "/workspace/:id", loader: ({ params }) => fetch(`http://localhost:5000/datas?sub=${params.id}?email=${user?.email}`), element: <Content></Content>}
//     ]}
// ])