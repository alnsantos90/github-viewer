// COMPONENTS
import React from 'react';
import FindUser from './FindUser';
import BtnSearch from './Search';

// CSS
import './index.css'

// COMPONENT TOP ( TITULO E BOTÃO DE PESQUISA )
export default props => {
  return (
    <div className="box-user">
      <div className="left-content">
        <FindUser 
          title='Github Viewer'
        />
      </div>
      <div className="right-content">
        <BtnSearch 
          placeholder='Ex: alnsantos90'
        />
      </div>
    </div>
  );
}
