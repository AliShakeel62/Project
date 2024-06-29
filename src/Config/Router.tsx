import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Dashboard";
import Dame2 from "../Pages/Singup";
import Dame3 from "../Pages/Login";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home/*' element={<Home />} />
        <Route path='/Singup' element={<Dame2 />} />
        <Route path='/Login' element={<Dame3 />} />
      </Routes>
    </BrowserRouter>
  );
}
