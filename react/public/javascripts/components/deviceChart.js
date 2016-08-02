import React, {Component} from 'react';
import Chart from 'chart.js';
class DeviceChart extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.renderChart();
  }
  renderChart(){
    var context = document.getElementById('myChart');
    const data = {
      labels: [
        'MOBILE',
        'IPAD',
        'DESKTOP'
      ],
      datasets: [
        {
          data: [300,150,80],
          backgroundColor: [
            '#FFCE56',
            '#46BFBD',
            '#FF6384'
          ]
        }
      ]
    };

    var myChart = new Chart(context,{
      type: 'doughnut',
      data: data,
      options: {
        title: {
          display: true,
          text: 'DEVICE DISTRIBUTION'
        }
      }
    });
  }
  render(){
    return(
      <aside id="chart-js">
        <canvas id="myChart"></canvas>
      </aside>
    );
  }
}
export default DeviceChart;
