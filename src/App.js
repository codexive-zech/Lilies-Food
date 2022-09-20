import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Login, Register } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
