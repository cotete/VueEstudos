import type { video } from "~/interfaces/video";

export const useFavorito = ()=> useState<video[]>('favoritos', ()=>[])