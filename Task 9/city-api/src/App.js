// import logo from './logo.svg';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import Login from './view/Login.js';
import Dashboard from './view/Dashboard.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
