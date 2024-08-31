import React, {HTMLAttributes} from "react";
import { cva, type VariantProps } from "class-variance-authority"
import {cn} from "@/lib/utils";

const headervariants = cva("",{
    variants:{
        variant:{
            darkColor:'from-emerald-900 via-green-800 to-teal-950',
            lightColor:'from-emerald-500 via-green-600 to-teal-700'
        },
        size:{
            default:'medium-phone:text-4xl iphone5:text-2xl lg:text-7xl',
            medium: 'medium-phone:text-md iphone5:text-xl lg:text-2xl',

        }
    }
})


interface props extends HTMLAttributes<HTMLHeadingElement>,VariantProps<typeof headervariants> {

    children: string;

}

const Heading : React.FC<props>=({children,size,variant,className})=>{

    return (
        <span className={cn(
            " relative  z-20 font-bold text-center text-black dark:text-white font-sans tracking-tight"
        ,headervariants({size})
        )}>
                    <div
                        className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div
                            className={cn("absolute  left-0 top-[1px]  bg-clip-text bg-no-repeat text-transparent py-4   bg-gradient-to-r from-emerald-500 via-green-600 to-teal-700 [text-shadow:0_0_rgba(0,0,0,0.1)]",
                                headervariants({variant,className})

                            )}
                         >
                            <span >{children}</span>
                        </div>
                        <div
                            className={cn("relative bg-clip-text drop-shadow-2xl  text-transparent bg-no-repeat bg-gradient-to-r   py-4",
                                headervariants({variant,className})

                                )}>
                            <span >{children}</span>
                        </div>
                    </div>

        </span>
    )
}
export default Heading