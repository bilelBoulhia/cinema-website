import Main from "@/app/movie/sections/main";
import SeeAlso from "@/app/movie/sections/see-also";
import { MovieType } from "@/app/(main)/sections/Explore";
import { fetch } from "@/lib/supabase/client-api";
import { cache } from 'react'

type MoviePageProps = {
    params: {
        id: number
    };
    searchParams: {
        upcoming?: string
    }
};

const getMovie = cache(async (id: number) => {
    return await fetch<MovieType>("movie", false, ["*"], (query) => query.eq('movie_id', id))
})

const getUpcomingMovie = cache(async (id: number) => {
    return await fetch<MovieType>("upcoming_movies", false, ["*"], (query) => query.eq('movie_id', id))
})

export default async function Index({ params, searchParams }: MoviePageProps) {

    const movie = await getMovie(params.id);
    const upcomingMovie = await getUpcomingMovie(params.id);
    const isUpcoming = searchParams.upcoming === 'true';
    const param = isUpcoming ? upcomingMovie : movie;



    return (
        <div className="w-full flex-1 overflow-hidden flex gap-5 flex-col items-center">
            <Main movie={param} upcoming={isUpcoming} />
            <SeeAlso movie={param} />
        </div>
    );
}