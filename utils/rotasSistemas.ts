interface Rotas {
    nome : string;
    path : string;
}

export default ()=>{
    const rotas : Rotas[] = [
        {nome:"Home", path:"/"},
        {nome:"Videos", path:"/videos"},
        {nome:"Favoritos", path:"/videos/favoritos"},
        {nome:"Adicionar Videos", path:"/videos/adicionar"},
    ]
    return rotas
};