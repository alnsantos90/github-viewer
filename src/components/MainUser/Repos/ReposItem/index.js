import React from 'react';

// CSS
import './index.css'

// COMPONENTE RECEBE AS PROPS DOS DADOS PELA REQUISIÇÃO API 
export default props => {
  return (
    <div className="repos-item-box">
      <div className='name-box-repos'>
          <p className="title-repo">{props.titleRepo}</p>
         <a href={props.link}><p className="name-repo">{props.nameRepo}</p></a>
      </div>
      <div className='desc-box-repos'>
          <p className="desc-title-repo">{props.descTitle}</p>
          <p className="desc-repo">{props.descRepo}</p>
      </div>
    </div>
  );
}