'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestauranteCardShow from './components/CardRestauranteShow';
import FilterDropdown from './components/Filter';
import Header from './components/Header';
import Footer from './components/Footer';


function ExibirRestaurantes() {
  const [filters, setFilters] = useState({
    avaliacao: '',
    valor: '',
    tipo: '',
    pagamento: '',
  });
  const [filtredRestaurantes, setFiltredRestaurantes] = useState([]);

  const valorOptions = [
    { value: '', label: 'Qualquer Valor' },
    { value: 1, label: '$' },
    { value: 2, label: '$$' },
    { value: 3, label: '$$$' },
    {value: 4, label: '$$$$'}
  ];

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

  const pagamentoOptions = [
    {value:'', label: 'Qualquer forma de pagamento'},
    { value: 'Dinheiro', label: 'Dinheiro' },
    { value: 'Cartão de Crédito', label: 'Cartão de Crédito' },
    { value: 'Cartão de Débito', label: 'Cartão de Débito' },
    { value: 'Pix', label: 'Pix' },
    { value: 'Vale Alimentação', label: 'Vale Alimentação' },
    { value: 'Vale Refeição', label: 'Vale Refeição' },
  ];

  const avaliacaoOptions = [
    { value: 0, label: 'Qualquer avaliação'},
    { value: 1, label: '1 estrela' },
    { value: 2, label: '2 estrelas' },
    { value: 3, label: '3 estrelas' },
  ];

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`/api/restaurantes?avaliacao=${filters.avaliacao}&valor=${filters.valor}&tipo=${filters.tipo}&pagamento=${filters.pagamento}`);
        
        if (filters.avaliacao || filters.valor || filters.tipo || filters.pagamento) {
          setFiltredRestaurantes(response.data.filter((restaurante) => {
            if (filters.avaliacao && restaurante.avaliacao !== Number(filters.avaliacao)) {
              return false;
            }
            if (filters.valor && restaurante.valor !== Number(filters.valor)) {
              return false;
            }
            if (filters.tipo && restaurante.tipo !== filters.tipo) {
              return false;
            }
            if (filters.pagamento && !restaurante.pagamento.includes(filters.pagamento)) {
              return false;
            }
            return true;
          }));
          console.log(filtredRestaurantes)
        } else {
          setFiltredRestaurantes(response.data);
        }

      } catch (error) {
        console.error('Erro ao buscar restaurantes', error);
      }
    };
    console.log(filters)
    fetchRestaurants();
  }, [filters] );
 

  const handleFilterChange = (type) => (e) => {
    setFilters({ ...filters, [type]: e.target.value });
  };

  return (
    <div>
      <Header />
      <h2>Restaurantes Cadastrados</h2>
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


      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       {
        
        filtredRestaurantes.map(restaurante => (
          <li key={restaurante.id}>
            <RestauranteCardShow restaurante={restaurante} />
          </li>
        ))

       }
      </ul>
      <Footer />
    </div>
  );
}

export default ExibirRestaurantes;
