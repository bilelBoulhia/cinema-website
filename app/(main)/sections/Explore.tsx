import img1 from "@/assets/movies/title_poster_1717441966.jpg"
import img2 from "@/assets/movies/s-l400.png"
import img3 from "@/assets/movies/onesheet.jpg"
import img4 from "@/assets/movies/JOKER-FOLIE-A-DEUX-POSTER-ACTORS-min.jpg"

import img6 from "@/assets/movies/jbwYaoYWZwxtPP76AZnfYKQjCEB.jpg"
import img7 from "@/assets/movies/4bfc625f140a9b478829cc68c1a492c2.jpg"
import img8 from "@/assets/movies/81Rrx-Bv+6L._AC_UF1000,1000_QL80_.jpg"
import img9 from "@/assets/movies/unnamed.jpg"
import {StaticImageData} from "next/image";
import Carousel from "@/components/ui/Carousel";

import Heading from "@/components/ui/Heading";

import {Meteors} from "@/components/ui/Meteor-background";

const Explore = ()=>{

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
        <div className="relative w-full overflow-hidden">
            <Meteors number={20} className="absolute inset-0"/>
            <div className="relative z-10">
                <div className="w-full p-5">
                    <Heading size="medium" variant='lightColor'>Latest movies</Heading>
                    <Carousel cards={films}/>
                </div>
                <div className="w-full p-5">
                    <Heading size="medium" variant='lightColor'>Best Rated movies</Heading>
                    <Carousel cards={films}/>
                </div>
                <div className="w-full p-5">
                    <Heading size="medium" variant='lightColor'>our Picks </Heading>
                    <Carousel cards={films}/>
                </div>
                <div className="w-full p-5">
                    <Heading size="medium" variant='lightColor'>Browse</Heading>
                    <Carousel cards={films}/>
                </div>
            </div>
        </div>

    )
}
export default Explore;