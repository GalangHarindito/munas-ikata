import React from "react";
import Landing from './pages/Landing/landing';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Event from './pages/Event/event';
import Contact from './pages/Contact/contact';
import About from './pages/About/About';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
   <Router>
     <Header />
       <Switch>
         <Route exact path="/" component={Landing} />
         <Route exact path="/tentangMunas" component={About} />
         <Route exact path="/events" component={Event} />
         <Route exact path="/contactUs" component={Contact} />
       </Switch>
     <Footer />
   </Router>
  );
}

