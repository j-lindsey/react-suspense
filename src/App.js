
import { Suspense, lazy } from 'react';
import logo from './logo.svg';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Profile from './components/Profile';
import About from './components/About';
import ErrorBoundary from './components/ErrorBoundary';
//import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

const Home = lazy(() => import('./components/Home'));

function App() {
  return (
    <>
      <NavBar />
      <Routes >
        <Route path="/" element={<NavBar />}>
          <Route index path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;

const NavBar = () => {
  <>
  <nav style={{ display: 'flex', gap: '10px' }}>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/about">About</Link>
  </nav>
  <Outlet />
</>
}


function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
