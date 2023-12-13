'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestauranteCard from '../components/CardRestaurante';
import RestauranteForm from '../components/RestauranteForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorPopup from '../components/ErrorPopUp';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


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
    const [restaurantes, setRestaurantes] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingRestaurante, setEditingRestaurante] = useState(null);
    const [errors, setErrors] = useState([]);
    const [aberto, setAberto] = useState(false);
    const [selectedRestaurante, setSelectedRestaurante] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [restaurantsPerPage] = useState(9);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');



    const formRef = React.useRef(null);

    const handleChange = (e) => {
        setRestaurante({ ...restaurante, [e.target.name]: e.target.value });
    };

    const abrir = () => {
        if (aberto) {
            setAberto(false);
        }
        else {
            setAberto(true);
        }
    }

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

        if (isEditing) {
            handleEdit(editingRestaurante, dadosFormatados);
        } else {
            try {
                const response = await axios.post('/api/restaurantes', dadosFormatados);
                // Defina a mensagem de sucesso com a mensagem retornada pela API
                setSuccessMessage(response.data.message);
                setRestaurante({
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
                setTimeout(() => {
                    setSuccessMessage('');
                }, 5000);
                setErrors([]);
            } catch (error) {
                if (error.response && error.response.data && error.response.data.erros) {
                    setErrors(error.response.data.erros);
                    console.log(error.response.data.erros);
                    // Clear error message after 5 seconds
                } else {
                    setErrors(['Ocorreu um erro ao enviar o formulário.']);
                    // Clear error message after 5 seconds
                }
            }
        }
    };

    const handleEdit = async (id, updatedRestaurante) => {
        const valorNumerico = Number(updatedRestaurante.valor);
        const avaliacaoNumerica = Number(updatedRestaurante.avaliacao);

        if (isNaN(valorNumerico) || isNaN(avaliacaoNumerica)) {
            setErrors(['Valor e avaliação devem ser números.']);
            return;
        }

        const dadosFormatados = {
            ...updatedRestaurante,
            valor: valorNumerico,
            avaliacao: avaliacaoNumerica
        };

        try {
            await axios.put(`/api/restaurantes/${id}`, dadosFormatados);
            const response = await axios.get('/api/restaurantes');
            setRestaurantes(response.data);
            setIsEditing(false);
            setRestaurante({
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
        } catch (error) {
            if (error.response && error.response.data && error.response.data.erros) {
                setErrors(error.response.data.erros);
                console.log(error.response.data.erros);
                // Clear error message after 5 seconds
            } else {
                setErrors(['Ocorreu um erro ao enviar o formulário.']);
                // Clear error message after 5 seconds
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/restaurantes/${id}`);
            setRestaurantes(restaurantes.filter(restaurante => restaurante.id !== id));
        } catch (erro) {
            console.error(erro);
        }
    };

    useEffect(() => {
        const fetchRestaurantes = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('/api/restaurantes');
                setRestaurantes(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Erro ao buscar restaurantes', error);
                setIsLoading(false);
            }
        };

        fetchRestaurantes();
    }, [restaurante]);


    const editInputs = (id) => {
        const restauranteEdit = restaurantes.find(restaurante => restaurante.id === id);
        setRestaurante(restauranteEdit);
        setIsEditing(true);
        setEditingRestaurante(id);
        formRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset para a primeira página com a nova pesquisa
    };

    // Filtrar restaurantes com base no termo de pesquisa
    const filteredRestaurantes = restaurantes.filter(
        restaurante => restaurante.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Obter os restaurantes atuais para a página atual
    const indexOfLastRestaurante = currentPage * restaurantsPerPage;
    const indexOfFirstRestaurante = indexOfLastRestaurante - restaurantsPerPage;
    const currentRestaurantes = filteredRestaurantes.slice(indexOfFirstRestaurante, indexOfLastRestaurante);

    // Mudar página
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    function LoadingComponent() {
        return <img src='/loading1.webp' alt='Loading' className='w-1/2 mx-auto mt-5' />;
    }

    return (
        <main className='bg-slate-900'>
            <Header />
            <hr className='bg-lbronze h-2 -mt-1' />
            <ErrorPopup errors={errors} />
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 sm:px-6 lg:px-8 mb-10">
                <div className="space-y-8 w-screen bg-image-1 bg-slate-900">
                    <div className=' mx-auto mt-24 mb-20 opacity-1'>
                        <RestauranteForm
                            restaurante={restaurante}
                            handleChange={handleChange}
                            handleCheckboxChange={handleCheckboxChange}
                            handleSubmit={handleSubmit}
                            errors={errors}
                            isEditing={isEditing}
                            handleEdit={handleEdit}
                            formRef={formRef}
                        />
                    </div>

                    {successMessage && <div className=' ml-[38%] pb-8' ><p className=' text-xl text-green-400'>{successMessage}</p></div>}
                </div>

                <div className="flex flex-col border-t-bronze items-center justify-center  w-screen bg-gradient-to-r from-slate-900 to-slate-900 py-2 lg:px-8">

                </div>

                <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-r from-slate-900 to-slate-900 py-2 lg:px-8">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Restaurantes Cadastrados</h2>

                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Pesquisar restaurante"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className='mt-6 mb-6 w-auto lg:w-96 px-4 py-2 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-lbronze focus:border-transparent'
                        />
                    </div>
                    {
                        isLoading &&

                        <div className='flex flex-col items-center justify-center min-h-screen mx-auto bg-slate-900 '>
                            <p className='text-2xl text-lbronze'>Carregando...</p>
                            <LoadingComponent />
                        </div>
                    }
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {currentRestaurantes.map(restaurante => (
                            <RestauranteCard
                                key={restaurante.id}
                                restaurante={restaurante}
                                onDelete={handleDelete}
                                onEdit={editInputs}
                                abrir={() => {
                                    setSelectedRestaurante(restaurante);
                                    abrir();
                                }}
                            />
                        ))}
                    </ul>
                </div>

                <div className='flex mx-auto mt-6'>
                    {/* Botão para página anterior */}
                    <button className='bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => prevPage()} disabled={currentPage === 1}>
                        <span className="button-text">Anterior</span>
                        <AiOutlineArrowLeft className="button-icon" />
                    </button>
                    <span className='text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>{currentPage}</span>
                    {/* Botão para proxima página   */}
                    <button className='bg-lbronze hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2' onClick={() => nextPage()} disabled={currentPage === Math.ceil(filteredRestaurantes.length / restaurantsPerPage)}>
                        <span className="button-text">Próximo</span>
                        <AiOutlineArrowRight className="button-icon" />
                    </button>
                </div>

            </div>
            <hr className='bg-lbronze h-2 mb-10' />
            <Footer />
        </main>

    );



}

export default CadastroRestaurante;