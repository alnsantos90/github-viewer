// COMPONENTS
import React from 'react';
import Folhas from '../Folhas';
import folha1 from '../../../img/folha1.png'
import folha2 from '../../../img/folha2.png'
import folha3 from '../../../img/folha3.png'
import folha4 from '../../../img/folha4.png'


//  COMPONENTE ANIMAÇÃO FOLHAS
export default props => {
  return (
    <>
       {/* FOLHAS - TOP */}
       <Folhas 
        cssName={'folha1'}
        img={folha1}
        largura='60px'
      />
      <Folhas 
        cssName={'folha2'}
        img={folha2}
        largura='60px'
      />
      <Folhas 
        cssName={'folha3'}
        img={folha3}
        largura='80px'
      />
      <Folhas 
        cssName={'folha4'}
        img={folha4}
        largura='60px'
      />

      {/* FOLHAS - BOTTOM */}
      <Folhas 
        cssName={'folha5'}
        img={folha1}
        largura='60px'
      />

      <Folhas 
        cssName={'folha6'}
        img={folha4}
        largura='60px'
      />

      <Folhas 
        cssName={'folha7'}
        img={folha2}
        largura='60px'
      />  

      <Folhas 
        cssName={'folha8'}
        img={folha2}
        largura='80px'
      /> 
      
      <Folhas 
        cssName={'folha10'}
        img={folha4}
        largura='80px'
      /> 

      <Folhas 
        cssName={'folha11'}
        img={folha3}
        largura='60px'
      />   

    </>
  );
}