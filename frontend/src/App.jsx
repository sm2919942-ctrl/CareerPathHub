import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CareerListing from "./pages/CareerListing";
import CareerDetails from "./pages/CareerDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from "./pages/StudentDashboard";
import SavedCareers from "./pages/SavedCareers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers/:category" element={<CareerListing />} />
        <Route path="/career/:id" element={<CareerDetails />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
<Route path="/saved" element={<SavedCareers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;