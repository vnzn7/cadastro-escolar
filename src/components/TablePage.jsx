function TablePage({ titulo, pessoas }) {
  return (
    <div>

      <h1 className="mb-4">
        {titulo}
      </h1>

      <table className="table table-striped table-hover">

        <thead className="table-dark">

          <tr>
            <th>#</th>
            <th>Nome</th>
          </tr>

        </thead>

        <tbody>

          {pessoas.length > 0 ? (

            pessoas.map((pessoa, index) => (

              <tr key={index}>

                <td>
                  {index + 1}
                </td>

                <td>
                  {pessoa}
                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="2"
                className="text-center"
              >
                Nenhum cadastro encontrado.
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default TablePage;