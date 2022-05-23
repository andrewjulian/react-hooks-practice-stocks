import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stockList, setStockList] = useState([])
  const [myPortfolioList, setMyPortfolioList] = useState([])
  const [filterType, setFiilterType] = useState("All");
  const [sortType, setSortType] = useState("");  

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((data) => setStockList(data));
  }, []);

  function handleMyPortfolioList(event) {
    console.log("handle portoflio list")
    let stockID = (event.target.parentNode.parentNode.parentNode.id)
    let selectedStock = stockList.filter((stock)=> stock.id == stockID)
    return setMyPortfolioList([...myPortfolioList, selectedStock[0]])
  }

  function handleMyPortfolioListDelete(event){
    let stockID = event.target.parentNode.parentNode.parentNode.id
    let updatedList = myPortfolioList.filter((stock)=> stock.id != stockID)
    return setMyPortfolioList(updatedList)
  }

  function handleStockFilter(event){
    setFiilterType(event.target.value)
  }

  function sortBySelection(event){
    setSortType(event.target.value)
  }

  return (
    <div>
      <SearchBar handleStockFilter={handleStockFilter} sortBySelection={sortBySelection} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stockList} filterType={filterType} sortType={sortType} onStockAddClick={handleMyPortfolioList} />
        </div>
        <div className="col-4">
          <PortfolioContainer myPortfolioList={myPortfolioList} onStockDeleteClick={handleMyPortfolioListDelete} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
