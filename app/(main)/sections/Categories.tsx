'use client'
import {LampContainer} from "@/components/ui/lamp-effect";
import {motion} from "framer-motion";

import {FlipWords} from "@/components/ui/flip-word";
import {StaticImageData} from "next/image";
import img1 from "@/assets/horror.jpg";
import img2 from "@/assets/anime.jpg";
import img3 from "@/assets/action.jpg";
import img4 from "@/assets/drama.jpg";
import img5 from "@/assets/history.jpg";
import img6 from "@/assets/musical.jpeg";
import img7 from "@/assets/western.jpg";
import img8 from "@/assets/thriller.jpg";
import img9 from "@/assets/romance.jpg";
import img10 from "@/assets/scifi.jpg";
import {ImageGridlist} from "@/components/ui/image-gridlist";
import Heading from "@/components/ui/Heading";

const Categories = ()=>{
    const images :{text: string,img:StaticImageData}[] = [
        {text:'horror' ,img:img1},
        {text:'anime' ,img:img2},
        {text:'action' ,img:img3},
        {text: 'drama', img:img4},
        {text: 'History', img:img5},
        {text: 'Musical', img:img6},
        {text: 'western', img:img7},
        {text: 'thriller', img:img8},
        {text: 'romance', img:img9},
        {text: 'Sci-fi', img:img10},
    ];

    return(
        <LampContainer  className='mt-[8rem]'>
            <motion.h1
                initial={{opacity: 0.5, y: 100}}
                whileInView={{opacity: 1, y: -45}}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="    bg-gradient-to-br  from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium  text-transparent md:text-7xl"
            >


              <Heading size='default' variant='darkColor'>Categories</Heading>

                <FlipWords className='font-bold' words={images.map(t=>t.text)}/>


            </motion.h1>
            <ImageGridlist images={images}/>
        </LampContainer>
    )

}
export default Categories;
