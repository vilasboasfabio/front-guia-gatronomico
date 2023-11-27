'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExibirRestaurantes() {
    const [restaurantes, setRestaurantes] = useState([]);

    useEffect(() => {
        const fetchRestaurantes = async () => {
            try {
                const response = await axios.get('http://localhost:4005/restaurante');
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
        
        <ul>
          {restaurantes.map((restaurante) => (
            <div key={restaurante._id}>
              <li>{restaurante.nome}</li>
              <li>{restaurante.img}</li>
              <li>{restaurante.loc}</li>
              <li>{restaurante.valor}</li>
              <li>{restaurante.tipo}</li>
              <li>{restaurante.chefe}</li>
              <li>{restaurante.descricao}</li>
              <li>{restaurante.funcionamento}</li>
              <li>{restaurante.pagamento}</li>
              <li>{restaurante.avaliacao}</li>
              <li>{restaurante.data}</li>
            </div>
          ))}
        </ul>
      </div>
    );
}

export default ExibirRestaurantes;
