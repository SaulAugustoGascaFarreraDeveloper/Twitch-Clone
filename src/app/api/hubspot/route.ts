import { NextResponse } from "next/server"


export const GET = async (req:Request,res:Response) =>{

    try{

        const { contact } = await req.json();

        console.log("Datos de contacto recibidos:", contact);

        const parsedContact = JSON.parse(contact);

        return NextResponse.json({message: parsedContact},{status: 200});

    }catch(error)
    {
        console.log("ERROR API HUBSPOIT --> ",error)
    }

}