import axios from "axios";
import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "contatos";

export async function GET() {
    try {
        const resposta = await axios.get(url);
        return NextResponse.json(resposta.data);
    } catch (erro) {
        console.log("[Contatos_Get]", erro);
        if (erro.response) {
        if (erro.response.status === 400) {
            return NextResponse.json(erro.response.data, { status: 400 });
        }
        }
        return new NextResponse("Erro do servidor dentro do route", {
        status: 500,
        });
    }
    }

    export async function POST(request) {

        const pararametros = await request.json();
        console.log("[Parametros]", pararametros);
    
    
        try{
            const resposta = await axios.post(url, pararametros);
            console.log("[Resposta]", resposta.data);
    
            return NextResponse.json(resposta.data);
    
        } catch (error) {
            console.log("[Order_Post]", error);
            if (error.response && error.response.data) {
                // Retorna o erro de forma que o frontend possa capturá-lo
                return new NextResponse(JSON.stringify(error.response.data), { status: error.response.status });
            } else {
                return new NextResponse("Erro do servidor dentro do route", {status: 500});
            }
    
    }
    }

