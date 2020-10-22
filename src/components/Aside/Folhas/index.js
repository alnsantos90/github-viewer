// COMPONENTS
import React from 'react';

// CSS
import './index.css'

export default props => {
  return (
    <div className={props.cssName}>
      <img src={props.img} width={props.largura} height={props.altura} alt=""/>
    </div>
  );
}
