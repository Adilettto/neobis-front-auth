import "./App.css";
import Login from "./pages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import WelcomeBack from "./pages/WelcomeBack";
import SignUp from "./pages/SignUp";
import MailCheck from "./pages/MailCheck";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/welcome-back" element={<WelcomeBack/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/mail-check" element={<MailCheck/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
  
}

export default App;
