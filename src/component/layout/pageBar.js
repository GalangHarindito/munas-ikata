import React from "react";
import "./style.css";
import Header from '../header/header';
import Footer from '../footer/footer';

export default function PageBase(children) {
  return (
    <div>
    <Header />
    <div className="main">
      {children}
    </div>
    <Footer />
    </div>
  )
}