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

  const diasFuncionamento = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];
  const formasPagamento = ["Dinheiro", "Cartão de Crédito", "Cartão de Débito", "PIX", "Vale Refeição", "Vale Alimentação"];
  const tipoOptions = [
    {value:'', label: 'Qualquer tipo'},
    { value: 'Brasileira', label: 'Brasileira' },
    { value: 'Italiana', label: 'Italiana' },
    { value: 'Japonesa', label: 'Japonesa' },
    { value: 'Mexicana', label: 'Mexicana' },
    { value: 'Árabe', label: 'Árabe' },
    { value: 'Chinesa', label: 'Chinesa' },
    { value: 'Francesa', label: 'Francesa' },
    { value: 'Indiana', label: 'Indiana' },
    { value: 'Tailandesa', label: 'Tailandesa' },
    {value: 'Criativa', label: 'Criativa'},
    {value: 'Contemporânea', label: 'Contemporânea'},
    {value: 'Peruana', label: 'Peruana'},
    {value: 'Portuguesa', label: 'Portuguesa'},
    {value: 'Alemã', label: 'Alemã'},
    {value: 'Argentina', label: 'Argentina'},
    {value: 'Asiática', label: 'Asiática'},
    {value: 'Australiana', label: 'Australiana'},
    {value: 'Belga', label: 'Belga'},
    {value: 'Bistrô', label: 'Bistrô'},
    {value: 'Africana', label: 'Africana'},
    {value: 'Afrodisíaca', label: 'Afrodisíaca'},
    {value: 'Mista Oriental', label: 'Mista Oriental'},
    {value: 'Mista Ocidental', label: 'Mista Ocidental'},
    {value: 'Mista Mediterrânea', label: 'Mista Mediterrânea'},
    {value: 'Moderna', label: 'Moderna'},
    {value: 'Mista', label: 'Mista'},
    { value: 'Outra', label: 'Outra' },
  ];


  return (
    <div className="container mx-auto p-6 w-2/3 bg-transparente mb-10 opacity-80 shadow-lg rounded-lg">
      
      <form  ref={formRef}>
        {/* Nome */}
        <div className="mb-4">
          <label htmlFor="nome" className="block text-white text-base font-bold mb-0 ">Nome:</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={restaurante.nome}
            onChange={handleChange}
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none bg-bronze-2 border-dbronze focus:shadow-outline"
          />
          {errors.nome && <p className="error-message">{errors.nome}</p>}
        </div>

        {/* Imagem */}
        <div>
          <label htmlFor="imagem" className="block text-white text-base font-bold mb-0">Imagem:</label>
          <input
            id="imagem"
            name="img"
            type="text"
            value={restaurante.img}
            onChange={handleChange}
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none bg-bronze-2 border-dbronze focus:shadow-outline"
          />
          {errors.img && <p className="error-message">{errors.img}</p>}
        </div>

        {/* Localização */}
        <div>
          <label htmlFor="localizacao" className="block text-white text-base font-bold mb-0 mt-4">Localização:</label>
          <input
            id="localizacao"
            name="loc"
            type="text"
            value={restaurante.loc}
            onChange={handleChange}
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none bg-bronze-2 border-dbronze focus:shadow-outline"
          />
          {errors.loc && <p className="error-message">{errors.loc}</p>}
        </div>

        {/* Valor */}
        <div>
          <label htmlFor="valor" className="block text-white text-base font-bold mb-0 mt-4">Valor:</label>
          <input
            id="valor"
            name="valor"
            type="text"
            value={restaurante.valor}
            onChange={handleChange}
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none bg-bronze-2 border-dbronze focus:shadow-outline"
          />
          {errors.valor && <p className="error-message">{errors.valor}</p>}
        </div>

        {/* Tipo */}
        <div>
          <label htmlFor="tipo" className="block text-white text-base font-bold mb-0 mt-4">Tipo:</label>
          <select
            id="tipo"
            name="tipo"
            value={restaurante.tipo}
            onChange={handleChange}
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none bg-bronze-2 border-dbronze focus:shadow-outline"
          >
            <option value="">Selecione um tipo</option>
            {tipoOptions.map((option) => (
              <option key={option.value} value={option.value} >
                {option.label}
              </option>
            ))}
          </select>
          {errors.tipo && <p className="error-message">{errors.tipo}</p>}
        </div>

        {/* Chefe */}
        <div>
          <label htmlFor="chefe" className="block text-white text-base font-bold mb-0 mt-4">Chefe:</label>
          <input
            id="chefe"
            name="chefe"
            type="text"
            value={restaurante.chefe}
            onChange={handleChange}
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none bg-bronze-2 border-dbronze focus:shadow-outline"
          />
          {errors.chefe && <p className="error-message">{errors.chefe}</p>}
        </div>

        {/* Descrição */}
        <div>
          <label htmlFor="descricao" className="block text-white text-base font-bold mb-0 mt-4">Descrição:</label>
          <input
            id="descricao"
            name="descricao"
            type="text"
            value={restaurante.descricao}
            onChange={handleChange}
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none bg-bronze-2 border-dbronze focus:shadow-outline"
          />
          {errors.descricao && <p className="error-message">{errors.descricao}</p>}
        </div>

        {/* Funcionamento */}
        {/* Assumindo que você deseja manter os checkboxes para dias de funcionamento */}
        <div className='lg:flex lg:ml-4'>
          <fieldset className='ml-36 mt-5 mb-5 -ml5 ml30'>
            <legend className="block text-white text-lg font-bold mb-2"> Funcionamento</legend>
            {diasFuncionamento.map(dia => (
              <div key={dia} className='text-white'>
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
          <hr className="bg-bronze lg:h-56 lg:w-1 w-full h-1 mt-3 lg:ml-24" />

          {/* Pagamento */}
          {/* Assumindo que você deseja manter os checkboxes para formas de pagamento */}
          <fieldset className=' ml-24 mt-5 mb-5 ml30'>
            <legend className="block text-white text-lg font-bold mb-2">Formas de Pagamento</legend>
            {formasPagamento.map(forma => (
              <div key={forma} className='text-white'>
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
          <label htmlFor="avaliacao" className="block text-white text-base font-bold mb-0 mt-4">Avaliação:</label>
          <input
            id="avaliacao"
            name="avaliacao"
            type="number"
            value={restaurante.avaliacao}
            onChange={handleChange}
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none bg-bronze-2 border-dbronze focus:shadow-outline"
          />
          {errors.avaliacao && <p className="error-message">{errors.avaliacao}</p>}
        </div>

        {/* Data */}
        <div>
          <label htmlFor="data" className="block text-white text-base font-bold mb-0 mt-4">Data:</label>
          <input
            id="data"
            name="data"
            type="date"
            value={restaurante.data}
            onChange={handleChange}
            className="shadow appearance-none border rounded-xl w-full py-2 px-3 text-slate-100 leading-tight focus:outline-none bg-bronze-2 border-dbronze focus:shadow-outline"
          />
          {errors.data && <p className="error-message">{errors.data}</p>}
        </div>

        <div className='mx-auto mt-4 lg:ml-80'>
        {
          isEditing
            ? <button className="w-1/2 mx-auto bg-[#78594D]  hover:bg-[#7D665C] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline" onClick={() => handleEdit(restaurante.id, restaurante)} >Atualizar</button>
            : <button className="w-1/2 mx-auto bg-[#78594D]   hover:bg-[#7D665C] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline -ml-8" onClick={handleSubmit}>Cadastrar</button>
        }
      </div>
      </form>
    </div>
  );
};

export default RestauranteForm;
