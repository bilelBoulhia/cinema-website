'use client'
import Carousel from "@/components/ui/Carousel";
import {StaticImageData} from "next/image";
import img1 from "@/assets/movies/title_poster_1717441966.jpg";
import img2 from "@/assets/movies/s-l400.png";
import img3 from "@/assets/movies/onesheet.jpg";
import img4 from "@/assets/movies/JOKER-FOLIE-A-DEUX-POSTER-ACTORS-min.jpg";
import img6 from "@/assets/movies/jbwYaoYWZwxtPP76AZnfYKQjCEB.jpg";
import img7 from "@/assets/movies/4bfc625f140a9b478829cc68c1a492c2.jpg";
import img8 from "@/assets/movies/81Rrx-Bv+6L._AC_UF1000,1000_QL80_.jpg";
import img9 from "@/assets/movies/unnamed.jpg";
import Heading from "@/components/ui/Heading";

const SeeAlso = () =>{


    const films :{label: string,image:StaticImageData}[] = [
        {label:'dune' ,image:img1},
        {label:'venom' ,image:img2},
        {label:'deadpool' ,image:img3},
        {label: 'joker', image:img4},
        {label: 'out', image:img6},
        {label: 'Damaged', image:img7},
        {label: 'arcadian', image:img8},
        {label: 'unnamed', image:img9},
        {label: 'unnamed', image:img9},
        {label: 'unnamed', image:img9},
        {label: 'unnamed', image:img9},
        {label: 'unnamed', image:img9}


    ];


    return (
        <div className="w-full p-5">
            <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900  dark:text-white'>Related</h1>
            <Carousel cards={films}/>

        </div>
    )
}

export default SeeAlso;