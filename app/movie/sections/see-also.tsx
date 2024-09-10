'use client'
import Carousel from "@/components/ui/Carousel";


import Heading from "@/components/ui/Heading";
import {motion} from "framer-motion";
import {ChevronIcon, RocketIcon} from "@/assets/icons/Icons";
import {Meteors} from "@/components/ui/Meteor-background";
import MovieCard from "@/components/ui/movie-card";
import React, {cache, useEffect, useState} from "react";
import {fetch} from "@/lib/supabase/client-api";
import {MovieType} from "@/app/(main)/sections/Explore";
import {useRouter} from "next/navigation";
import {Card} from "@/components/ui/Card";
import Link from "next/link";
import {FlipWords} from "@/components/ui/flip-word";


const getSimiliarMovies = cache(async (movie_genre: string,MovieId:number) => {

    return await fetch<MovieType>("movie", false, ["movie_name","movie_poster","movie_id"],(query)=>query.eq('movie_genre',movie_genre).neq('movie_id',MovieId));

})
const getUpcomingMovies = cache(async (table:string,movie_genre: string) => {

    return await fetch<MovieType>(table, false, ["movie_name","movie_poster","movie_id"]);

})

const SeeAlso = ({movie }:{movie:MovieType[]}) => {
    const router = useRouter();
    const [similiarMovies, setSimiliarMovies] = useState<MovieType[]>([]);
    const [UpComingMovies, setUpComingMovies] = useState<MovieType[]>([]);
    useEffect(() => {

        const getData = async () => {
            await  getSimiliarMovies(movie[0].movie_genre,movie[0].movie_id).then(results => setSimiliarMovies(results))
            await  getUpcomingMovies("upcoming_movies",movie[0].movie_genre).then(results => setUpComingMovies(results))

        };
        getData();
    }, []);

    const handleRouterClick = (movieId: number,isUpcoming: boolean) => {
        router.push(`/movie/${movieId}?upcoming=${isUpcoming}`);
    };

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
                        <Heading size="medium" variant='white'>see also</Heading>
                        <div className='relative my-auto pt-2 inline-block w-max '>
                            <RocketIcon/>

                        </div>
                    </motion.div>
                    {similiarMovies.length>0 ?(
                        <Carousel>
                            {similiarMovies.map((card, index) => (
                                <MovieCard
                                    size='default'
                                    key={index}
                                    label={card.movie_name}
                                    image={card.movie_poster}
                                    onClick={() => handleRouterClick(card.movie_id,false)}
                                    className="iphone5:flex-[0_0_45%] slighty-large-phone:flex-[0_0_35%] large-phone:flex-[0_0_33%] tablet:flex-[0_0_28%] extra-large-tablet:flex-[0_0_25%] laptop:flex-[0_0_15%] min-w-0 pl-4"
                                />
                            ))}
                        </Carousel>

                    ):(

                        <Card className="w-full bg-gradient-to-br from-teal-500  text-white shadow-lg">
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">No Match</h3>
                                <p className="text-lg font-semibold">
                                    NO MATCH MAYBE CHECK OTHER MOVIES?
                                </p>
                                <div className="mt-4">
                                    <RocketIcon className="w-12 h-12 animate-bounce" />
                                </div>
                            </div>
                        </Card>

                    )}

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
                                onClick={() => handleRouterClick(card.movie_id,true)}
                                className="iphone5:flex-[0_0_45%] slighty-large-phone:flex-[0_0_35%] large-phone:flex-[0_0_33%] tablet:flex-[0_0_28%] extra-large-tablet:flex-[0_0_25%] laptop:flex-[0_0_15%] min-w-0 pl-4"
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>

    )
}

export default SeeAlso;