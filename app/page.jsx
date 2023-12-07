'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestauranteCardShow from './components/CardRestauranteShow';
import FilterDropdown from './components/Filter';
import Header from './components/Header';
import Footer from './components/Footer';
import CardDetalhesRestaurante from './components/CardDetalhesRestaurante';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';



function ExibirRestaurantes() {
  const [filters, setFilters] = useState({
    avaliacao: '',
    valor: '',
    tipo: '',
    pagamento: '',
  });
  const [filtredRestaurantes, setFiltredRestaurantes] = useState([]);
  const [detalhes, setDetalhes] = useState(false);
  const [restauranteSelecionado, setRestauranteSelecionado] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 8;
  const [filteredAndSearchedRestaurants, setFilteredAndSearchedRestaurants] = useState([]);

  const valorOptions = [
    { value: '', label: 'Qualquer Valor' },
    { value: 1, label: '$' },
    { value: 2, label: '$$' },
    { value: 3, label: '$$$' },
    { value: 4, label: '$$$$' }
  ];

  const tipoOptions = [
    { value: '', label: 'Qualquer tipo' },
    { value: 'Brasileira', label: 'Brasileira' },
    { value: 'Italiano', label: 'Italiana' },
    { value: 'Japonesa', label: 'Japonesa' },
    { value: 'Mexicana', label: 'Mexicana' },
    { value: 'Árabe', label: 'Árabe' },
    { value: 'Chinesa', label: 'Chinesa' },
    { value: 'Francesa', label: 'Francesa' },
    { value: 'Indiana', label: 'Indiana' },
    { value: 'Tailandesa', label: 'Tailandesa' },
    { value: 'Criativa', label: 'Criativa' },
    { value: 'Contemporânea', label: 'Contemporânea' },
    { value: 'Peruana', label: 'Peruana' },
    { value: 'Portuguesa', label: 'Portuguesa' },
    { value: 'Alemã', label: 'Alemã' },
    { value: 'Argentina', label: 'Argentina' },
    { value: 'Asiática', label: 'Asiática' },
    { value: 'Australiana', label: 'Australiana' },
    { value: 'Belga', label: 'Belga' },
    { value: 'Bistrô', label: 'Bistrô' },
    { value: 'Africana', label: 'Africana' },
    { value: 'Afrodisíaca', label: 'Afrodisíaca' },
    { value: 'Mista Oriental', label: 'Mista Oriental' },
    { value: 'Mista Ocidental', label: 'Mista Ocidental' },
    { value: 'Mista Mediterrânea', label: 'Mista Mediterrânea' },
    { value: 'Moderna', label: 'Moderna' },
    { value: 'Mista', label: 'Mista' },
    { value: 'Outra', label: 'Outra' },
  ];

  const pagamentoOptions = [
    { value: '', label: 'Qualquer forma de pagamento' },
    { value: 'dinheiro', label: 'Dinheiro' },
    { value: 'cartão de crédito', label: 'Cartão de Crédito' },
    { value: 'cartão de débito', label: 'Cartão de Débito' },
    { value: 'pix', label: 'Pix' },
    { value: 'vale alimentação', label: 'Vale Alimentação' },
    { value: 'vale refeição', label: 'Vale Refeição' },
  ];

  const avaliacaoOptions = [
    { value: "", label: 'Qualquer avaliação' },
    { value: 1, label: '1 estrela' },
    { value: 2, label: '2 estrelas' },
    { value: 3, label: '3 estrelas' },
  ];

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`/api/restaurantes`);
        let data = response.data;

        // Aplicar filtros
        if (filters.avaliacao || filters.valor || filters.tipo || filters.pagamento) {
          data = data.filter((restaurante) => {
            return (!filters.avaliacao || restaurante.avaliacao === Number(filters.avaliacao)) &&
              (!filters.valor || restaurante.valor === Number(filters.valor)) &&
              (!filters.tipo || restaurante.tipo === filters.tipo) &&
              (!filters.pagamento || restaurante.pagamento.includes(filters.pagamento));
          });
        }

        // Aplicar pesquisa
        if (searchTerm) {
          data = data.filter((restaurante) => {
            return restaurante.nome.toLowerCase().includes(searchTerm.toLowerCase());
          });
        }

        setFiltredRestaurantes(data);
        setFilteredAndSearchedRestaurants(data.slice((currentPage - 1) * restaurantsPerPage, currentPage * restaurantsPerPage));
      } catch (error) {
        console.error('Erro ao buscar restaurantes', error);
      }
    };

    fetchRestaurants();
  }, [filters, searchTerm, currentPage]);


  const indexOfLastRestaurant = currentPage * restaurantsPerPage;
  const indexOfFirstRestaurant = indexOfLastRestaurant - restaurantsPerPage;

  // Crie uma nova lista de restaurantes que será exibida na página atual
  const currentRestaurants = filtredRestaurantes.slice(indexOfFirstRestaurant, indexOfLastRestaurant);

  // Crie funções para alterar a página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);


  const abrirDetalhes = (id) => {
    if (detalhes) {
      setDetalhes(false);
      setRestauranteSelecionado(null);
    } else {
      setDetalhes(true);
      setRestauranteSelecionado(id);
    }
  };


  const handleFilterChange = (type) => (e) => {
    setFilters({ ...filters, [type]: e.target.value });
  };

  return (
    <div className=' bg-slate-900'>
      <Header />
      <hr className='bg-lbronze h-2 -mt-1' />
      <div className='flex justify-center bg-image-3 h-96'>

        <div className='flex resp-hid flex-col items-center justify-center min-h-screen  sm:px-6 lg:px-8 mb-10'>


        <img src='/titulo.png' alt='Guia de Restaurante' className=' mb-auto'/>
            <hr className='bg-lbronze h-1 mt-2 w-3/4' />
        
          <input className='bg-white rounded-lg border mb-96 border-gray-400 leading-normal resize-none w-full h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' type='text' placeholder='Pesquisar' onChange={(e) => setSearchTerm(e.target.value)} />


        </div>
      </div>
      <hr className='bg-lbronze h-2 -mt-1' />
      <article className='flex flex-col mt-10 items-center justify-center min-h-screen bg-slate-900 sm:px-6 lg:px-8 mb-10'>
        <div className='lg:flex'>
          <FilterDropdown
            label="Avaliação"
            options={avaliacaoOptions}
            onChange={handleFilterChange('avaliacao')}
          />
          <FilterDropdown
            label="Valor"
            options={valorOptions}
            onChange={handleFilterChange('valor')}
          />
          <FilterDropdown
            label="Tipo"
            options={tipoOptions}
            onChange={handleFilterChange('tipo')}
          />
          <FilterDropdown
            label="Pagamento"
            options={pagamentoOptions}
            onChange={handleFilterChange('pagamento')}
          />
          <input className='bg-lbronze lg:hidden w-full rounded-lg border border-gray-400 leading-normal resize-none h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' type='text' placeholder='Pesquisar' onChange={(e) => setSearchTerm(e.target.value)} />

        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            detalhes ? (
              <CardDetalhesRestaurante
                abrir={abrirDetalhes}
                restaurante={filtredRestaurantes.find((restaurante) => restaurante.id === restauranteSelecionado)}
              />
            ) : (
              filteredAndSearchedRestaurants.filter(restaurante => restaurante.nome.toLowerCase().includes(searchTerm.toLowerCase())).map((restaurante) => (
                <RestauranteCardShow
                  key={restaurante.id}
                  restaurante={restaurante}
                  abrirDetalhes={abrirDetalhes}
                />
              ))
            )
          }
        </ul>
        <div className='flex mx-auto mt-6'>
          <button className='bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => prevPage()} disabled={currentPage === 1}>
            <span className="button-text">Anterior</span>
            <AiOutlineArrowLeft className="button-icon" />
          </button>
          <span className='text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>{currentPage}</span>
          <button className='bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2' onClick={() => nextPage()} disabled={currentPage === Math.ceil(filtredRestaurantes.length / restaurantsPerPage)}>
            <span className="button-text">Próximo</span>
            <AiOutlineArrowRight className="button-icon" />
          </button>
        </div>
      </article>

      <hr className='bg-lbronze h-2 -mt-1' />
      <Footer />
    </div>
  );
}

export default ExibirRestaurantes;
