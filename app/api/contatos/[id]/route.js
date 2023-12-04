import axios from "axios";
import { NextResponse } from "next/server";

const url = process.env.BASE_URL + "contatos";

export async function PUT() {

    const { id } = params;
    const body = await request.json();

    try {
        const response = await axios.put(`${url}/${id}`, body);
        console.log(response.data);
        return NextResponse.json(response.data);

    } catch (error) {
        console.log("[ORDER_PUT]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });


    }

}

export async function DELETE() {

    const { id } = params;
    try {
        const response = await axios.delete(`${url}/${id}`);

        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[ORDER_DELETE]", error);
        return new NextResponse("Erro interno do servidor!", { status: 500 });
    }

}

