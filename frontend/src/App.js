import PreLogin from "./components/navs/prelogin-nav";
import Home from "./components/Home";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/footer";

function App() {
  return (
    <> 
    <Router>
      <> </>
   <Routes>
   <Route path="/" element={<PreLogin/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
    <Route path='/home' element={<Home/>}/>
   
   </Routes>
   <> <Footer></Footer> </>
   </Router>
   </>
  );


       

}

export default App;
