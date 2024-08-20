'use client'

import { MagnifyingGlassIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import React, { useRef } from "react";
import SearchBar from "@/components/search-bar";
import { motion, useCycle } from "framer-motion";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menu"



const Mobile_navbar = () => {
    const links = ["movies", "categories", "this-week", "about"];
    const [visible, isVisible] = React.useState(false);

    return (
        <nav className=" flex justify-end items-center  bg-gradient-to-r from-primary to-black w-full  rounded  z-20  p-2 relative">

            <div className="flex items-center">
                <Menubar className='bg-transparent'>
                    <MenubarMenu>
                        <MenubarTrigger > <HamburgerMenuIcon  /></MenubarTrigger>
                        <MenubarContent className='bg-black'>

                            {links.map((link) => (

                                <MenubarItem
                                    key={link}
                                    className="cursor-pointer text-white text-lg"
                                    onClick={() => {
                                        document.getElementById(link)?.scrollIntoView({behavior: "smooth"});
                                    }}
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </MenubarItem>

                            ))}

                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>


            </div>

            <div
                className="border-l  bg-primary   shadow-[5px_5px_rgba(13,_124,_102,_0.8),_10px_10px_rgba(13,_124,_102,_0.6)] h-4 mx-8"></div>

            <SearchBar isVisible={visible}/>
            <div className="relative flex items-center mr-2">
                <MagnifyingGlassIcon
                    onClick={() => isVisible(!visible)}
                    className="cursor-pointer w-5 h-5 text-gray-100"
                />
            </div>
        </nav>
    );
}

export default Mobile_navbar;
