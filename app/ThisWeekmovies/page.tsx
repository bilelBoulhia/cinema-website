'use client'

import {useState, useEffect, use} from 'react'
import { CardList } from "@/components/ui/Card-list"
import Heading from "@/components/ui/Heading"
import MovieCard from "@/components/ui/movie-card"
import {proc} from "@/lib/supabase/client-api";
import {CategoryData} from "@/app/(main)/sections/Categories";
import {MovieType} from "@/app/(main)/sections/Explore";
import {useRouter} from "next/navigation";


interface GroupedMovies {
    [key: string]: MovieType[]
}

export default function Component() {
    const [groupedMovies, setGroupedMovies] = useState<GroupedMovies>({})
    useEffect(() => {

        const fetchMovies = async () => {


            const data = await proc('get_movie_program');


            const grouped = data.data.reduce((acc: GroupedMovies, movie: MovieType) => {
                if (!acc[movie.program_date]) {
                    acc[movie.program_date] = []
                }
                acc[movie.program_date].push(movie)
                return acc
            }, {})

            setGroupedMovies(grouped)
        }

        fetchMovies()
    }, [])

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
    }

    const router = useRouter();
    const handleRouterClick = (movieId: number) => {
        router.push(`/movie/${movieId}?upcoming=false}`);
    };

    return (
        <div className="w-full flex-1 flex gap-2 overflow-x-hidden flex-col items-center justify-center">
            {Object.entries(groupedMovies).map(([date, movies]) => (
                <div key={date} className="w-full">
                    <div className='flex p-4 flex-row items-center justify-start w-full mt-14 relative'>
                        <Heading
                            className='medium-phone:text-4xl iphone5:text-5xl lg:text-4xl font-bold'
                            variant='white'
                            size='default'
                        >
                            {formatDate(date)}
                        </Heading>
                        <div
                            className='flex-grow h-0.5 mt-4 ml-2'
                            style={{
                                background: 'linear-gradient(to right, white, transparent)'
                            }}
                        />
                    </div>

                    <CardList>
                        {movies.map((movie, index) => (

                            <div key={index} className='flex flex-col justify-center items-center'>
                                <MovieCard
                                    onClick={() => handleRouterClick(movie.movie_id)}
                                    label={movie.movie_name}
                                    image={movie.movie_poster}
                                    size='small'
                                />
                            </div>
                        ))}
                    </CardList>
                </div>
            ))}
        </div>
    )
}