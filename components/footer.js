import { ImMail, ImPhone, ImArrowUp } from "react-icons/im"
import Image from "next/image";
import Logo from "../assets/logo.png";

const Footer = () => {
    return (
        <div className="bg-black py-10">
            <div className="container mx-auto">
                <div className="flex items-center">
                    <div className="mr-8 text-common flex items-center">
                        <ImMail />
                        <span className="ml-2 text-[15px]">info@avex-tankstellen.de</span>
                    </div>
                    <div className="text-common flex items-center">
                        <ImPhone />
                        <span className="ml-2 text-[14px]">02234 95733-119</span>
                    </div>
                    <div className="flex-1" />
                    <div className="">
                        <Image src={Logo} width={210} height="auto" alt="logo" />
                    </div>
                </div>
                <div className="border border-white my-3" />
                <div className="flex items-center text-common font-bold">
                    <span className="mx-2 cursor-pointer text-[13px]">© 2024 | Trans-Oil</span>
                    <div className="flex-1" />
                    <span className="mx-2 cursor-pointer text-[13px]">Contacts</span>
                    <span className="mx-2 cursor-pointer text-[13px]">AGB</span>
                    <span className="mx-2 cursor-pointer text-[13px]">Imprint</span>
                    <span className="mx-2 cursor-pointer text-[13px]">Data Protection</span>
                    <div className="flex-1" />
                    <ImArrowUp />
                </div>
            </div>
        </div>
    )
}

export default Footer;