'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestauranteCard from '../components/CardRestaurante';
import RestauranteForm from '../components/RestauranteForm';
import CardDetalhesRestaurante from '../components/CardDetalhesRestaurante';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorPopup from '../components/ErrorPopUp';


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
            try {
                const response = await axios.get('/api/restaurantes');
                setRestaurantes(response.data);
            } catch (error) {
                console.error('Erro ao buscar restaurantes', error);
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
                            className='mt-6 mb-6 w-96 px-4 py-2 rounded-md bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-lbronze focus:border-transparent'
                        />
                    </div>

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

                <div className="pagination flex justify-center items-center mt-6 space-x-4">
                <button 
                    onClick={prevPage} 
                    disabled={currentPage === 1}
                    className={`py-2 px-4 rounded ${currentPage === 1 ? 'bg-gray-500' : 'bg-lbronze'}`}
                >
                    Anterior
                </button>

                {[...Array(Math.ceil(filteredRestaurantes.length / restaurantsPerPage)).keys()].map(number => (
                    <button 
                        key={number + 1} 
                        onClick={() => paginate(number + 1)}
                        className={`py-2 px-4 rounded ${currentPage === number + 1 ? 'bg-lbronze' : 'bg-gray-300'}`}
                    >
                        {number + 1}
                    </button>
                ))}

                <button 
                    onClick={nextPage} 
                    disabled={currentPage === Math.ceil(filteredRestaurantes.length / restaurantsPerPage)}
                    className={`py-2 px-4 rounded ${currentPage === Math.ceil(filteredRestaurantes.length / restaurantsPerPage) ? 'bg-gray-500' : 'bg-lbronze'}`}
                >
                    Próxima
                </button>
            </div>

            </div>
            <hr className='bg-lbronze h-2 mb-10' />
            <Footer />
        </main>

    );



}

export default CadastroRestaurante;