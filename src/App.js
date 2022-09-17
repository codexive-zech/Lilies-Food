import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Register } from "./pages";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
