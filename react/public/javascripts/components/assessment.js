import React,{Component} from 'react';
import RevenueTable from './revenueTable.js';
import DeviceChart from './deviceChart.js';
import TopProducts from './topProducts.js';

class Assessment extends Component{
  render(){
    return(
      <div>
        <RevenueTable />
        <DeviceChart />
        <TopProducts />
      </div>)
  }
}

export default Assessment;
