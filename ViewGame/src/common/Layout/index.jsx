import React from "react";


function LayOut(props) {
  const { children, name } = props;
  return <div className={name}>
  {children}
</div>;
}

export default LayOut;
