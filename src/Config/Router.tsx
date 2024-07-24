import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Dashboard";
import Dame2 from "../Pages/Singup";
import Dame3 from "../Pages/Login";
import Dash from "../Pages/DashCom";
import SignOutPage from "../Pages/SingOut";
import Protects from "../Protected";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Protects Component={Dash} />} />
        <Route path='/Singout' element={<SignOutPage />} />
        <Route path='/Home/*' element={<Home />} />
        <Route path='/Singup' element={<Dame2 />} />
        <Route path='/Login' element={<Dame3 />} />
 
      </Routes>
    </BrowserRouter>
  );
}
