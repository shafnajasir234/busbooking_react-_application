import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import BusSearch from "./pages/BusSearch";
import MyBookings from "./pages/MyBookings";

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/search" element={<BusSearch />} />
<Route path="/bookings" element={<MyBookings />} /> </Routes> </BrowserRouter>
);
}

export default App;
