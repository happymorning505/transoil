"use client"

import React, { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";

import Logo from "../assets/logo.png";
import GermanyFlag from "../assets/germany.svg";
import CroatiaFlag from "../assets/croatia.jpg";
import Link from "next/link";

const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > 10) {
                setActive(true);
            } else {
                setActive(false);
            }
        })
    }, [])

    return (
        <div className={`fixed top-0 w-full z-10 transition-all duration-500 ${active ? 'bg-[#111111] shadow-lg' : 'transparent'}`}>
            <div className="container mx-auto">
                <div className="flex items-center py-4 flex-col sm:flex-row">
                    <div className="mr-10 mb-2 sm:mb-0">
                        <Image src={Logo} width={200} height="auto" alt="logo" />
                    </div>
                    <div className="flex items-center">
                        <div className="text-white mx-2 text-sm md:text-lg px-4 py-2 hover:bg-white/30 rounded-md transition-all duration-300">
                            <Link href={"/"}>
                                <span>Home</span>
                            </Link>
                        </div>
                        <div className="text-white mx-2 text-sm md:text-lg px-4 py-2 hover:bg-white/30 rounded-md transition-all duration-300">
                            <Link href={"/"}>
                                <span>Company</span>
                            </Link>
                        </div>
                        <div className="text-white mx-2 text-sm md:text-lg px-4 py-2 hover:bg-white/30 rounded-md transition-all duration-300">
                            <Link href={"/"}>
                                <span>Products</span>
                            </Link>
                        </div>
                        <div className="text-white mx-2 text-sm md:text-lg px-4 py-2 hover:bg-white/30 rounded-md transition-all duration-300">
                            <Link href={"/"}>
                                <span>Contacts</span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 hidden sm:block"></div>
                    <div className="border border-white mx-1 hidden md:block">
                        <Image src={GermanyFlag} alt="germany" width={50} height={35} />
                    </div>
                    <div className="border border-white mx-1 hidden md:block">
                        <Image src={CroatiaFlag} alt="Croatia" width={50} height={35} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;