import logo from './logo.svg';
import { Routes, Route, OUtlet, Link } from 'react-router-dom';
import Profile from './components/Profile';
import About from './components/About';
import ErrorBoundary from './components/ErrorBoundary';
//import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

const Home = lazy(() => { import './components/Home' })


function App() {
  return (
    <Routes>
      <NavBar />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
    </Routes> >
  );


  export default App;

  const NavBar = () => {
    <nav style={{ display: 'flex', gap: '10px' }}>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">About</Link>
    </nav>
  }


  function delay(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time)
    })
  }
