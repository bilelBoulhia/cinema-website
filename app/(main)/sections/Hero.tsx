import Image from 'next/image';
import cw from '@/assets/movie-wallpaper.jpg'
import BookingForm from "@/components/Booking";


const Hero = () => {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gray-900 overflow-hidden">
            <Image
                src={cw}
                alt="Background"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg">
                    <span className="bg-primary text-xs px-2 py-1 rounded font-semibold inline-block mb-2">
                        THIS WEEK'S PREMIERE
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-transparent bg-clip-text  bg-gradient-to-r from-emerald-700 via-green-800 to-teal-950 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                       1917 : WW1
                    </h1>

                    <BookingForm/>
                </div>
            </div>
        </div>
    );
}

export default Hero;