import React from 'react';

// CSS
import './index.css';

export default () => {
  return (
    <main className="error-page">
      <div className="container-error">
        <div className="box-error">
          <h1 className="title-error">Error</h1>
          <h4 className="sub-error">
            Não conseguimos localizar o usuário informado, verifique o campo de
            busca e tente novamente.
          </h4>
        </div>
      </div>
    </main>
  );
};
