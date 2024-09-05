
import Main from "@/app/movie/sections/main";
import SeeAlso from "@/app/movie/sections/see-also";

export default async function Index() {
    return (
        <div className="w-full flex-1  flex gap-5  overflow-x-hidden flex-col items-center">

            <Main/>
            <SeeAlso/>

        </div>
    );
}