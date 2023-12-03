'use client';
import React, { useState, useEffect } from 'react'
import Footer from "../components/Footer";
import ContatoForm from '../components/ContatoForm';
import Header from '../components/Header';

function Contato() {
    const [contato, setContato] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });
    const [contatos, setContatos] = useState([]);
    const [errors, setErrors] = useState([]);

    const formRef = React.useRef(null);

    const handleChange = (e) => {
        setContato({ ...contato, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dados = { ...contato, };
        try {
            console.log(dados)
            const response = await axios.post('/api/restaurantes', dados);
            console.log('response', response);
            console.log('Restaurante cadastrado:', response.data);
            console.log(dados);
            setContato({
                nome: '',
                email: '',
                telefone: '',
                mensagem: ''
            });
            setErrors([]); // Limpa os erros se a solicitação foi bem-sucedida
        } catch (error) {
            if (error.response && error.response.data && error.response.data.erros) {
                // Captura os erros do backend e atualiza o estado
                setErrors(error.response.data.erros);
            } else {
                setErrors(['Ocorreu um erro ao enviar o formulário.']);
            }
        }

    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/dados/${id}`);
            setContatos(restaurantes.filter(contato => contato.id !== id));
        } catch (erro) {
            console.error(erro);
        }
    };

    useEffect(() => {
        const fetchContatos = async () => {
            try {
                const response = await axios.get('/api/dados');
                setContatos(response.data);
            } catch (error) {
                console.error('Erro ao buscar restaurantes', error);
            }
        };

        fetchContatos();
    }, [contato]);

    return (
        <>
            <Header />
            <hr className='bg-lbronze h-2 -mt-1' />

            <div>
                <section >
                    <div className="flex flex-col items-center justify-center  bg-gray-100 sm:px-6 lg:px-8 ">



                        <div className="space-y-8 w-screen h-screen mr-4 bg-slate-900 flex">

                            <img src="/logo.png" alt="logo" className=" w-2/4 ml-20   items-center justify-center" />

                            <div className=' w-2/5  opacity-1'>
                                <ContatoForm
                                    restaurante={contato}
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                    errors={errors}
                                    formRef={formRef}
                                />
                            </div>


                            {errors.length > 0 && (
                                <div>
                                    {
                                        errors.map((error) => (
                                            <div key={error} className="text-red-500 text-xs italic">
                                                {error}
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                            {
                                errors.length > 0 && (
                                    setTimeout(() => {
                                        setErrors([]);
                                    }, 4000)
                                )
                            }

                        </div>
                    </div>
                    <div className="flex flex-col border-t-bronze items-center justify-center min-h-screen  bg-gradient-to-r from-slate-900 to-slate-900 py-2 sm:px-6 lg:px-8">
                        <h2 className=" mb-96 text-center text-3xl font-extrabold text-white">Contatos Cadastrados</h2>
                    </div>
                </section>
                <hr className='bg-lbronze h-2 -mt-1' />
                <Footer />
            </div>


        </>

    )
}

export default Contato;