import React from "react";

const Menu = (props) => {
  return (
    <>
      {props.Info1.map((item) => {
        const { title, category, price, img, desc } = item;
        return (
          <article key={price} className="menu-item">
            <img src={img} alt={category} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price"> {`$${price}`}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};


export default Menu;
