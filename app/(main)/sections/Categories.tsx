'use client'
import {LampContainer} from "@/components/ui/lamp-effect";
import {motion} from "framer-motion";
import {FlipWords} from "@/components/ui/flip-word";
import { ImageGridlist} from "@/components/ui/image-gridlist";
import Heading from "@/components/ui/Heading";
import {fetch} from "@/lib/supabase/client-api";
import {useEffect, useState} from "react";

export type CategoryData = {
    Category_name: string;c
    Category_cover: string;
};
const Categories =()=>{

    const [data, setData] = useState<CategoryData[]>([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const getData = async () => {
            const categories = await fetch("Categories", false);
            // @ts-ignore
            setData(categories);
            setLoading(false);
        };
        getData();
    }, []);



    return(
        <LampContainer className='mt-[8rem]'>
            <motion.h1
                initial={{opacity: 0.5, y: 100}}
                whileInView={{opacity: 1, y: -45}}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium text-transparent md:text-7xl"
            >
                <Heading size='default' variant='darkColor'>Categories</Heading>

                {!loading ? (
                    <FlipWords className='font-bold medium-phone:text-4xl iphone5:text-2xl lg:text-7xl' words={data.map((category) => category.Category_name)} />
                ) : (
                    <p>...</p>
                )}
            </motion.h1>

            <ImageGridlist data={data}/>
        </LampContainer>
    )
}
export default Categories;
