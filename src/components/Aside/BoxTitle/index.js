import React from 'react';

// CSS
import './BoxTitle.css'

export default props => {
  return (
    <div className="box-title">
      <h1 className="title">{props.title}</h1>
      <p className="description">{props.description}</p>
    </div>
  )
}