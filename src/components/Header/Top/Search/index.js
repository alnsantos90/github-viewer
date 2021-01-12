import React, { useState } from 'react';
import { useUsers } from '../../../../Context/Users';
import { useLoading } from '../../../../Context/Carregando';
import { useErrors } from '../../../../Context/ErrorUsers';
import axios from 'axios';

// CSS
import './index.css';

export default (props) => {
  const { setUsers } = useUsers();
  const { setCarregando } = useLoading();
  const { err, setErr } = useErrors();
  const [pesquisa, setPesquisa] = useState();

  // FUNÇÃO PARA PUXAR DADOS DA API GITHUB ( NA REFATORAÇÃO UTILIZAR ASYNC , AWAIT )
  async function getUserGitHub(user) {
    setCarregando(true);
    setErr(false);
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      const repositorys = await axios.get(
        `https://api.github.com/users/${user}/repos`,
      );
      const {
        id,
        login,
        avatar_url,
        html_url,
        repos_url,
        name,
        company,
        blog,
        location,
        bio,
      } = response.data;

      setErr(false);
      setCarregando(false);

      setUsers({
        id,
        login,
        avatar_url,
        html_url,
        repos_url,
        name,
        company,
        blog,
        location,
        bio,
        repos: repositorys.data,
      });
    } catch (error) {
      setCarregando(false);
      setErr(true);
    }
  }

  // INSERE O VALOR DO INPUT NO ESTADO DE PESQUISA
  function changeValue(e) {
    const searchUser = e.target.value;
    setPesquisa(searchUser);
  }

  // INSERE O VALOR DO INPUT NO ESTADO DE USERS ( USERS: RECEBE OS LOGIN "USER" PARA REQUISIÇÃO API )
  function handleSubmit(search) {
    setUsers({ login: search });
    getUserGitHub(search);
  }

  return (
    <form onSubmit={this.handleSubmit(pesquisa)}>
      <input
        className="search-user"
        type="text"
        placeholder={props.placeholder}
        onChange={changeValue}
      />
      <button className="orange">Pesquisar</button>
    </form>
  );
};
