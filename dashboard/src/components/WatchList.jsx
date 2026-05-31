import { useState,useContext } from "react";
import { watchlist } from "../data/data";
import {Tooltip,Grow} from "@mui/material";
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";
const labels=watchlist.map((subary)=>subary["name"]);
export const data = {
  labels,
  datasets: [
    {
      label: 'Price',
      data: watchlist.map((stock)=>stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
export default function WatchList(){
    return (
        <>
        <div className="watchlist-container">
            <div className="search-container">
                <input type="text" name="search" id="search" placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx " className="search"/>
                <span className="counts">{watchlist.length}/50</span>
            </div>
            <ul className="list">
                {
                    watchlist.map((stock,index)=>{
                        return (
                            <WatchListItem stock={stock} key={index}/>

                        )
                        
                    })
                }
            </ul>
            <DoughnutChart data={data}/>
        </div>
        </>
    )
}
const WatchListItem=(({stock})=>{
    let [showWatchList,setShowWatchList]=useState(false);
    const handleMouseEnter=(e)=>{
        setShowWatchList(true);
    };
    const handleMouseLeave=(e)=>{
        setShowWatchList(false);
    };
    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown?"down":"up"}>{ stock.name}</p>
                <div className="item-info">
                    <span className="percent">
                        {stock.percent}
                    </span>
                    {
                        stock.isDown?(
                            <KeyboardArrowDown className="down"/>
                        ):(
                          <KeyboardArrowUp className="up"/>

                        )
                    }
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchList && <HoverEffect uid={stock.name}/>}
        </li>
    )
})
const HoverEffect=({uid})=>{
    const generalContext=useContext(GeneralContext);
     const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
    return(
        <span className="actions">
            <span>
                 <Tooltip title="Buy (B)"
                 placement="top"
                 arrow
                 TransitionComponent={Grow}
                 onClick={handleBuyClick}
                 >
                    <button className="buy">
                        B
                    </button>
            </Tooltip>
            
                 <Tooltip title="Sell(S)"
                 placement="top"
                 arrow
                 TransitionComponent={Grow}
                 >
                    <button className="sell">
                        S
                    </button>
            </Tooltip>
            <Tooltip
            title="Analytics"
            placement="top"
            arrow
            TransitionComponent={Grow}>
                <button className="action">
                <BarChartOutlined className="icon"/>
                </button>
            </Tooltip>
            <Tooltip title="more"
            placement="top"
            arrow
            TransitionComponent={Grow}>
                <button className="action">
                    <MoreHoriz className="icon"/>
                </button>
            </Tooltip>
            
            
           </span>
        </span>
    )
}