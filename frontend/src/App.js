
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import PreLogin from "./components/navs/prelogin-nav";
import Home from "./components/Home";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/footer";
import awsExports from './aws-exports';
import ProfileSetup from "./components/profileSetup";

Amplify.configure(awsExports);



function App() {
  return (
    <> 
    <Router>
      <> </>
   <Routes>
   <Route path="/" element={<PreLogin/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Register/>}/>
   <Route path='/profileSetup' element={<ProfileSetup/>}/>


   <Route path='/home' element={<Home/>}/>
   </Routes>
   <> <Footer></Footer> </>
   </Router>
   </>
  );




       

}

export default App;


