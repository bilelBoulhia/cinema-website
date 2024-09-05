'use client'


import Heading from "@/app/Category/sections/Heading";
import {CardList} from "@/components/ui/Card-list";

export default  function Index() {




    return (
        <div className="w-full flex-1   flex gap-5  overflow-x-hidden flex-col items-center justify-center">

            <Heading/>
            <CardList/>
        </div>
    );
}

