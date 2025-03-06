/* eslint-disable no-unused-vars */
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop"; // Handles scrolling to top

import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import MainPage from "./Pages/MainPage/MainPage";
import About from "./Pages/About/About";
import Info from "./Pages/Info/Info";
import Board from "./Pages/Board/Board";
import Etc from "./Pages/Etc/Etc";
import Contact from "./Pages/Contact/Contact";

import AdminLogin from "./Pages/Admin/AdminLogin";

function AuthRedirectRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/verify-token",
          {},
          { withCredentials: true }
        );
        setIsAuthenticated(true);
      } catch (error) {
        console.log("토큰 인증 실패: ", error);
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? <Navigate to="/admin/posts" replace /> : <Outlet />;
}

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
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/admin",
    element: <AuthRedirectRoute />,
    children: [{ index: true, element: <AdminLogin /> }],
  },
]);

// Root component that provides the router to the application
function App() {
  return <RouterProvider router={router} />;
}

export default App;
