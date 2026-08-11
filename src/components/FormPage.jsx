import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage({ adicionarPessoa }) {
  const [nome, setNome] = useState("");

  const navigate = useNavigate();

  function salvarPessoa(tipo, rota) {

    if (nome.trim() === "") {
      alert("Digite um nome.");
      return;
    }

    adicionarPessoa(tipo, nome);

    setNome("");

    navigate(rota);
  }

  return (
    <div className="card shadow">

      <div className="card-body">

        <h1 className="card-title mb-4">
          Cadastro Escolar
        </h1>

        <div className="mb-3">

          <label className="form-label">
            Nome
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Digite o nome"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />

        </div>

        <div className="d-flex gap-2 flex-wrap">

          <button
            className="btn btn-primary"
            onClick={() =>
              salvarPessoa("alunos", "/alunos")
            }
          >
            Salvar Aluno
          </button>

          <button
            className="btn btn-success"
            onClick={() =>
              salvarPessoa("professores", "/professores")
            }
          >
            Salvar Professor
          </button>

          <button
            className="btn btn-warning"
            onClick={() =>
              salvarPessoa("coordenadores", "/coordenadores")
            }
          >
            Salvar Coordenador
          </button>

          <button
            className="btn btn-danger"
            onClick={() =>
              salvarPessoa("diretor", "/diretor")
            }
          >
            Salvar Diretor
          </button>

        </div>

      </div>

    </div>
  );
}

export default FormPage;