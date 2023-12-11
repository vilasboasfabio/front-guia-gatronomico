import axios from 'axios';
import { NextResponse } from 'next/server';

const url = process.env.BASE_URL + "membros";

export async function GET() {
    // funcao de listar todos
        try {
            console.log("Passou no try")
            const resposta = await axios.get(url);
            console.log("[Resposta]", resposta.data)
            return NextResponse.json(resposta.data);
    
        } catch (erro) {
            console.log("[Order_Post]", erro);
            // Verificar se o erro é um erro de resposta da API (como um erro 404)
            if (erro.response) {
                // Se o status do erro for 404, retorna o array de erros da API
                if (erro.response.status === 400) {
                    return NextResponse.json(erro.response.data, { status: 400 });
                }
                // Se for outro tipo de erro de resposta, você pode adicionar tratamentos adicionais aqui
            }
            // Para erros que não são de resposta da API, retorna um erro 500
            return new NextResponse("Erro do servidor dentro do route", { status: 500 });
        }
    }

export async function POST(request) {
    // funcao de criar
        const pararametros = await request.json();
        console.log("[Parametros]", pararametros);
        // Verificar se o erro é um erro de resposta da API (como um erro 404)

        try {
            const resposta = await axios.post(url, pararametros);
            console.log("[Resposta]", resposta.data);
    
            return NextResponse.json(resposta.data);
    
        }
        catch (error) {
            console.log("[Order_Post]", error);
            if (error.response && error.response.data) {
                // Retorna o erro de forma que o frontend possa capturá-lo
                console.log(error.response.data)
                return new NextResponse(JSON.stringify(error.response.data), { status: error.response.status });
            } else {
                return new NextResponse("Erro do servidor dentro do route", {status: 500});
            }
    }
}
    