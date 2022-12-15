import React, { useState } from "react";
import Menu from "./Menu";
import Data from "./Data";


function App() {
  const [title, setTitle] = useState(Data);
  const [title2, setTitle2] = useState(Data);
  
  const Alldata = () => {
    setTitle(Data)
    setTitle2(Data);
   
  };

  const Breakfast = () => {
    const newState = title.filter((item) => item.category === "breakfast");
    setTitle2(newState);
  };

  const Lunch = () => {
    const New = title.filter((item) => item.category === "lunch");
    setTitle2(New);
  };
  const Shakes = () => {
    const NEw = title.filter((item) => item.category === "shakes");
    setTitle2(NEw);
  };
  return (
    <>
      <section className="section menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button onClick={Alldata} type="button" className="filter-btn">
            all 
          </button>
          <button onClick={Breakfast} type="button" className="filter-btn">
            breakfast
          </button>
          <button onClick={Lunch} type="button" className="filter-btn">
            lunch
          </button>
          <button onClick={Shakes} type="button" className="filter-btn">
            shakes
          </button>
        </div>
        <div className="section-center">
          <Menu  Info1={title2} />
        </div>
      </section>
    </>
  );
}

export default App;
