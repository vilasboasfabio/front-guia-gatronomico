'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestauranteCard from './components/CardRestaurante';

function ExibirRestaurantes() {
  const [restaurantes, setRestaurantes] = useState([]);

  useEffect(() => {
    const fetchRestaurantes = async () => {
      try {
        const response = await axios.get('/api/restaurantes');
        setRestaurantes(response.data);
      } catch (error) {
        console.error('Erro ao buscar restaurantes', error);
      }
    };

    fetchRestaurantes();
  }, []);

  return (
    <div>
      <h2>Restaurantes Cadastrados</h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {restaurantes.map((restaurante) => (
          <RestauranteCard key={restaurante.id} restaurante={restaurante} />
        ))}
      </ul>
    </div>
  );
}

export default ExibirRestaurantes;
