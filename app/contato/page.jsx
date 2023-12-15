'use client'
// Importando os módulos necessários
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";
import ContactForm from '../components/ContatosForm';
import Header from '../components/Header';
import ErrorPopup from '../components/ErrorPopUp';

// Definindo o componente Contato
function Contato() {

    // Definindo o estado inicial para contato, contatos e erros
    const [contato, setContato] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    const [contatos, setContatos] = useState([]);
    const [errors, setErrors] = useState([]);

    // Função para lidar com a mudança nos campos do formulário
    const handleChange = (e) => {
        setContato({ ...contato, [e.target.name]: e.target.value });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            // Tentativa de postar os dados do contato para a API
            const response = await axios.post('/api/contatos', contato);
            // Atualizando o estado dos contatos com a resposta da API
            setContatos([...contatos, response.data]);
            // Resetando o estado do contato
            setContato({
                nome: '',
                email: '',
                telefone: '',
                mensagem: ''
            });
            // Limpar a mensagem de erro em caso de operação bem-sucedida
            setErrors(null); 
        } catch (error) {
            // Lidando com possíveis erros
            if (error.response && error.response.data && error.response.data.erros) {
                setErrors(error.response.data.erros);
                console.log(error.response.data.erros);
            } else {
                setErrors(['Ocorreu um erro ao enviar o formulário.']);
            }
        }
    }

    // Usando o useEffect para buscar os contatos da API quando o componente é montado
    useEffect(() => {
        axios.get('/api/contatos')
            .then((response) => {
                setContatos(response.data.filter(contato => !contato.resposta));
                setRespondedContatos(response.data.filter(contato => contato.resposta));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Renderizando o componente
    return (
        <>
            <Header />
            <ErrorPopup errors={errors} />
            <hr className='bg-lbronze h-2 -mt-1' />

            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-900 text-white">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl mt-10 font-bold uppercase mx-auto">Contato</h1>

                </div>
                <div className="flex  justify-center mt-10 items-center">
                    <ContactForm contato={contato} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                <div className="flex flex-col justify-center items-center bg-lbronze rounded-lg p-4 mt-6">
                    <a href="/loginrespondercontatos"  >Área dos diretores</a>

                </div>

            </div>

            <hr className='bg-lbronze h-2 -mt-1' />
            <Footer />
        </>
    )
}

// Exportando o componente Contato
export default Contato;