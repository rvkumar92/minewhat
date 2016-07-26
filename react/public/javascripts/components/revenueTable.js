import React, {Component} from 'react';

class RevenueTable extends Component{
  constructor(props){
    super(props);
    this.state = {
      revenueData: getRevenueData()
    };
  }
  render(){
    return(
      <div className="revenue">
      <p className="caption">REVENUE BY ACQUISTION SOURCE</p>
      <table id="revenue-table">
        <thead>
          <tr>
            {this.state.revenueData.header.map((header,index)=>{
              return <th key={index}>{header}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {
            this.state.revenueData.tableData1.map((data,index)=>{
              return (
                <tr key={index}>
                  <td>
                    {data.company}
                  </td>
                  <td>
                    {data.price}
                  </td>
                </tr>
              )
          })
        }
        </tbody>
      </table>
      </div>
    );
  }
}

function getRevenueData(){
  return {
    "header": [
      "Sources",
      "Revenue"
    ],
    "tableData1": [
      {
        "company": "FACEBOOK.COM",
        "price": "$6090"
      },
      {
        "company": "QUORA.COM",
        "price": "$3045"
      },
      {
        "company": "TWITTER.COM",
        "price": "$2284"
      },
      {
        "company": "EMAIL",
        "price": "$1675"
      },
      {
        "company": "ORGANIC",
        "price": "$1370"
      },
      {
        "company": "DIRECT",
        "price": "$1370"
      }
    ]
  }
}
export default RevenueTable;
