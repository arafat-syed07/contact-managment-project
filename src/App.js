import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from ".././src/compo/UserList";
import AddUser from ".././src/compo/AddUser.js";
import EditUser from ".././src/compo/EditUser";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Menu />
        <Dashboard />
        <Footer />
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="add" element={<AddUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
