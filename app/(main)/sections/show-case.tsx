'use client'
import {Timeline} from "@/components/ui/Timeline";
import pic1 from '@/assets/rooms/picture1.jpg'
import pic2 from '@/assets/rooms/picture2.jpg'
import pic3 from '@/assets/rooms/picture3.jpg'
import pic4 from '@/assets/rooms/picture4.jpg'




const Checksvg = () =>{
    return (
        <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
             aria-hidden="true"
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"/>
        </svg>
    )
}

export const ShowCase = () => {


    const data = [
        {
            title: "our cinema",
            content: (
                <div
                    className="grid iphone5:rid-cols-2 iphone5:grid-rows-2 medium-phone:grid-cols-2 medium-phone:grid-rows-3 large-phone:grid-cols-2 large-phone:grid-rows-3 tablet:grid-cols-4 tablet:grid-rows-2  gap-4 h-[400px]">
                    <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden">
                        <img
                            src={pic2.src}
                            alt="Room 1"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="col-span-2 relative rounded-lg overflow-hidden">
                        <img
                            src={pic4.src}
                            alt="Room 2"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <img
                            src={pic3.src}
                            alt="Room 3"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="relative rounded-lg overflow-hidden">
                        <img
                            src={pic1.src}
                            alt="Room 4"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Location",
            content: (
                <div className="mt-10   rounded-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79529.55152405263!2d2.921775964459509!3d36.74722677912593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb25e7eec01dd%3A0xe584b5a2d6569712!2z2LPZitmG2YXYpyDYp9mE2KzYstin2KbYsdmK2Kk!5e1!3m2!1sen!2sdz!4v1725331701279!5m2!1sen!2sdz"
                         height="300" className='rounded-md w-full'   loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            ),
        },
        {
            title: "Services",
            content: (
                <div>

                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        We offer the following
                    </p>
                    <div className="mb-8">

                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">

                           <Checksvg/> Latest released Movies
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            <Checksvg/> Food and drinks
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            <Checksvg/> fun Events
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            <Checksvg/> Musical live shows
                        </div>
                        <div
                            className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            <Checksvg/> Best prices in algiers
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
    ];
    return (
        <Timeline data={data}/>
    )
}
