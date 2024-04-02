'use client';
import {useState, useRef, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
export default function Menu(){
    const menuLinks = [
        {path: "/", label: "Home"},
        {path: "/about", label: "About"},
        {path: "/services", label: "Services"},
        {path: "/contact", label: "Contact"},
        {path: "/lab", label: "Lab"},
    ]
    const container = useRef();
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        // opposite of current state, when clicked, which triggers this function
        setMenu(!menu);
    }
    return (
        <div ref={container}>
            <Image width={500} height={500} alt="Logo" src="../../public/logo.jpeg"></Image>
            <ul>
                {menuLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <button className="" onClick={toggleMenu}>
                {menu ? "Close" : "Menu"}
            </button>
        </div>
    )
}