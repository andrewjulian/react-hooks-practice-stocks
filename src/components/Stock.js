import React from "react";

function Stock({stock, addOrDelete, portfolioType }) {

  const {id, ticker, name, price} = stock

  return (
    <div id={id}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker} {price}</p>
          <button onClick={addOrDelete}> {portfolioType === "SC" ? "Buy Stock!" : "Sell Stock"} </button>
        </div>
      </div>
    </div>
  );
}
export default Stock;
