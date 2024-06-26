import './App.css';
import React, { useState, useEffect } from "react";
import Loader from "./Composant/Loader";
import NavBar from "./Composant/NavBar";
import Home from "./Composant/Home/Home";
import Apropos from "./Composant/Apropos/Apropos";
import Projet from "./Composant/Projet/Projet";
import Footer from "./Composant/Footer";
import Cv from "./Composant/Cv/Cv";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  let tab = [] ;

  switch (page) {

    case 0:
      tab.push(<Home />);
      break;

    case 1:
      tab.push(<Apropos />);
      break;

    case 2:
      tab.push(<Projet />);
      break;

    case 3:
      tab.push(<Cv />);
      break;

    default:
      tab.push(<Home />);
      break;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <div className="App">
        <NavBar setPage={setPage}/>
          {tab}
        <Footer />
      </div>
    </>
  );
}

export default App;
