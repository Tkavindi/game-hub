import genres from "../data/genres";

export interface Genre{
    id:number;
    name:string;
    background_image:string;
}

interface FetchGenresResponse{
    count:number;
    results:Genre[];
}
const useGenres=()=>({data:genres,isLoading:false,error:null})


export default useGenres;