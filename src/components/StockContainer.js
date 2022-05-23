import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, filterType, onStockAddClick, sortType}) {

  const filteredStocks = stockList.filter((stock) => {
    if(filterType === "All") {return stock}
    return stock.type === filterType ? stock : null;
  }) 

  let sortedStocks = filteredStocks;

  if(sortType === "Alphabetically"){
    sortedStocks = filteredStocks.sort((a,b) => a.name > b.name ? 1 : -1)
  } else if (sortType === "Price") {
    sortedStocks = filteredStocks.sort((a,b) => a.price > b.price ? 1 : -1)
  }

  const displayStockList = sortedStocks.map((stock, index) => {
    return <Stock stock={stock} key={stock.id} addOrDelete={onStockAddClick} portfolioType={"SC"}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {displayStockList}
    </div>
  );
}

export default StockContainer;
