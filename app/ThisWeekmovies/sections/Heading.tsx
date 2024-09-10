import Heading from "@/components/ui/Heading";


const Headings=()=>{
   return (
       <div className='flex p-4 flex-row items-center justify-start w-full mt-14 relative'>
          <div className=''>
              <Heading className='medium-phone:text-4xl iphone5:text-5xl lg:text-4xl font-bold' variant='lightColor'
                       size='default'>
                  Musical
              </Heading>
          </div>

           <div
               className='flex-grow h-0.5 mt-4 ml-2'
               style={{
                   background: 'linear-gradient(to right, teal, transparent)'
               }}
           ></div>
       </div>
   )
}

export default Headings;