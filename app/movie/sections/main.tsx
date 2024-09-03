import Image from "next/image";
import mr from "@/assets/action.jpg";
import BookingForm from "@/components/Booking";
import {Tag} from "@/components/ui/Tag";
import clsx from "clsx";
import {DirectorIcon, MovieIcon, StarIcon, TimeIcon} from "@/assets/icons/Icons";
import {MoveIcon, VideoIcon} from "@radix-ui/react-icons";


export default function Main() {
    return (
        <div className="w-full flex-1 flex gap-5 overflow-x-hidden tablet:flex-row flex-col items-start justify-start">
            <div className="w-full tablet:w-80 ">
                <div className="relative h-80 w-full  tablet:w-80 flex flex-row">
                    <div className="w-full h-full">
                        <Image
                            src={mr}
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                            className="rounded-lg tablet:p-1 p-0  tablet:mt-12 mt-0  transform transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className='absolute max-h-[25vw]  iphone5:rounded   w-full  inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent'
                        />
                </div>
            </div>
            <div className="flex flex-col mt-12 px-1 max-w-lg">
                <h1 className="font-bold medium-phone:text-4xl iphone5:text-2xl lg:text-7xl">
                    1917
                </h1>
                <h1 className="font-semibold">
                April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two
                    soldiers are assigned to race against time and deliver a message that will stop 1,600 men
                    from walking straight into a deadly trap.
                </h1>

                <div className="grid grid-cols-2 grid-rows-2 gap-3 my-5">
                    <div className="flex items-center">

                        <TimeIcon/>

                        <span>Duration:<Tag>1h 59min</Tag></span>
                    </div>

                    <div className="flex items-center">


                        <StarIcon/>
                        <span>Rating: <Tag>8.3/10</Tag></span>
                    </div>
                    <div className="flex items-center">

                        <DirectorIcon/>
                        <span>Director: <Tag>Sam Mendes</Tag></span>
                    </div>
                    <div className="flex items-center">
                        <MovieIcon/>
                        <span>Genre: <Tag>Musical</Tag></span>
                    </div>
                </div>

                <div className="max-w-lg">

                </div>

                <div className="max-w-lg">
                    <BookingForm/>
                </div>
            </div>
        </div>
    );
}