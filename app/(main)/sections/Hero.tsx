import Image from 'next/image'
import { use } from 'react'
import BookingForm from "@/components/Booking"
import { fetch } from "@/lib/supabase/server-api"
import { Suspense } from "react"
import { MovieType } from "@/app/(main)/sections/Explore"
import Loading from "@/app/Loading"

type WeekMovie = {
    movie_cover: string
    ass_movie: number
}


const fetchWeeklyMovie = () => fetch<WeekMovie>("this_week_movie", false, ["asso_movie", "movie_cover"])
const fetchWeeklyMovieData = () => fetch<MovieType>("movie", false, ["movie_description", "movie_name"], (q) => q.eq('movie_id', 11))


const MovieData = () => {
    const weeklyMovie = use(fetchWeeklyMovie())
    const weeklyMovieData = use(fetchWeeklyMovieData())


    return (
        <>

            <Image
                src={weeklyMovie[0].movie_cover}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority


            />

            <div

                className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg">
          <span className="bg-primary iphone5:text-sm px-2 py-1 rounded font-semibold inline-block mb-2">
            THIS WEEK'S PREMIERE
          </span>
                    <h1 className="iphone5:text-5xl tablet:text-6xl laptop:text-7xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-green-800 to-teal-950 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        {weeklyMovieData[0].movie_name}
                    </h1>
                    <span className="iphone5:text-sm laptop:text-xl text-left py-1 rounded font-semibold inline-block">
                        {weeklyMovieData[0].movie_description}
          </span>
                    <BookingForm />
                </div>
            </div>
        </>
    )
}

const Hero = () => {
    return (
        <div className="relative overflow-y-hidden w-full min-h-screen sm:h-[400px] md:h-[500px] lg:h-[600px]  overflow-hidden">
            <Suspense fallback={<Loading />}>
                <MovieData />
            </Suspense>
        </div>
    )
}

export default Hero