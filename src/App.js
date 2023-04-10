//import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";
//import { ErrorBoundary } from 'react-error-boundary';
import "./App.css";

//const Home = lazy(() => import("./components/Home"));
//const Profile = lazy(() => import("./components/Profile"));
//const About = lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

const NavBar = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

// function delay(time) {
//   return new Promise(resolve => {
//     setTimeout(resolve, time)
//   })
// }
