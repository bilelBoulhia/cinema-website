'use client'
import React, {FC, useEffect, useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import {fetch} from "@/lib/supabase/client-api";
import {MovieType} from "@/app/(main)/sections/Explore";

import {useRouter} from "next/navigation";
interface props{
    isVisible:boolean;
}

const fetchMovie = (search:string) => fetch<MovieType>("movie", false, ["movie_id", "movie_name"],(query) => query.like("movie_name",`%${search}%`));
const SearchBar : FC<props> = ({isVisible}) => {

const [search, setSearch] = useState('');
const [res,setRes] = useState<MovieType[]>([]);

    useEffect(() => {
        const searchRes=  async  ()=>{

            if(search.length>0){
            const movies = await  fetchMovie(search)
            setRes(movies)
            }else {
            setRes([])
            }

        }
        if(!isVisible){ setSearch('')}

        const debounceTimer = setTimeout(searchRes, 300);

        return () => clearTimeout(debounceTimer);


    }, [search,isVisible]);

    const router = useRouter();
    const handleRouterClick = (movieId: number) => {
        router.push(`/movie/${movieId}?upcoming=false}`);
    };



    return (
        <><motion.input
                id="search"
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
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
            <AnimatePresence>
                {isVisible && res.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-black ring-1 ring-teal-500 rounded-xl shadow-lg overflow-hidden"
                    >
                        {res.map((movie) => (
                            <div

                                onClick={()=>handleRouterClick(movie.movie_id)}
                                key={movie.movie_id} className="px-4 py-2 hover:bg-teal-900 cursor-pointer">
                                {movie.movie_name}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default SearchBar;
