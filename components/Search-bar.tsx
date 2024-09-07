import React, { FC } from 'react';
import {motion} from "framer-motion";

interface props{
    isVisible:boolean;
}


const SearchBar : FC<props> = ({isVisible}) => {




    // @ts-ignore
    return (
        <>

            <motion.input
                id="search"
                type="text"
                placeholder="Search"
                className="absolute bg-black  ring-1  ring-teal-500  right-0 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2)] rounded-2xl outline-none text-white   px-2"
                initial={{width: 0, height: '1.5rem', opacity: 0}}
                animate={
                    isVisible
                        ? { width: "100%", opacity: 1, height: '100%' }
                        : { width: 0, opacity: 0, height: '20%' }
                }
                transition={{
                    width: {duration: 0.5, ease: "easeInOut"},
                    height: {duration: 0.5, delay: 0.25, ease: "easeInOut"},
                    opacity: {duration: 0.5, ease: "easeInOut"},
                }}
            />
        </>
    );
};

export default SearchBar;
