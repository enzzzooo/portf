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
            {/* if there is no menu open then display hidden */}
            <ul className={`!menu && "hidden"`}>
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
                {/* the X is unicode number 10,005 https://www.fileformat.info/info/unicode/char/2715/index.htm by react https://shripadk.github.io/react/docs/jsx-gotchas.html */}
                {menu ? String.fromCharCode(10005) : "Menu"}
            </button>
        </div>
    )
}
