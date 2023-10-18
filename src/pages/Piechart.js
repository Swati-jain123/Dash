import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import "./Piechart.css";
class Piechart extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ['Basic Trees <br/> &nbsp 55%', 'Custom Short Pants <br/> &nbsp 31%', 'Super Hoodies <br/> &nbsp  14%'],
        Color: ["#33CC99","#000000","#CC6666"],
    
      },
   
      series: [55,31,14]

    }
  }

  render() {

    return (
      <div className="donut">
        <h5 className='mx-3'>Top Products </h5>
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380"
         />
      </div>
    );
  }
}

export default Piechart;