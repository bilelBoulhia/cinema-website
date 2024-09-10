'use client'

import Carousel from "@/components/ui/Carousel";

import Heading from "@/components/ui/Heading";

import {Meteors} from "@/components/ui/Meteor-background";
import {ChevronIcon, RocketIcon} from "@/assets/icons/Icons";
import {motion} from "framer-motion"
import React, {useEffect, useState} from "react";
import {fetch} from "@/lib/supabase/client-api";
import MovieCard from "@/components/ui/movie-card";
import {useRouter} from "next/navigation";

export type MovieType = {
    movie_id: number,
    movie_name: string,
    movie_poster: string,
    movie_description: string,
    movie_rating?: string,
    movie_director:number,
    movie_genre:string,
    movie_language:string,
    program_date: string
}


const Explore = () => {


    const [ThisWeekMovies, setThisWeekMovies] = useState<MovieType[]>([]);
    const [UpComingMovies, setUpComingMovies] = useState<MovieType[]>([]);
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            const movies = await fetch<MovieType>("movie", false, ["movie_name", "movie_poster","movie_id"]);
            const upComingmovies = await fetch<MovieType>("upcoming_movies", false, ["movie_name", "movie_poster","movie_id"]);

            setThisWeekMovies(movies);
            setUpComingMovies(upComingmovies);


        };
        getData();
    }, []);

    const handleRouterClick = (page: 'movie' | 'ThisWeekmovies',movieId?: number,isUpcoming: boolean = false) => {
      page === 'movie' ?  router.push(`/${page}/${movieId}?upcoming=${isUpcoming}`) : router.push(`/${page}`)
    };


    return (
        <div className="relative w-full overflow-hidden">
            <Meteors number={30} className="absolute inset-0"/>
            <div className="relative z-10">
                <div className="w-full p-5">
                    <motion.div
                        className='flex gap-2 items-start flex-row cursor-pointer'
                        whileTap={{x: 10}}
                        onClick={()=>handleRouterClick('ThisWeekmovies')}
                        whileHover={{x: 10}}
                        transition={{type: "spring", stiffness: 400, damping: 10}}
                    >
                        <Heading
                            size="medium" variant='white'>This Week Movies</Heading>
                        <div className='relative my-auto pt-2 inline-block w-max '>
                            <RocketIcon/>
                        </div>
                    </motion.div>
                    <Carousel>
                        {ThisWeekMovies.map((card, index) => (
                            <MovieCard
                                size='default'
                                key={index}
                                label={card.movie_name}
                                image={card.movie_poster}
                                onClick={() => handleRouterClick('movie',card.movie_id,false)}
                                className="iphone5:flex-[0_0_45%] slighty-large-phone:flex-[0_0_35%] large-phone:flex-[0_0_33%] tablet:flex-[0_0_28%] extra-large-tablet:flex-[0_0_25%] laptop:flex-[0_0_15%] min-w-0 pl-4"
                            />
                        ))}
                    </Carousel>
                </div>
                <div className="w-full p-5">
                    <motion.div
                        className='flex gap-2 items-start justify-start flex-row cursor-pointer'
                        whileTap={{x: 10}}
                        whileHover={{x: 10}}
                        transition={{type: "spring", stiffness: 400, damping: 10}}
                    >
                        <Heading size="medium" variant='white'>Upcoming Movies</Heading>

                        <div className='relative my-auto pt-2 inline-block w-max '>
                            <RocketIcon/>
                        </div>


                    </motion.div>
                    <Carousel>
                        {UpComingMovies.map((card, index) => (
                            <MovieCard
                                size='default'
                                key={index}
                                label={card.movie_name}
                                image={card.movie_poster}
                                onClick={() => handleRouterClick('movie',card.movie_id,true)}
                                className="iphone5:flex-[0_0_45%] slighty-large-phone:flex-[0_0_35%] large-phone:flex-[0_0_33%] tablet:flex-[0_0_28%] extra-large-tablet:flex-[0_0_25%] laptop:flex-[0_0_15%] min-w-0 pl-4"
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>

    )
}
export default Explore;