// COMPONENTS
import React from 'react';
import BoxTitle from './BoxTitle'
import BgAnimate from './BgAnimate';

// CSS
import './index.css'

// COMPONENT ASIDE, "GIT HUB VIEWER"
export default () => {
  return (
    <div className="aside-box">

      {/* BG ANIMATE */}
      <BgAnimate />

      {/* BOX TITLE ASIDE */}
      <BoxTitle 
          title='Github Viewer'
          description='Encontre usuários, repositórios e conheça de perto o trabalho dos desenvolvedores no github'
      />
   </div>
  );
}