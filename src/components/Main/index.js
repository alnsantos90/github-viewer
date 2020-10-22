// COMPONENTS
import React from 'react';
import BoxSearch from './BoxSearch'
import Logo from './Logo';

// CSS
import './index.css'

// COMPONENT RIGHT ( INPUT DE PESQUISA DE USUÁRIO )
export default () => {
  return (
    <main className='home-page'>
      <BoxSearch 
        title='ENCONTRE NO GITHUB'
        placeholder='Ex: alnsantos90' />
      <Logo 
        largura='165px' 
        altura='55px' />
    </main>
  );
}
