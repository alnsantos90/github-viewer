import React from 'react';
import DadosItem from './DadosItem';
import { useUsers } from '../../../Context/Users'

// CSS
import './index.css'

// COMPONENT RECEBE OS DADOS DA REQUISIÇÃO API
export default props => {
  const { users } = useUsers() 
  
  return (
    <div className="box-dados-user">
      <DadosItem>
        <p className="item-name">NAME</p>
        <p className="item-title">{users.name}</p>
      </DadosItem>
      <DadosItem>
        <p className="item-name">USER</p>
        <p className="item-user">{users.login}</p>
      </DadosItem>
      <DadosItem>
        <p className="item-name">BIO</p>
        <p className="item-description">{users.bio}</p>
      </DadosItem>
      <DadosItem>
        <p className="item-name">COMPANY</p>
        <p className="item-description">{users.company}</p>
      </DadosItem>
      <DadosItem>
        <p className="item-name">LOCATION</p>
        <p className="item-description">{users.location}</p>
      </DadosItem>
      <DadosItem>
        <p className="item-name">WEBSITE</p>
        <p className="item-description">{users.blog}</p>
      </DadosItem>
    </div>
  );
}