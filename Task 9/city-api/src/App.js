// import logo from './logo.svg';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import Login from './view/Login.js';
// import Dashboard from './view/Dashboard.js';
import Sidebar from './Component/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from './Component/Country';
import OrganizationForm from './view/OrganizationForm';

function App() {
  // console.log(window.location);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Sidebar />} />
          <Route path="/dashboard/country" element={<Country />} />
          <Route path="/dashboard/organization" element={<OrganizationForm />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
