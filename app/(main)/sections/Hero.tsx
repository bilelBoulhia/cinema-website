import Image from 'next/image';
import cw from '@/assets/1322340.jpg'
const Hero = ()=> {
    return (
        <div className="w-full bg-gray-900 relative">
            <div className="relative">
                <Image
                    src={cw}
                    alt="Background"
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                    className="z-0"
                />
                <div className="absolute  inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
            </div>

            <div className="absolute mt-1 medium-phone:pt-16 medium-phone:p-4 text-white max-w-lg  inset-0  flex-col justify-center items-start ">
        <span className="bg-primary text-xs  px-2 py-1 rounded  font-semibold inline-block mb-2">
            THIS WEEK'S MOVIE
        </span>
                <h1 className="iphone5:text-md font-extrabold medium-phone:text-lg large-phone:text-3xl   leading-snug text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-teal-800">Spider-Man: No Way Home</h1>
            </div>
        </div>

    );
}
export default Hero