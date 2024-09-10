import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page";
import Dashboard from "./pages/Dashboard/page";
import Inplay from "./pages/Inplay/page";
import Cricket from "./pages/Cricket/Page";
import Football from "./pages/Football/page";
import Tennis from "./pages/Tennis/page";
import Casino from "./pages/Casino/page";
import Horserasing from "./pages/Horserasing/page";
import Greyhoundracing from "./pages/Greyhoundracing/page";
import Kabaddi from "./pages/Kabaddi/page";
import Politics from "./pages/Politics/page";
import Navbar from "./components/Navbar/nabvar";
import Events from "./pages/Events/page";
import Navbarsec from "./components/Navbarsec/Navbarsec";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import FooterBar from './components/FooterBar/FooterBar'
import Profile from './pages/Profile/page'
import Rules from './pages/Rules/page'
import ChangePassword from './pages/ChangePassword/page'
import ProfitLoss from './pages/ProfitLoss/page'
import ICasino from './pages/ICasino/page'
import AccountStatement from './pages/AccountStatement/page'
import StakeSetting from './pages/StakeSetting/page'
import Unsettelbet from './pages/UnsetteldBet/page'

function App() {
  const [burgerState, setBurgerState] = useState(true);
  return (
    <BrowserRouter>
      <div className="flex w-full">
        <Navbar setBurgerState={setBurgerState} burgerState={burgerState} />
      </div>
      {/* <Navbarsec /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className=" flex w-full min-w-fit py-1 gap-1">
        <div className="hidden lg:block ">
          <Sidebar burgerState={burgerState} />
        </div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inplay" element={<Inplay />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/football" element={<Football />} />
          <Route path="/tennis" element={<Tennis />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/horse-rasing" element={<Horserasing />} />
          <Route path="/greyhound-racing" element={<Greyhoundracing />} />
          <Route path="/kabaddi" element={<Kabaddi />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stake_setting" element={<StakeSetting/>} />
          <Route path="/profit_loss" element={<ProfitLoss/>} />
          <Route path="/rules" element={<Rules/>} />
          <Route path="/i-casino" element={<ICasino/>} />
          <Route path="/change_password" element={<ChangePassword/>} />
          <Route path="/unsettled_bets" element={<Unsettelbet/>} />

          <Route path="/account_statement" element={<AccountStatement/>} />
        </Routes>
        
      </div>
      <div className="block lg:hidden ">
          <FooterBar />
        </div>
        
    </BrowserRouter>
  );
}

export default App;
