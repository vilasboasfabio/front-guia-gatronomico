'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestauranteCard from './components/CardRestaurante';
import Filter from './components/Filter';


function ExibirRestaurantes() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [filters, setFilters] = useState({
    avaliacao: null,
    valor: null,
    tipo: null,
    chefe: null,
    pagamento: null,
  });

  const avaliacaoOptions = [
    { value: 1, label: '1 estrela' },
    { value: 2, label: '2 estrelas' },
    { value: 3, label: '3 estrelas' },
  ];

  const valorOptions = [
    { value: 1, label: '$' },
    { value: 2, label: '$$' },
    { value: 3, label: '$$$' },
    {value: 4, label: '$$$$'}
  ];

  const tipoOptions = [
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
    {value: 'Mista', label: 'Mista'},
    { value: 'Outra', label: 'Outra' },
  ];

  const pagamentoOptions = [
    { value: 'Dinheiro', label: 'Dinheiro' },
    { value: 'Cartão de Crédito', label: 'Cartão de Crédito' },
    { value: 'Cartão de Débito', label: 'Cartão de Débito' },
    { value: 'Pix', label: 'Pix' },
    { value: 'Vale Alimentação', label: 'Vale Alimentação' },
  ];


  useEffect(() => {
    const fetchRestaurantes = async () => {
      const response = await axios.get('/restaurantes', {
        params: filters,
      });
      setRestaurantes(response.data);
    };

    fetchRestaurantes();
  }, [filters]);

  const handleFilterChange = (filterName) => (selectedOption) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: selectedOption ? selectedOption.value : null,
    }));
  };

  return (
    <div>
      <h2>Restaurantes Cadastrados</h2>
      <Filter
        label="Avaliação"
        options={avaliacaoOptions}
        onChange={handleFilterChange('avaliacao')}
      />
      <Filter
        label="Valor"
        options={valorOptions}
        onChange={handleFilterChange('valor')}
      />
      <Filter
        label="Tipo"
        options={tipoOptions}
        onChange={handleFilterChange('tipo')}
      />


      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {restaurantes.map((restaurante) => (
          <RestauranteCard key={restaurante.id} restaurante={restaurante} />
        ))}
      </ul>
    </div>
  );
}

export default ExibirRestaurantes;
