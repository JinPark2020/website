import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop"; // Handles scrolling to top on route change

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import MainPage from "./Pages/MainPage/MainPage";
import About from "./Pages/About/About";
import Info from "./Pages/Info/Info";
import Board from "./Pages/Board/Board";
import Etc from "./Pages/Etc/Etc";
import Contact from "./Pages/Contact/Contact";

// Layout component that wraps all pages with Navbar, Footer, and ScrollToTop
function Layout() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> {/* Ensures page scrolls to top on navigation */}
      <Outlet /> {/* Renders the matched child route */}
      <Footer />
    </>
  );
}

// Define application routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wraps all routes with Layout
    children: [
      { index: true, element: <MainPage /> }, // Default page
      { path: "/about", element: <About /> },
      { path: "/info", element: <Info /> },
      { path: "/board", element: <Board /> },
      { path: "/etc", element: <Etc /> },
      { path: "/contact", element: <Contact /> }
    ]
  }
]);

// Root component that provides the router to the application
function App() {
  return <RouterProvider router={router} />;
}

export default App;