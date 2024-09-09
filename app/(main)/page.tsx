import Hero from "@/app/(main)/sections/Hero";
import Categories from "@/app/(main)/sections/Categories";
import Explore from "@/app/(main)/sections/Explore";
import {ShowCase} from "@/app/(main)/sections/show-case";
import React from "react";








export default async function Index() {



    return (
        <div className="w-full flex-1  flex gap-5  overflow-x-hidden flex-col items-center">
            <div className='w-full h-full' id="this-week"><Hero/></div>
            <div className='w-full h-full' id="categories"><Categories/></div>
            <div className='w-full h-full' id="movies"><Explore/></div>
            <div className='w-full h-full' id="about"><ShowCase/></div>
        </div>
    );
}

