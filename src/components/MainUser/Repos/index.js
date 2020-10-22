// COMPONENTS
import React from 'react';
import ReposItem from './ReposItem';
import { useUsers } from '../../../Context/Users';

// CSS
import './index.css'

// COMPONENT RECEBE OS DADOS DOS REPOSITORIOS PELA REQUISIÇÃO API
export default propos => {
  const { users } = useUsers() 
  return (
    
    <div className="box-repos">
      <h2 className='repos-title'>Repositorys</h2> 

      {/* SE O REPOSITÓRIO NÃO TIVER OS DADOS DESCRIPTION, RENDERIZA SEM DESCRIÇÃO */}
      {
        users.repos.map(repo => (
            !repo.description ? 
            <ReposItem
            key={repo.id} 
            titleRepo='NAME'
            nameRepo={repo.full_name}
            />  
              : <ReposItem
              key={repo.id} 
              titleRepo='NAME'
              nameRepo={repo.full_name}
              descTitle='DESC'
              descRepo={repo.description}
              link={repo.html_url}
            />
        ))
      }
    </div>
  );
}
