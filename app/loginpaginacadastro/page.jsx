'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Login() {
    const [nome, setNome] = useState('');// estado para controlar o input de nome
    const [senha, setSenha] = useState('');// estado para controlar o input de senha
    const [error, setError] = useState(null);// estado para controlar mensagens de erro

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('/api/membros');// faz a requisição para a API
            const membros = response.data;

            const membro = membros.find(membro => membro.nome === nome && membro.senha === senha);
            // verifica se o membro existe

            if (membro) {
                window.location.href = '/cadastros';
                // redireciona para a página de cadastros
            } else {
                setError('Nome de usuário ou senha inválidos');
            }
        } catch (error) {
            setError('Ocorreu um erro ao fazer login');
        }
    };

    return (
        <>
            {/* componentes do cabeçalho*/}
            <Header />
            <hr className='bg-lbronze h-1 -mt-1' />
            <div className=' flex items-center justify-center bg-slate-900 py-12 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full space-y-8'>
                    <div>
                        {/* titulo da página*/}
                        <h2 className='mt-6 text-center text-3xl font-extrabold text-white'>
                            Faça login na sua conta
                        </h2>
                        <div className='rounded-lg mb-12 mt-3'>
                            {/* imagem de fundo*/}
                            <div className='mt-6 text-center'><p className='text-lbronze text-justify'>Para acessar as páginas destinadas às funcionalidades dos membros da Elite Chefs, por favor, faça login com as suas respectivas credenciais para validarmos a sua entrada.</p></div>
                            <div className='mt-6 text-center'><p className='text-lbronze text-justify'>Caso você não seja um membro da Elite Chefs, por favor, entre em contato conosco pela nossa página de contatos.</p></div>
                            <a href='/logincadastromembros' className=' text-center hover:text-slate-900 ml-9 text-lbronze'>Clique aqui para ir para a página de contatos</a>

                            <form className='mt-8' onSubmit={handleSubmit}>
                                {/*  formulário de login*/}
                                {error && <p className='text-red-500'>{error}</p>}
                                <div className='rounded-md shadow-sm -space-y-px'>
                                    <div>
                                        <label htmlFor='nome' className='sr-only'>
                                            Nome de usuário
                                        </label>
                                        <input
                                            id='nome'
                                            name='nome'
                                            type='text'
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            required
                                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                            placeholder='Nome de usuário'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor='senha' className='sr-only'>
                                            Senha
                                        </label>
                                        <input
                                            id='senha'
                                            name='senha'
                                            type='password'
                                            value={senha}
                                            onChange={(e) => setSenha(e.target.value)}
                                            required
                                            className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                                            placeholder='Senha'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type='submit'
                                        className='group relative mt-3 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                    >
                                        Login
                                    </button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='bg-lbronze h-1 -mt-1' />
            {/*  rodapé*/}
            <Footer />
        </>
    );
}

export default Login;