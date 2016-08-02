import React,{Component} from 'react';
import RevenueTable from './revenueTable.js';
import DeviceChart from './deviceChart.js';
import TopProducts from './topProducts.js';
import {observable,action} from 'mobx'

const appState = observable({
  revenueData : {
    header: [
      "Sources",
      "Revenue"
    ],
    "tableData1": [
      {
        "company": "FACEBOOK.COM",
        "price": "6090"
      },
      {
        "company": "QUORA.COM",
        "price": "3045"
      },
      {
        "company": "TWITTER.COM",
        "price": "2284"
      },
      {
        "company": "EMAIL",
        "price": "1675"
      },
      {
        "company": "ORGANIC",
        "price": "1370"
      },
      {
        "company": "DIRECT",
        "price": "1370"
      }
    ]
  },
  topProductData : {
    data:[
      {
        "words": "Views",
        "number": "10989"
      },
      {
        "words": "Purchases",
        "number": "8908"
      },
      {
        "words": "Conversion Rate",
        "number": "3.5%"
      },
      {
        "words": "Revenue",
        "number": "$54274"
      }
    ]
  }
})

class Assessment extends Component{
  render(){
    return(
      <div>
      <button onClick={this.handleReduce} title="reduce by 20%">Reduce</button>
        <RevenueTable revenueData={appState.revenueData}/>
        <DeviceChart />
        <TopProducts productData={appState.topProductData}/>
      </div>)
  }
  handleReduce(){
    appState.reduceRevenue();
  }
}

appState.reduceRevenue = action(function(){
  this.revenueData.tableData1.map((data,index)=>{
    data.price = Math.ceil(parseInt(data.price) * 0.2);
    return data;
  });
  this.topProductData.data.map((product,index)=>{
    if(product.number.includes("$")){
      let revenue = product.number.split("$");
      product.number = "$"+Math.ceil(parseInt(revenue[1]) * 0.2);
    }
    return product;
  });
})

export default Assessment;
