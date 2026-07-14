import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UsersList from "./pages/UserList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home name="Alice" />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;
