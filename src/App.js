import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./componets/Header";
import Home from "./componets/Home";
import Footer from "./componets/Footer";
import Contact from "./componets/Contact";
import Services from "./componets/Services";



import "./styles/app.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/contact.scss"

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
