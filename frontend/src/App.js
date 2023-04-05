import PreLogin from "./components/navs/prelogin-nav";
import Home from "./components/Home";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <> <Routes/>

   <Route path="/" element = {<PreLogin/>} />
   <Route path="/home" element = {<Home/>} />
   <Route path="/login" element = {<Login/>} />
   <Route path="/register" element = {<Login/>} />


          <Routes/> </>
    
  );
}

export default App;
