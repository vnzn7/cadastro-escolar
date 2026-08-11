import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import FormPage from "./components/FormPage";
import TablePage from "./components/TablePage";

function App() {
  const [pessoas, setPessoas] = useState({
    alunos: [],
    professores: [],
    coordenadores: [],
    diretor: []
  });

  function adicionarPessoa(tipo, nome) {
    setPessoas((estadoAtual) => ({
      ...estadoAtual,
      [tipo]: [...estadoAtual[tipo], nome]
    }));
  }

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">

          <Link className="navbar-brand" to="/">
            Cadastro Escolar
          </Link>

          <div className="navbar-nav d-flex flex-row gap-3">

            <Link className="nav-link" to="/">
              Cadastrar
            </Link>

            <Link className="nav-link" to="/alunos">
              Alunos
            </Link>

            <Link className="nav-link" to="/professores">
              Professores
            </Link>

            <Link className="nav-link" to="/coordenadores">
              Coordenadores
            </Link>

            <Link className="nav-link" to="/diretor">
              Diretor
            </Link>

          </div>
        </div>
      </nav>

      <main className="container mt-4">

        <Routes>

          <Route
            path="/"
            element={
              <FormPage adicionarPessoa={adicionarPessoa} />
            }
          />

          <Route
            path="/alunos"
            element={
              <TablePage
                titulo="Alunos"
                pessoas={pessoas.alunos}
              />
            }
          />

          <Route
            path="/professores"
            element={
              <TablePage
                titulo="Professores"
                pessoas={pessoas.professores}
              />
            }
          />

          <Route
            path="/coordenadores"
            element={
              <TablePage
                titulo="Coordenadores"
                pessoas={pessoas.coordenadores}
              />
            }
          />

          <Route
            path="/diretor"
            element={
              <TablePage
                titulo="Diretor"
                pessoas={pessoas.diretor}
              />
            }
          />

        </Routes>

      </main>
    </>
  );
}

export default App;