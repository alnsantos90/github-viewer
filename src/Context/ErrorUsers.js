import React, { createContext, useState, useContext } from 'react';

// CRIAÇÃO DE CONTEXTO GLOBAL
const ErrorsContext = createContext();

// CRIAÇÃO DE HOOK PERSONALIZADO
export function useErrors() {
  const context = useContext(ErrorsContext);
  const { err, setErr } = context;
  return { err, setErr };
}

// CRIAÇÃO FUNÇÃO QUE REPASSA ESTADO PARA TODOS OS FILHOS
export default function UsersProvider({ children }) {
  const [err, setErr] = useState(false);

  // RETORNA OS OS ESTADOS GLOBAIS
  return (
    <ErrorsContext.Provider
      value={{
        err,
        setErr,
      }}
    >
      {children}
    </ErrorsContext.Provider>
  );
}
