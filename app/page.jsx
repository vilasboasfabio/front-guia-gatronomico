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
  //essa function serve para fazer a paginação
  const [filters, setFilters] = useState({
    avaliacao: '',
    valor: '',
    tipo: '',
    pagamento: '',
  });
  //as categorias de filtro que aparecem no dropdown
  const [filtredRestaurantes, setFiltredRestaurantes] = useState([]);
  // o array de categorias filtrados  
  const [detalhes, setDetalhes] = useState(false);
  // o estado que controla se o modal de detalhes está aberto ou não
  const [restauranteSelecionado, setRestauranteSelecionado] = useState(null);
  // o estado que controla qual restaurante está selecionado
  const [searchTerm, setSearchTerm] = useState('');
  // o estado que controla o que está sendo pesquisado
  const [currentPage, setCurrentPage] = useState(1);
  // o estado que controla a página atual
  const restaurantsPerPage = 8;
  // o número de restaurantes por página
  const [filteredAndSearchedRestaurants, setFilteredAndSearchedRestaurants] = useState([]);
  // o array de restaurantes filtrados e pesquisados
  const [isLoading, setIsLoading] = useState(true);
  // o estado que controla se a página está carregando ou não

  const valorOptions = [
    { value: '', label: 'Qualquer Valor' },
    { value: 1, label: '$' },
    { value: 2, label: '$$' },
    { value: 3, label: '$$$' },
    { value: 4, label: '$$$$' }
  ];
  //array de possiveis valores nos restaurantes

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
  // array de possiveis tipos de restaurantes

  const pagamentoOptions = [
    { value: '', label: 'Qualquer forma de pagamento' },
    { value: 'Dinheiro', label: 'Dinheiro' },
    { value: 'Cartão de crédito', label: 'Cartão de Crédito' },
    { value: 'Cartão de débito', label: 'Cartão de Débito' },
    { value: 'Pix', label: 'Pix' },
    { value: 'Vale alimentação', label: 'Vale Alimentação' },
    { value: 'Vale refeição', label: 'Vale Refeição' },
  ];
  // array de possiveis formas de pagamento
  const avaliacaoOptions = [
    { value: "", label: 'Qualquer avaliação' },
    { value: 1, label: '1 estrela' },
    { value: 2, label: '2 estrelas' },
    { value: 3, label: '3 estrelas' },
  ];
  // array de possiveis avaliações

  useEffect(() => {
    const fetchRestaurants = async () => {
      // fetchRestaurants é uma função assíncrona que busca os restaurantes na API
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/restaurantes?avaliação=${filters.avaliacao}&valor=${filters.valor}&tipo=${filters.tipo}&pagamento=${filters.pagamento}&nome=${searchTerm}`);
        // response  serve para solicitar os dados da api
        let data = response.data;
        //data recebe os dados na api

        // Aplicar filtros
        if (filters.avaliacao || filters.valor || filters.tipo || filters.pagamento) {
          data = data.filter((restaurante) => {
            return (!filters.avaliacao || Number(restaurante.avaliacao) === Number(filters.avaliacao)) &&
              (!filters.valor || Number(restaurante.valor) === Number(filters.valor)) &&
              (!filters.tipo || restaurante.tipo === filters.tipo) &&
              (!filters.pagamento || restaurante.pagamento.some(p => p.toLowerCase() === filters.pagamento.toLowerCase())); // Verifica se a forma de pagamento está no array
          });
        }

        // Aplicar pesquisa
        if (searchTerm) {
          data = data.filter((restaurante) => {
            return restaurante.nome.toLowerCase().includes(searchTerm.toLowerCase());
          });
        }

        setFiltredRestaurantes(data);
        // mostra os restaurantes filtrados
        setFilteredAndSearchedRestaurants(data.slice((currentPage - 1) * restaurantsPerPage, currentPage * restaurantsPerPage));
        // setFilteredAndSearchedRestaurants mostra os restaurantes filtrados e pesquisados
        setIsLoading(false);
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

// abrir detalhes do restaurante selecionado
  const abrirDetalhes = (id) => {
    if (detalhes) {
      setDetalhes(false);
      setRestauranteSelecionado(null);
      document.body.style.overflow = 'auto'; // Enable scrolling on body
    } else {
      setDetalhes(true);
      setRestauranteSelecionado(id);
      document.body.style.overflow = 'hidden'; // Disable scrolling on body
    }
  };


  const handleFilterChange = (type) => (e) => {
    setFilters({ ...filters, [type]: e.target.value });
  };

// serve para mostrar o loading
  function LoadingComponent() {
    return <img src='/loading1.webp' alt='Loading' className='w-1/5 mx-auto mt-10' />;
  }

  // serve para mostrar que não há restaurantes
  function NoRestaurantsWarning() {
    return (
      <div className="text-center my-10">
        <h2 className="text-2xl text-white font-bold">Nenhum restaurante encontrado.</h2>
        <p className="text-white mt-2">Tente mudar os filtros ou verificar novamente mais tarde.</p>
      </div>
    );
  }


  return (
    <div className=' bg-slate-900'>
      {/* puxamos o header e declaramos a cor tema*/} 
      <Header />
      <hr className='bg-lbronze h-2 -mt-1' />
      <div className='flex justify-center bg-image-3 h-96'>
 {/*usamos o hr e  a div para  */} 
        <div className='flex resp-hid flex-col items-center justify-center min-h-screen  sm:px-6 lg:px-8 mb-10'>


          <img src='/titulo.png' alt='Guia de Restaurante' className='lg:ml-6 mt-36 mb-2 w-max' />
          {/* { <hr className='bg-lbronze h-1 w-3/4 mt-0' /> } */}
          <div className='flex flex-col -mb'>


            <input className='bg-white rounded-lg border mb-96 -mt-16 border-gray-400 leading-normal resize-none w-96 h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' type='text' placeholder='Pesquisar' onChange={(e) => setSearchTerm(e.target.value)} />
          </div>

        </div>
      </div>
      <hr className='bg-lbronze h-2 -mt-1' />
      <article className='flex flex-col mt-10 items-center justify-center min-h-screen bg-slate-900 sm:px-6 lg:px-8 mb-10'>
        <div className='lg:flex lg:-ml-16'>
        {/*filtro por avaliaçâo */}
          <FilterDropdown
            label="Avaliação"
            options={avaliacaoOptions}
            onChange={handleFilterChange('avaliacao')}
          />
            {/*filtro por Valor */}
          <FilterDropdown
            label="Valor"
            options={valorOptions}
            onChange={handleFilterChange('valor')}
          />
            {/*filtro por Tipo */}
          <FilterDropdown
            label="Tipo"
            options={tipoOptions}
            onChange={handleFilterChange('tipo')}
          />
            {/*filtro por Pagamento */}
          <FilterDropdown
            label="Pagamento"
            options={pagamentoOptions}
            onChange={handleFilterChange('pagamento')}
          />
          <input className='bg-lbronze lg:hidden w-full rounded-lg border border-gray-400 leading-normal resize-none h-10 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white' type='text' placeholder='Pesquisar' onChange={(e) => setSearchTerm(e.target.value)} />

        </div>
        {
          isLoading && <LoadingComponent />
        }
          
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
        
        {
          filteredAndSearchedRestaurants.length === 0 && !isLoading && <NoRestaurantsWarning />
        }
        <div className='flex mx-auto mt-6'>
          {/* Botão para página anterior */}
          <button className='bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => prevPage()} disabled={currentPage === 1}>
            <span className="button-text">Anterior</span>
            <AiOutlineArrowLeft className="button-icon" />
          </button>
          <span className='text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>{currentPage}</span>
          {/* Botão para proxima página   */}
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
