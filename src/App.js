import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";

import"./styles/App.css"
import"./styles/header.css"
import"./styles/home.css"
import"./styles/footer.css"
import"./styles/contact.css"
import"./styles/mediaquery.css"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
