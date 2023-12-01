import React from 'react';

const RestauranteForm = ({
  restaurante,
  handleChange,
  handleCheckboxChange,
  handleSubmit,
  errors,
  isEditing,
  handleEdit,
  formRef
}) => {

    const diasFuncionamento = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    const formasPagamento = ["Dinheiro", "Cartão de Crédito", "Cartão de Débito", "PIX", "Vale Refeição"];


  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 className="text-3xl font-bold text-center mb-8">Cadastro de Restaurante</h2>
    <form onSubmit={isEditing ? () => handleEdit(restaurante.id, restaurante) : handleSubmit} ref={formRef}>
      {/* Nome */}
      <div className="mb-4">
      <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={restaurante.nome}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.nome && <p className="error-message">{errors.nome}</p>}
      </div>

      {/* Imagem */}
      <div>
        <label htmlFor="imagem" className="block text-gray-700 text-sm font-bold mb-2">Imagem:</label>
        <input
          id="imagem"
          name="img"
          type="text"
          value={restaurante.img}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.img && <p className="error-message">{errors.img}</p>}
      </div>

      {/* Localização */}
      <div>
        <label htmlFor="localizacao" className="block text-gray-700 text-sm font-bold mb-2">Localização:</label>
        <input
          id="localizacao"
          name="loc"
          type="text"
          value={restaurante.loc}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.loc && <p className="error-message">{errors.loc}</p>}
      </div>

      {/* Valor */}
      <div>
        <label htmlFor="valor" className="block text-gray-700 text-sm font-bold mb-2">Valor:</label>
        <input
          id="valor"
          name="valor"
          type="text"
          value={restaurante.valor}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.valor && <p className="error-message">{errors.valor}</p>}
      </div>

      {/* Tipo */}
      <div>
        <label htmlFor="tipo" className="block text-gray-700 text-sm font-bold mb-2">Tipo:</label>
        <input
          id="tipo"
          name="tipo"
          type="text"
          value={restaurante.tipo}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.tipo && <p className="error-message">{errors.tipo}</p>}
      </div>

      {/* Chefe */}
      <div>
        <label htmlFor="chefe" className="block text-gray-700 text-sm font-bold mb-2">Chefe:</label>
        <input
          id="chefe"
          name="chefe"
          type="text"
          value={restaurante.chefe}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.chefe && <p className="error-message">{errors.chefe}</p>}
      </div>

      {/* Descrição */}
      <div>
        <label htmlFor="descricao" className="block text-gray-700 text-sm font-bold mb-2">Descrição:</label>
        <input
          id="descricao"
          name="descricao"
          type="text"
          value={restaurante.descricao}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.descricao && <p className="error-message">{errors.descricao}</p>}
      </div>

      {/* Funcionamento */}
      {/* Assumindo que você deseja manter os checkboxes para dias de funcionamento */}
      <div className='lg:flex'>
      <fieldset className='ml-36 mt-5 mb-5  '>
        <legend className="block text-gray-700 text-sm font-bold mb-2"> Funcionamento</legend>
        {diasFuncionamento.map(dia => (
          <div key={dia}>
            <input
              type="checkbox"
              id={`func-${dia}`}
              name="funcionamento"
              value={dia}
              checked={restaurante.funcionamento.includes(dia)}
              onChange={handleCheckboxChange}
             
            />
            <label htmlFor={`func-${dia}`}>{dia}</label>
          </div>
        ))}
      </fieldset>
      <hr className="bg-black h-56 w-1 mt-3 ml-24" />

      {/* Pagamento */}
      {/* Assumindo que você deseja manter os checkboxes para formas de pagamento */}
      <fieldset className=' ml-24 mt-5 mb-5'>
        <legend className="block text-gray-700 text-sm font-bold mb-2">Formas de Pagamento</legend>
        {formasPagamento.map(forma => (
          <div key={forma}>
            <input
              type="checkbox"
              id={`pag-${forma}`}
              name="pagamento"
              value={forma}
              checked={restaurante.pagamento.includes(forma)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={`pag-${forma}`}>{forma}</label>
          </div>
        ))}
      </fieldset>
      </div>

      {/* Avaliação */}
      
      <div>
        <label htmlFor="avaliacao" className="block text-gray-700 text-sm font-bold mb-2">Avaliação:</label>
        <input
          id="avaliacao"
          name="avaliacao"
          type="number"
          value={restaurante.avaliacao}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.avaliacao && <p className="error-message">{errors.avaliacao}</p>}
      </div>

      {/* Data */}
      <div>
        <label htmlFor="data" className="block text-gray-700 text-sm font-bold mb-2">Data:</label>
        <input
          id="data"
          name="data"
          type="date"
          value={restaurante.data}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.data && <p className="error-message">{errors.data}</p>}
      </div>
    

      {
        isEditing
        ? <button  className="w-full bg-blue-950 hover:bg-gray-950  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleEdit(restaurante.id, restaurante)} >Atualizar</button>
        : <button  className="w-full bg-blue-950 hover:bg-gray-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSubmit}>Cadastrar</button>
      }
    </form>
  </div>
  );
};

export default RestauranteForm;
