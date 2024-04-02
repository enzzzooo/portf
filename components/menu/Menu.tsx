'use client';
import {useState, useRef, useEffect} from 'react';
import Image from "next/image";
import logo from "../../public/logo.jpeg";
import Link from "next/link";
export default function Menu(){
    const menuLinks = [
        {path: "/", label: "Home"},
        {path: "/about", label: "About"},
        {path: "/services", label: "Services"},
        {path: "/contact", label: "Contact"},
        {path: "/lab", label: "Lab"},
    ]
// by default false
    const [menu, setMenu] = useState(false);

    // when opened, true
    const toggleMenu = () => {
        // opposite of current state, when clicked, which triggers this function
        setMenu(!menu);
    }
    // sets false to close
    const closeMenu = () => {
        setMenu(false);
    }
    return (
        <div className={`flex justify-between mx-5 bg-grn ${menu && "absolute w-screen h-screen"}`}>
            {/* logo */}
            <Image alt="Logo" src={logo} onClick={closeMenu} className='size-20'></Image>
            {/* links */}
            <ul className={menu == true ? "block" : "hidden"}>
                {menuLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path} onClick={closeMenu}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* menu open/close */}
            <button onClick={toggleMenu}>
                {/* if menu == true (open) then X, else Menu */}
                {menu ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12`" /></svg> : "Menu"}
            </button>
        </div>
    )
}