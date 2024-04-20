import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ResponsiveAppBar from "./pages/nav.tsx";
import Home from "./pages/Home.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Leaderboard from "./pages/Leaderboard.tsx";
import Opportunities from "./pages/Opportunities.tsx";
import Airdrop from "./pages/Airdrop.tsx";


export default function App() {
  return (
    <div>
      <ResponsiveAppBar />
          
       
      <Routes>
          <Route path="LoggedIn/*" element={<LoggedIn />} />
          <Route path="Home" element={<Home />}/>
          <Route path="Dashboard/*" element={<Dashboard />} />
          <Route path="Opportunities" element={<Opportunities />} />
          <Route path="Leaderboard" element={<Leaderboard />} />
          <Route path="Airdrop" element={<Airdrop />} />
          </Routes>
     
    </div>
  );
}

function LoggedIn() {
  return (
    <div>
      <ResponsiveAppBar />
      <h1>Welcome</h1>

      <p>
       
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
          <Route path="Home" element={<Home />}/>
          <Route path="Dashboard/*" element={<Dashboard />} />
          <Route path="Opportunities" element={<Opportunities />} />
          <Route path="Leaderboard" element={<Leaderboard />} />
          <Route path="Airdrop" element={<Airdrop />} />
          </Routes>

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. 
                <Route path="*" element={<NoMatch />} />
                </Route>
                */}
    </div>
  );
}