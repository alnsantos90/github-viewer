import React from 'react';

// CSS
import './index.css'

export default props => {
  return (
    <div className="item-user-box">
      {props.children}
    </div>
  );
}
