import Layout from "./routes/layout/layout";
import HomePage from './routes/homepage/homepage';
import ListPage from './routes/list/listPage';
import SinglePage from "./routes/singlePage/SinglePage";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        }
      ]
      
    }
  ]);
  return (

    <RouterProvider router={router}/>
  )
}

export default App