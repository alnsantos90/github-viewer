import React from 'react';
import Avatar from './Avatar';
import DadosUser from './DadosUser';
import Repos from './Repos';


// CSS
import './index.css'

export default props => {

  return (
    <main className='user-page'>
      <Avatar />
      <DadosUser />
      <Repos /> 
    </main>
  );
}
