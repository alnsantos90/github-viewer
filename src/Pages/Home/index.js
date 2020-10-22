// COMPONENTS
import React from 'react';
import Aside from '../../components/Aside';
import Main from '../../components/Main';

// CSS
import './index.css'

// RENDERIZA A PÁGINA HOME
export default props => {
  return(
    <div className='home-container'>
      <Aside />
      <Main />
    </div>
  );
}