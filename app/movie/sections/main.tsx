import Image from "next/image";
import BookingForm from "@/components/Booking";
import {Tag} from "@/components/ui/Tag";

import {DirectorIcon, LanguageIcon, MovieIcon, StarIcon} from "@/assets/icons/Icons";
import {MovieType} from "@/app/(main)/sections/Explore";
import {cache} from "react";
import {fetch} from "@/lib/supabase/server-api";

interface DirectorData {
    director_name: string;
}

const getDirector = cache(async (id: number) => {
    return await fetch("directors", false, ["director_name"], (query) => query.eq('director_id', id)) as DirectorData[]
})



export default async function Main({movie,upcoming }:{movie:MovieType[],upcoming:boolean}) {
    const director: DirectorData[]  = await getDirector(movie[0].movie_director)




    return (
        <div className='w-full flex-1 flex gap-5 overflow-hidden flex-col items-start justify-start'>
            <div className="w-full flex-1 flex gap-2  overflow-x-hidden tablet:flex-row flex-col items-start justify-start">
                <div className="w-full tablet:w-80 h-full ">
                    <div className="w-full tablet:w-80 h-full relative">
                        <div className="w-full h-0 tablet:pb-[140%] pb-[80%]  overflow-hidden relative">
                            <Image
                                src={movie[0].movie_poster}
                                alt="Movie Poster"
                                fill={true}
                                quality={100}
                                priority
                                className="rounded-lg tablet:p-1 p-0 tablet:mt-12 mt-0 object-cover transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div
                            className='absolute max-h-[25vw] iphone5:rounded w-full inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent'/>
                    </div>

                </div>
                <div className="flex flex-col mt-12 px-1 max-w-lg">
                    <h1 className="font-bold medium-phone:text-4xl iphone5:text-2xl lg:text-7xl">
                        {movie[0].movie_name}
                    </h1>
                    <h1 className="font-semibold">
                        {movie[0].movie_description}
                    </h1>

                    <div className="grid grid-cols-2 grid-rows-2 gap-3 my-5">
                        <div className="flex items-center">


                            <LanguageIcon/>


                            <span><Tag>{movie[0].movie_language}</Tag></span>
                        </div>

                        <div className="flex items-center">


                            <StarIcon/>
                            <span><Tag>{movie[0].movie_rating}</Tag></span>
                        </div>
                        <div className="flex items-center">
                            <MovieIcon/>
                            <span><Tag>{movie[0].movie_genre}</Tag></span>

                        </div>
                        <div className="flex items-center">

                            <DirectorIcon/>
                            <span ><Tag >{director[0]?.director_name }</Tag></span>
                        </div>
                    </div>


                </div>


            </div>
            <div className="max-w-lg pl-2">
                <BookingForm  avialable={upcoming}/>
            </div>
        </div>
    );
}