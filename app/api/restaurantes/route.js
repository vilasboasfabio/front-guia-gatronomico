import axios from 'axios';
import {NextResponse} from 'next/server';

const url = process.env.BASE_URL + "restaurante";

export async function GET() {

    try{
        const resposta = await axios.get(url);

        return NextResponse.json(resposta.data);

    }catch(erro){
        console.log("[Order_Get]", erro);
        return new NextResponse("Erro do servidor", {status: 500});
    }

}

export async function getRestaurante(id) {
        try{
            const resposta = await axios.get(url + id);
    
            return NextResponse.json(resposta.data);
    
        }catch(erro){
            console.log("[Order_Get]", erro);
            return new NextResponse("Erro do servidor", {status: 500});
        }
    
}

export async function POST(request) {

    const pararametros = await request.json();

    console.log(`POST`);
    console.log(pararametros);

    try{
        const resposta = await axios.post(url, pararametros);

        return NextResponse.json(resposta.data);
    } catch(erro){
        console.log("[Order_Post]", erro);
        return new NextResponse("Erro do servidor", {status: 500});
    }
}
