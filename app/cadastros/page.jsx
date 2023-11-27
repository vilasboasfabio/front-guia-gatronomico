'use client';
console.log('CadastroRestaurante.jsx');
import React, { useState } from 'react';
import axios from 'axios';

function CadastroRestaurante() {
    const [restaurante, setRestaurante] = useState({
        nome: '',
        img: '',
        loc: '',
        valor: '',
        tipo: '',
        chefe: '',
        descricao: '',
        funcionamento: [],
        pagamento: [],
        avaliacao: '',
        data: ''
    });


    const diasFuncionamento = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    const formasPagamento = ["Dinheiro", "Cartão de Crédito", "Cartão de Débito"];

    const handleChange = (e) => {
        setRestaurante({ ...restaurante, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
        const { name, value } = e.target;
        let newSelection;
        
        if (name === "funcionamento") {
            newSelection = restaurante.funcionamento.includes(value)
                ? restaurante.funcionamento.filter(day => day !== value)
                : [...restaurante.funcionamento, value];
        } else if (name === "pagamento") {
            newSelection = restaurante.pagamento.includes(value)
                ? restaurante.pagamento.filter(form => form !== value)
                : [...restaurante.pagamento, value];
        }

        setRestaurante({ ...restaurante, [name]: newSelection });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dadosFormatados = {
            ...restaurante,
            valor: Number(restaurante.valor),
            avaliacao: Number(restaurante.avaliacao)
        };

        console.log(dadosFormatados)
        try {
            const response = await axios.post('http://localhost:4005/restaurante', dadosFormatados);
            console.log('response', response);
            console.log('Restaurante cadastrado:', response.data);
            console.log(dadosFormatados); 
        } catch (error) {
            console.error('Erro ao enviar o formulário', error);
        }
    };

    return (
        <div>
            <h2>Cadastro de Restaurantes</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome:</label>
                <input type="text" name="nome" id="nome" onChange={handleChange} />

                <label htmlFor="imagem">Imagem:</label>
                <input type="text" name="img" id="imagem" onChange={handleChange} />

                <label htmlFor="localizacao">Localização:</label>
                <input type="text" name="loc" id="localizacao" onChange={handleChange} />

                <label htmlFor="valor">Valor:</label>
                <input type="number" name="valor" id="valor" onChange={handleChange} />

                <label htmlFor="tipo">Tipo:</label>
                <input type="text" name="tipo" id="tipo" onChange={handleChange} />

                <label htmlFor="chefe">Chefe:</label>
                <input type="text" name="chefe" id="chefe" onChange={handleChange} />

                <label htmlFor="descricao">Descrição:</label>
                <input type="text" name="descricao" id="descricao" onChange={handleChange} />

                <fieldset>
                    <legend>Dias de Funcionamento:</legend>
                    {diasFuncionamento.map(dia => (
                        <label key={dia}>
                            <input
                                type="checkbox"
                                name="funcionamento"
                                value={dia}
                                checked={restaurante.funcionamento.includes(dia)}
                                onChange={handleCheckboxChange}
                            />
                            {dia}
                        </label>
                    ))}
                </fieldset>

                <fieldset>
                    <legend>Formas de Pagamento:</legend>
                    {formasPagamento.map(forma => (
                        <label key={forma}>
                            <input
                                type="checkbox"
                                name="pagamento"
                                value={forma}
                                checked={restaurante.pagamento.includes(forma)}
                                onChange={handleCheckboxChange}
                            />
                            {forma}
                        </label>
                    ))}
                </fieldset>

                <label htmlFor="avaliacao">Avaliação:</label>
                <input type="number" name="avaliacao" id="avaliacao" onChange={handleChange} />

                <label htmlFor="data">Data de Fundação:</label>
                <input type="date" name="data" id="data" onChange={handleChange} />

                <button type="submit">Cadastrar Restaurante</button>
            </form>
        </div>
    );
    
}

export default CadastroRestaurante;
