'use client'



import {CardList} from "@/components/ui/Card-list";
import Heading from "@/components/ui/Heading";

export default  function Index() {




    return (
        <div className="w-full flex-1   flex gap-2  overflow-x-hidden flex-col items-center justify-center">

            <div className='flex p-4 flex-row items-center justify-start w-full mt-14 relative'>

                <Heading className='medium-phone:text-4xl iphone5:text-5xl lg:text-4xl font-bold'
                         variant='white' size='default'>
                    06/09/2024
                </Heading>
                <div
                    className='flex-grow h-0.5 mt-4 ml-2'
                    style={{
                        background: 'linear-gradient(to right, white, transparent)'
                    }}
                />
            </div>
            <CardList/>
            <div className='flex p-4 flex-row items-center justify-start w-full  relative'>

                <Heading className='medium-phone:text-4xl iphone5:text-5xl lg:text-4xl font-bold'
                         variant='white' size='default'>
                    08/09/2024
                </Heading>
                <div
                    className='flex-grow h-0.5 mt-4 ml-2'
                    style={{
                        background: 'linear-gradient(to right, white, transparent)'
                    }}
                />
            </div>
            <CardList/>
        </div>
    );
}

