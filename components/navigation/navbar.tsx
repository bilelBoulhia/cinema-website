'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import React from 'react';

import SearchBar from "@/components/Search-bar";
import Link from 'next/link';
const Navbar = () => {

    const links = [
        { href: "#this-week", label: "This Week" },
        { href: "#categories", label: "Categories" },
        { href: "#movies", label: "Movies" },
        { href: "#about", label: "About" }
    ];
    const [visible, isVisible] = React.useState(false);

    return (



        <nav className="fixed z-50  flex justify-end items-center w-full  p-2">

            <div className="nav-links iphone5:text-[0.60rem] iphone5:p-2  medium-phone:text-[0.75rem]  tablet:text-md  desktop:text-[0.80rem] backdrop-blur-sm bg-black shadow-[5px_5px_0px_0px_rgba(65,179,162,0.4)] rounded-2xl flex items-center gap-x-6">

                {links.map((link) => (

                    <Link
                        key={link.href}
                        href={link.href}
                        className="cursor-pointer relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:shadow-[5px_5px_rgba(0,_98,_90,_0.5),_10px_10px_rgba(0,_98,_90,_0.2)] after:transition-all after:duration-300 hover:after:w-full"
                        onClick={(e) => {
                            e.preventDefault();
                            document
                                .querySelector(link.href)
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
                <SearchBar isVisible={visible}/>

                <div className="border-l  bg-primary   shadow-[3px_3px_rgba(12,_124,_102,_0.8),_6px_6px_rgba(13,_124,_102,_0.6)] h-5 mx-2"></div>

                <div className="relative flex items-center">
                    <MagnifyingGlassIcon
                        onClick={() => isVisible(!visible)}
                        className="cursor-pointer size-5  laptop:size-6  z-20"
                    />

                </div>





            </div>

        </nav>

    );
};

export default Navbar;
