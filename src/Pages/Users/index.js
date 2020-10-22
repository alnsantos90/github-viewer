// COMPONENTS
import React, { useEffect } from 'react';
import { useUsers } from '../../Context/Users';
import { useLoading } from '../../Context/Carregando';
import { useErrors } from '../../Context/ErrorUsers';
import axios from 'axios';
import Top from '../../components/Header/Top';
import MainUser from '../../components/MainUser';
import Error from '../../components/MainUser/Error';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';

// CSS
import './index.css';

// RENDERIZA A PÁGINA USERS
const Usuario = (props) => {
  const { users, setUsers } = useUsers();
  const { carregando, setCarregando } = useLoading();
  const { err, setErr } = useErrors();

  // PUXA OS DADOS DA API COM O USUÁRIO DIGITADO NO INPUT
  useEffect(() => {
    getUserGitHub(users.login);
  }, [setUsers]);

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

  return (
    <>
      <div className="main-container">
        <header className="header-user">
          <Top />
        </header>
        <div className="line-user"></div>
        {carregando && <Loading />}
        {!carregando && users.id && <MainUser />}
        {!carregando && !users.id && err && <Error />}
      </div>
      <Footer />
    </>
  );
};

export default Usuario;
