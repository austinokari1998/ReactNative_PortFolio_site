// this is the jsx where i will do all the browser routing and all components rendering
import Nav_Bar from "./components/Navigation_bar";
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Route,Routes } from "react-router-dom";
import Body from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
export default function Default_Render(){

  return (
    <div>
      <Nav_Bar/>
      
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Body/><Footer/></>}/>
        <Route path='/Projects' element={<Projects/>}/>





        <Route path='/About' element={<><About/> <Footer/></>}/>
          
      </Routes>
    
    
    
    </BrowserRouter>

    </div>

    
  );


}