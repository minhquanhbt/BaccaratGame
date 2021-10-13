import React from "react";
import LoadingGif from '../../assets/images/global-loading.gif';


const Loading  = (props) =>{
  const { isOpenLoading } = props;
  console.log(isOpenLoading,'isOpenLoading');
  
  return isOpenLoading ? (
    <div className="loading-wrapper">
      <div className="loading-box">
        <img className="loading__image" src={LoadingGif} alt="" />
      </div>
    </div>
  ) : null;
}

Loading.defaultProps={
  isOpenLoading: false,
}


export default Loading;
