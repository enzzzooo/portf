'use client';
import {useState, useEffect} from 'react';
import Image from "next/image";
import logo from "../../public/logo.jpeg";
import Link from "next/link";
import ScrollLock from "./ScrollLock";

export default function Menu(){
    const menuLinks = [
        {path: "/", label: "Home"},
        {path: "/about", label: "About"},
        {path: "/contact", label: "Contact"},
        {path: "/designs", label: "Designs"},
        {path: "/lab", label: "Lab"},
    ]
// by default false
    const [menu, setMenu] = useState(false);
    const [blockScroll, allowScroll] = ScrollLock();
    if (menu) {
        blockScroll();
    }
    if (!menu) {
        allowScroll();
    }
    return (
        <div className={`flex justify-between px-5 bg-green ${menu && "fixed w-screen h-screen"}`}>
            {/* logo */}
            <Link href="/"><Image alt="Logo" src={logo} onClick={() => {if (!menu) {setMenu(false)}}} className='size-20'></Image></Link>
            {/* links */}
            <ul className={menu == true ? "block" : "hidden"}>
                {menuLinks.map((link, index) => (
                    <li key={index}>
                        <Link href={link.path} onClick={() => setMenu(!menu)}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* menu open/close */}
            <button onClick={() => setMenu(!menu)}>
                {/* if menu == true (open) then X, else Menu */}
                {menu ? <span className='bg-blue-600 z-10'>&#10005;</span> : "Menu"}
            </button>
        </div>
    )
}
