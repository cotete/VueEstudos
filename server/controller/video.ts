import { video } from "~/interfaces/video"
import { connectToDatabase } from "../utils";
import { H3Event } from "h3";

const con = await connectToDatabase();

export const buscaVideos = async () =>{
    const resultado =  await con.execute("Select * FROM videos")
    return resultado.rows as video[];
}

export const buscaVideoPorId = async (event : H3Event) =>{
    const requestId = (await event.context.params?.id) as string
    const resultado =  await con.execute("Select * FROM videos where id = $1",[requestId]);
    return resultado.rows as video[];

}

export const adicionaVideo = async(event:H3Event)=>{
    try{
        const request = await readBody(event);

        await con.execute("INSERT into videos values($1,$2, CURRENT_DATE))",[request.descrição,request.url])
        return "Video adicionado com sucesso";
    }catch (error){
        throw createError({
            status:500,
            name:"Erro ao criar video"
        })
    }
}

export const Atualiza = async(event:H3Event)=>{
    try{
        const request = await readBody(event);

        await con.execute("Uptdate videos set descricao = $1, url= $2, data_postagem=CURRENT_DATE)) where id = $3",[request.descrição,request.url,request.id])
        return "Video atualizado com sucesso";
    }catch (error){
        throw createError({
            status:500,
            name:"Erro ao atualizar video"
        })
    }
}
export const deletarVideo = async (event : H3Event) =>{
    try{
        const requestId = (await event.context.params?.id) as string
        const resultado =  await con.execute("delete FROM videos where id = $1",[requestId]);
    
        return "Video deletado com suceosso"
    }catch (error){
        throw createError({
            status:500,
            name:"Erro ao deletar video"
        })
    }
}
