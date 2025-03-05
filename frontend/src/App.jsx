import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import MainPage from "./Pages/MainPage/MainPage";
import About from "./Pages/About/About";
import Info from "./Pages/Info/Info";
import Board from "./Pages/Board/Board";
import Etc from "./Pages/Etc/Etc";
import Contact from "./Pages/Contact/Contact";


function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/info",
        element: <Info />
      },
      {
        path: "/board",
        element: <Board />
      },
      {
        path: "/etc",
        element: <Etc />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App;
