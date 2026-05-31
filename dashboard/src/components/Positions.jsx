import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Positions() {
  let [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allposition").then((res) => {
      setAllPositions(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allPositions.map((product, index) => {
              const curValue = product.price * product.qty;
              const profit = curValue - product.avg * product.qty;
              const isProfit = profit >= 0;

              const profitClass = isProfit ? "profit" : "loss";
              const dayClass = product.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{product.product}</td>
                  <td>{product.name}</td>
                  <td>{product.qty}</td>
                  <td>{product.avg}</td>
                  <td>{product.price}</td>
                  <td className={profitClass}>{profit.toFixed(2)}</td>
                  <td className={dayClass}>{product.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}