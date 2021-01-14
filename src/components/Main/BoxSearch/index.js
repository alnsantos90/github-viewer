// COMPONENTS
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUsers } from '../../../Context/Users';

// CSS
import './BoxSearch.css';

export default (props) => {
  const { setUsers } = useUsers();
  const [searchUser, setSearchUser] = useState('');

  // INSERE O VALOR DO INPUT NO ESTADO DE SEARCHUSERS
  function getInputValue(e) {
    const inputValue = e.target.value;
    setSearchUser(inputValue);
    console.log(searchUser);
  }

  // INSERE O VALOR DO INPUT NO ESTADO DE USERS ( USERS: RECEBE OS LOGIN "USER" PARA REQUISIÇÃO API )
  function handleSearchUsers() {
    setUsers({
      login: searchUser,
    });
  }

  return (
    <form action="/user/" onSubmit={handleSearchUsers}>
      <div className="box-search">
        <h2 className="title-search">{props.title}</h2>
        <input
          className="search-input"
          type="text"
          onChange={getInputValue}
          placeholder={props.placeholder}
        />
        <div className="button-box">
          <Link to={'/user/'} className="button-search" onClick={handleSearchUsers}>
            PESQUISAR USUÁRIO
          </Link>
        </div>
      </div>
    </form>
  );
};
