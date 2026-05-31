import axios, { all } from "axios";
import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./vericalChart";

export default function Holdings() {
  let [allHolding, setAllHolding] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/allholding").then((res) => {
      setAllHolding(res.data);
    });
  }, []);
  const labels = allHolding.map((subary)=>subary["name"]);
  const data={
    labels,
    datasets:[
        {
      label: 'Stock Price',
      data: allHolding.map((stock) => stock.price),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    ]
  };
  return (
    <>
      <h3 className="title">Holding({allHolding.length})</h3>

      <div className="order-table">
        <table>

          {/* HEADER */}
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {allHolding.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0;
              const porfClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg}</td>
                  <td>{stock.price}</td>
                  <td>{curValue}</td>
                  <td className={porfClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={porfClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875 <span>55</span>
          </h5>
          <p>Total investment</p>
        </div>

        <div className="col">
          <h5>
            24,534 <span>95</span>
          </h5>
          <p>Current value</p>
        </div>

        <div className="col">
          <h5>53,534(+5.20)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
}