import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {computed} from 'mobx';

@observer
class RevenueTable extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="revenue">
      <p className="caption">REVENUE BY ACQUISTION SOURCE</p>
      <table id="revenue-table">
        <thead>
          <tr>
            {this.props.revenueData.header.map((header,index)=>{
              return <th key={index}>{header}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {
            this.props.revenueData.tableData1.map((data,index)=>{
              return (
                <tr key={index}>
                  <td>
                    {data.company}
                  </td>
                  <td>
                    ${data.price}
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

export default RevenueTable;
