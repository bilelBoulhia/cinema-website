'use client'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React from 'react'
import SearchBar from "@/components/Search-bar"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const links = [
        { href: "#this-week", label: "Weekly" },
        { href: "#categories", label: "Categories" },
        { href: "#movies", label: "Movies" },
        { href: "#about", label: "About" }
    ]
    const [visible, setVisible] = React.useState(false)
    const pathname = usePathname()

    const isMainPage = pathname === '/'

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        if (isMainPage) {
            document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
        } else {
            window.location.href = '/' + href
        }
    }

    return (
        <nav className="fixed z-50 flex justify-end items-center w-full p-1">
            <div className="nav-links iphone5:text-[0.70rem] iphone5:p-2 medium-phone:text-[0.85rem] large-phone:text-[1rem] backdrop-blur-sm bg-black shadow-[5px_5px_0px_0px_rgba(65,179,162,0.4)] rounded-2xl flex items-center gap-x-4">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={isMainPage ? link.href : '/'}
                        className="cursor-pointer relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-primary after:shadow-[5px_5px_rgba(0,_98,_90,_0.5),_10px_10px_rgba(0,_98,_90,_0.2)] after:transition-all after:duration-300 hover:after:w-full"
                        onClick={(e) => handleLinkClick(e, link.href)}
                    >
                        {link.label}
                    </Link>
                ))}
                <SearchBar isVisible={visible} />

                <div className="border-l bg-primary shadow-[3px_3px_rgba(12,_124,_102,_0.8),_6px_6px_rgba(13,_124,_102,_0.6)] h-5 mx-2"></div>

                <div className="relative flex items-center">
                    <MagnifyingGlassIcon
                        onClick={() => setVisible(!visible)}
                        className="cursor-pointer size-5 laptop:size-6 z-20"
                    />
                </div>
            </div>
        </nav>
    )
}