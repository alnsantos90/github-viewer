// COMPONENTS
import React from 'react';
import { useUsers } from '../../../Context/Users';

// CSS
import './index.css'

// COMPONENTE RECEBE O AVATAR_URL DE REQUISIÇÃO API
export default props => {
  const { users } = useUsers() 
  return (
    <>
      <div className="box-avatar">
        <img src={users.avatar_url} width='100%' alt=""/>
        <a href={users.html_url} className="visit-github">Visit on GitHub.com</a>
      </div>
      
    </>
  );
}
