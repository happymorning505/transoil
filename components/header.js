"use client"

import React, { useState } from "react";
import Image from "next/image";

import Logo from "../assets/logo.png";
import GermanyFlag from "../assets/germany.svg";
import CroatiaFlag from "../assets/croatia.jpg";
import Link from "next/link";

const Header = () => {
    return (
        <div className="fixed top-0 w-full">
            <div className="container mx-auto">
                <div className="flex items-center py-4">
                    <div className="mr-10">
                        <Image src={Logo} width={300} height="auto" alt="logo" />
                    </div>
                    <div className="text-white mx-2 text-lg px-4 py-2 hover:bg-white/30 rounded-md transition-all duration-300">
                        <Link href={"/"}>
                            <span>Home</span>
                        </Link>
                    </div>
                    <div className="text-white mx-2 text-lg px-4 py-2 hover:bg-white/30 rounded-md transition-all duration-300">
                        <Link href={"/"}>
                            <span>Company</span>
                        </Link>
                    </div>
                    <div className="text-white mx-2 text-lg px-4 py-2 hover:bg-white/30 rounded-md transition-all duration-300">
                        <Link href={"/"}>
                            <span>Products</span>
                        </Link>
                    </div>
                    <div className="text-white mx-2 text-lg px-4 py-2 hover:bg-white/30 rounded-md transition-all duration-300">
                        <Link href={"/"}>
                            <span>Contacts</span>
                        </Link>
                    </div>
                    <div className="flex-1"></div>
                    <div className="border border-white mx-1">
                        <Image src={GermanyFlag} alt="germany" width={50} height={35} />
                    </div>
                    <div className="border border-white mx-1">
                        <Image src={CroatiaFlag} alt="Croatia" width={50} height={35} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;