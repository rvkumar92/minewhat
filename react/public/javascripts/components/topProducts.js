import React, {Component} from 'react';
import lodash from 'lodash';
class TopProducts extends Component{
  constructor(props){
    super(props);
    this.state = {
      productData : getProductData()
    }
  }
  render(){
    var products = lodash.times(4,(index)=>{
      return(
          <div className="card" key={index}>
            <div className="card-head">
              <div className="badge"><span>{index+1}</span></div>
              <img src="/dist/images/boot.jpg" />
              <figcaption>TWISTED BOOTS</figcaption>
              <bdi><span style={{color:'green'}}>+154</span><span style={{color:'#d6d6d6'}}>Views 2 days ago</span></bdi>
            </div>
            <div className="card-body">
              <table id="productDetails">
                <tbody>
                  {
                    this.state.productData.data.map((data,index)=>{
                      return(
                        <tr key={index}>
                          <td className="color">{data.words}</td>
                          <td className="pull-right">{data.number}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <br />
                <label className="pull-center color">&#8963;</label>
            </div>
          </div>
      )
    });
    return(
      <div id="product">
      <p className="caption">TOP PRODUTCS</p>
        {products}
      </div>
    );
  }
}

function getProductData(){
  return{
    data: [
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
}
export default TopProducts;
