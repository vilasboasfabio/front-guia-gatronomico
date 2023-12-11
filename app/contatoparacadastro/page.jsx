'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContatosForm';
import PopUpCadastre from '../components/PopUpCadastre';

function Login() {
    const [contato, setContato] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    // array de contatos
    const [contatos, setContatos] = useState([]);//O estado para controlar o array contatos
    const [isModalOpen, setIsModalOpen] = useState(false);// O estado para controlar o modal
    const [aberto, setAberto] = useState(false);// O estado aberto serve para controlar o menu mobile
    const [selectedContato, setSelectedContato] = useState(null);// O estado para controlar o contato selecionado
    const [resposta, setResposta] = useState('');// O estado para controlar a resposta
    const [isResponding, setIsResponding] = useState(false);// O estado para controlar se está respondendo ou não
    const [respondedContatos, setRespondedContatos] = useState([]);// O estado para controlar os contatos respondidos

    const formRef = React.useRef(null);

    const handleChange = (e) => {
        setContato({ ...contato, [e.target.name]: e.target.value });
        // atualiza o estado de contato com o valor do input
    };
    
   
  const handleSubmit = (e) => {
    e.preventDefault();
// atualiza o estado de contatos com o novo contato
    axios.post('/api/contatos', contato)
        .then((response) => {
            setContatos(prevContatos => [...prevContatos, response.data]);
            setContato({
                nome: '',
                email: '',
                telefone: '',
                mensagem: ''
            });
            setIsModalOpen(true); // Abra o modal
        })
        .catch((error) => {
            console.log(error);
        });
  }

    useEffect(() => {
        // atualiza o estado de contatos com os contatos da API
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
    {/* componentes do cabeçalho*/}
            <Header />
            <hr className='bg-lbronze h-1 -mt-1' />
            <div className=' flex items-center justify-center bg-slate-900 py-12 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full space-y-8'>
                    <div>
                        {/* titulo da página*/}
                        <h2 className='mt-6 text-center text-3xl font-extrabold text-lbronze'>
                           Olá, deseja se tornar um colaborador da Elite Chefs?
                        </h2>
                        <div className='rounded-lg mb-12 mt-3'>
                            {/* texto de fundo*/}
                            <h4 className='text-justify text-xl font-bold text-gray-300 mb-3'>Você pode se tornar um membro da Elite Chefs e ter acesso a área de membros, onde você pode auxiliar na nossa curadoria, cadastrar restaurantes e muito mais.</h4>
                            <p className='text-justify text-xl mb-2 font-bold text-white'>Para isso, basta entrar em contato com a gente, enviando a sua proposta no formulário abaixo. Certifique-se de preencher os campos corretamente com as suas informações, insira o seu nome e o seu número de telefone nos repsecvtivos campos, deixe o seu e-mail, CPF e a sua pretenção de cargo como colaborador na nossa equipe, no campo da te texto. </p>
                            <p className='text-justify mb-5 text-xl font-bold text-white'>Após o envio da sua proposta, iremos analisar o seu perfil e entraremos em contato com você o mais breve possível, em até 4 dias úteis.</p>
                            <ContactForm contato={contato} handleChange={handleChange} handleSubmit={handleSubmit} />
                            {/* formulário de contato */}
                            <PopUpCadastre isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
                            {/* modal de cadastro */}
                        </div>
                    </div>
                </div>
            </div>
            <hr className='bg-lbronze h-1 -mt-1' />
            <Footer />
        </>
    );
}

export default Login;