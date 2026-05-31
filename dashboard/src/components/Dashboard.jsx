

import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext";
import { useEffect } from "react";
import { Widgets } from "@mui/icons-material";


export default function Dashboard({username}){
    return (
        <>
        <div className="dashboard-container">
          <GeneralContextProvider>
            <WatchList/>
          </GeneralContextProvider>
            <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary username={username}/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
    
      </div>
        </div>
        </>
    )
}