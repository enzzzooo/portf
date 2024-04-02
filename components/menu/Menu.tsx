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
        <div className='flex justify-between mx-5 bg-grn '>
            <Image alt="Logo" src={logo} onClick={closeMenu} className='size-20'></Image>
            <ul className={menu == true ? "block" : "hidden"}>
                {menuLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path} onClick={closeMenu}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={toggleMenu}>
                {menu == true ? '&#x2715;' : "Menu"}
            </button>
        </div>
    )
}