'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "../components/Footer";
import ContactForm from '../components/ContatosForm';
import Header from '../components/Header';

function Contato() {

    const [contato, setContato] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    const [contatos, setContatos] = useState([]);
    const [aberto, setAberto] = useState(false);
    const [selectedContato, setSelectedContato] = useState(null);
    const [resposta, setResposta] = useState('');
    const [isResponding, setIsResponding] = useState(false);
    const [respondedContatos, setRespondedContatos] = useState([]);

    const formRef = React.useRef(null);

    const handleChange = (e) => {
        setContato({ ...contato, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/contatos', contato)
            .then((response) => {
                setContatos(prevContatos => [...prevContatos, response.data]);
                setContato({
                    nome: '',
                    email: '',
                    telefone: '',
                    mensagem: ''
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

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

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-lbronze">Contato</h1>
                    <p className="text-xl text-lbronze">Entre em contato conosco para tirar dúvidas, dar sugestões ou fazer reclamações.</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <ContactForm contato={contato} handleChange={handleChange} handleSubmit={handleSubmit} />
                </div>
                <div className="flex flex-col justify-center items-center bg-slate-900 rounded-lg p-4 mt-6">
                 
                   
                   <h3 className='
                     text-4xl font-bold text-lbronze
                   '>Área do Membro</h3>
                   <a href="/loginrespondercontatos" className=" bg-slate-400 rounded-lg p-1 mt-2 hover:bg-slate-700 hover:text-white text-black" >Responder Contatos</a>

                </div>
               
            </div>
            <Footer />
        </>
    )


}

export default Contato;