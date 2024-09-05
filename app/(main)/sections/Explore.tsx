'use client'
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
import {ArrowRightIcon, ChevronIcon, PaperIcon, RocketIcon} from "@/assets/icons/Icons";
import { motion } from "framer-motion"




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
            <Meteors number={30} className="absolute inset-0"/>
            <div className="relative z-10">
                <div className="w-full p-5">
                    <motion.div
                        className='flex gap-2 items-start flex-row cursor-pointer'
                        whileTap={{x: 10}}
                        whileHover={{x: 10}}
                        transition={{type: "spring", stiffness: 400, damping: 10}}
                    >
                        <Heading size="medium" variant='white'>Latest movies</Heading>
                        <div className='relative my-auto pt-2 inline-block w-max '>
                            <ChevronIcon/>
                        </div>
                    </motion.div>
                    <Carousel cards={films}/>
                </div>
                <div className="w-full p-5">
                    <motion.div
                        className='flex gap-2 items-start justify-start flex-row cursor-pointer'
                        whileTap={{x: 10}}
                        whileHover={{x: 10}}
                        transition={{type: "spring", stiffness: 400, damping: 10}}
                    >
                        <Heading size="medium" variant='white'>Best Rated movies</Heading>

                        <div className='relative my-auto pt-2 inline-block w-max '>
                            <ChevronIcon/>
                        </div>


                    </motion.div>
                    <Carousel cards={films}/>
                </div>
            </div>
        </div>

    )
}
export default Explore;