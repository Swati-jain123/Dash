import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Barcharts.css";

function Barcharts() {
  const [state, setState] = useState({

    series: [
        {
          name: "Guest",
          data: [500,375,200,400],
        },
        {
          name: "User",
          data: [400,450,300,350],
        },
      ],
    options: {
      colors: ["#33CC99", "#CC6666"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["week 1", "week 2","week 3","week 4"],
      },
    },

  });
  return (
    <div className="bar">
      <div >
        <h7 className="d-flex mx-3" >Activites</h7>
        <h7 className="mx-3">May-June</h7>
        </div>
      <div className="">
        <div >
          <Chart
            options={state.options}
            series={state.series}
            
            type="bar"
            width="90%" 
             height="200px"
           
          
          />
        </div>
    
      </div>
    </div>
  );
}

export default Barcharts;