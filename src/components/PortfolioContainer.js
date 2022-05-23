import React from "react";
import Stock from "./Stock";

function PortfolioContainer({myPortfolioList, onStockDeleteClick }) {

  let displayMyportfolioList = myPortfolioList.map((stock) => {
    return <Stock stock={stock} key={stock.id} addOrDelete={onStockDeleteClick} portfolioType={"PC"}/>
  });

    return (
    <div>
      <h2>My Portfolio</h2>
        {displayMyportfolioList}
    </div>
  );
}

export default PortfolioContainer;
