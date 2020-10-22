// COMPONENTS
import React from 'react';

// CSS
import './index.css'

// COMPONENT BUTTON ( UTILIZAR NA REFATORAÇÃO )
export default props => {
  return (
    <button className="orange">{props.label}</button>
  );
}