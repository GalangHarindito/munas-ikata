import React from "react";
import Landing from './pages/Landing/landing';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Event from './pages/Event/event'

export default function App() {
  return (
   <Router>
     <Header />
       <Switch>
         <Route exact path="/" component={Landing} />
         <Route exact path="/event" component={Event} />
       </Switch>
     <Footer />
   </Router>
  );
}

