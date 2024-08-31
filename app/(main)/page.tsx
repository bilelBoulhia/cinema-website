import Hero from "@/app/(main)/sections/Hero";
import Categories from "@/app/(main)/sections/Categories";
import Explore from "@/app/(main)/sections/Explore";







export default async function Index() {




  return (
      <div className="w-full flex-1  flex gap-5  overflow-x-hidden flex-col items-center">
          <Hero/>
          <Categories/>
          <Explore/>



      </div>
  );
}

