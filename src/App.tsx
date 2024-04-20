import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ResponsiveAppBar from "./pages/nav";
import Home from "./pages/Home";
import Airdrop from "./pages/Airdrop";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import Opportunities from "./pages/Opportunities";


export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Basic Example</h1>

      <p>
        This example demonstrates some of the core features of React Router
        including nested <code>&lt;Route&gt;</code>s,{" "}
        <code>&lt;Outlet&gt;</code>s, <code>&lt;Link&gt;</code>s, and using a
        "*" route (aka "splat route") to render a "not found" page when someone
        visits an unrecognized URL.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
          <Route path="Home" element={<Home />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Opportunities" element={<Opportunities />} />
          <Route path="Leaderboard" element={<Leaderboard />} />
          <Route path="Airdrop" element={<Airdrop />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
     
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/opportunities">Opportunities</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/aidrop">Airdrop</Link>
          </li>
          <li>
          <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
       >
      <ConnectButton />
    </div>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}