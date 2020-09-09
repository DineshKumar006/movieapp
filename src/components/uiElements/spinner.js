import React from "react";
import { css } from "@emotion/core";
import {ClipLoader,BarLoader,DotLoader	,BounceLoader} from "react-spinners";
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
class Spinner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:true
    };
  }


 
  render() {
    
    return (
      <div className="sweet-loading">
        <BarLoader	
          css={override}
        //   size={1000}
          width={700}
          color={"#123abc"}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

export default  Spinner