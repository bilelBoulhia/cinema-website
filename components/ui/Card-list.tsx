import {StaticImageData} from "next/image";
import img1 from "@/assets/movies/title_poster_1717441966.jpg";
import img2 from "@/assets/movies/s-l400.png";
import img3 from "@/assets/movies/onesheet.jpg";
import img4 from "@/assets/movies/JOKER-FOLIE-A-DEUX-POSTER-ACTORS-min.jpg";
import img6 from "@/assets/movies/jbwYaoYWZwxtPP76AZnfYKQjCEB.jpg";
import img7 from "@/assets/movies/4bfc625f140a9b478829cc68c1a492c2.jpg";
import img8 from "@/assets/movies/81Rrx-Bv+6L._AC_UF1000,1000_QL80_.jpg";
import img9 from "@/assets/movies/unnamed.jpg";
import MovieCard from "@/components/ui/movie-card";

const films :{label: string,image:StaticImageData}[] = [
    {label:'dune' ,image:img1},
    {label:'venom' ,image:img2},
    {label:'deadpool' ,image:img3},
    {label: 'joker', image:img4},
    {label: 'out', image:img6},
    {label: 'Damaged', image:img7},



];




const CardList= ()=>{
    return(
        <div  className='pr-4 grid grid-flow-row gap-8 w-full iphone5:grid-cols-2 slighty-large-phone:grid-cols-3  sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7'>

            {films.map((card,index)=>(
              <div className='flex flex-col justify-center items-center'>
                <MovieCard label={card.label} image={card.image} size='small'/>
              </div>
            ))}



        </div>
    )
}
export{CardList}