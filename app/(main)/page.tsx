import Hero from "@/app/(main)/sections/Hero";
import Categories from "@/app/(main)/sections/Categories";
import Explore from "@/app/(main)/sections/Explore";
import {Shojumaru} from "next/dist/compiled/@next/font/dist/google";
import {ShowCase} from "@/app/(main)/sections/show-case";
import MovingLine from "@/components/ui/Moving-line";




const data = [
    {
        node: (
            <div className="content w-full mb-10 ">
                <p className="text-2xl font-bold text-white  ">
                    Location
                </p>
                <p className="text-base font-normal text-neutral-300  ">
                    If you look closely, you can see the path is being animated.
                </p>
                <div className="flex space-x-4 w-full ">
                    <div className="w-full h-40 md:h-96 rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 mt-4"/>
                    <div className="w-full h-40 md:h-96 rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 mt-4"/>
                </div>
            </div>
        ),
    },
    {
        node: (
            <div className="content w-full mb-10 ">
                <p className="text-2xl font-bold text-white  ">
                    Location
                </p>
                <p className="text-base font-normal text-neutral-300  ">
                    If you look closely, you can see the path is being animated.
                </p>
                <div className="flex space-x-4 w-full ">
                    <div className="w-full h-40 md:h-96 rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 mt-4"/>
                    <div className="w-full h-40 md:h-96 rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 mt-4"/>
                </div>
            </div>
        ),
    },
    {
        node: (
            <div className="content w-full mb-10 ">
                <p className="text-2xl font-bold text-white  ">
                    Location
                </p>
                <p className="text-base font-normal text-neutral-300  ">
                    If you look closely, you can see the path is being animated.
                </p>
                <div className="flex space-x-4 w-full ">
                    <div className="w-full h-40 md:h-96 rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 mt-4"/>
                    <div className="w-full h-40 md:h-96 rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 mt-4"/>
                </div>
            </div>
        ),
    },
]


export default async function Index() {


    return (
        <div className="w-full flex-1  flex gap-5  overflow-x-hidden flex-col items-center">
            <Hero/>
            <Categories/>
            <Explore/>
            <ShowCase/>




        </div>
    );
}

