import Image from 'next/image';
import cw from '@/assets/cw.jpg'
import BookingForm from "@/components/Booking";


const Hero = () => {
    return (
        <div className="relative w-full min-h-screen sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-900 overflow-hidden">
            <Image
                src={cw}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>

            <div className="absolute inset-0 flex  flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg">
                    <span className="bg-primary iphone5:text-xs  px-2 py-1 rounded font-semibold inline-block mb-2">
                        THIS WEEK'S PREMIERE
                    </span>
                    <h1 className="iphone5:text-2xl medium-phone:text-4xl tablet:text-6xl  laptop:text-7xl font-extrabold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-emerald-700 via-green-800 to-teal-950 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                        Marvel
                    </h1>
                    <span className="iphone5:text-[3vw] laptop:text-xl text-left  py-1 rounded font-semibold inline-block ">
                  The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe
                    </span>

                    <BookingForm/>

                </div>
            </div>
        </div>
    );
}

export default Hero;