"use client"

import { MenuIcon, Moon, Search, SearchIcon, Sun, User } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Progress } from "./ui/progress";

export default function Menu() {
    const { setTheme, theme } = useTheme();

    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    return(
        <>
        <header className="bg-background border-b-2 z-10 w-full sticky top-0">
        <div className="py-5 px-8 max-w-[1200px] mx-auto flex items-center justify-between lg:py-7 gap-x-12">
            <Link href='/' className='flex items-center justify-center lead !text-black dark:!text-white' aria-label='Hjem'>
                Nordvia
            </Link>

           

            <div className="flex items-center justify-center gap-x-8">
                <div className="w-full gap-x-2 bg-slate-200 py-3 px-4 hidden sm:flex items-center justify-center">
                    <Search className="!text-black" />
                    <input 
                        placeholder="Søk..."
                        className="bg-transparent outline-none placeholder:text-black text-black"
                    />
                </div>

                <Link href="/sok">
                    <span className="flex items-center justify-center !text-black dark:!text-white lead gap-x-2">
                        <SearchIcon className="size-6" />
                    </span>
                </Link>

                <button type="button">
                    <span className="flex items-center justify-center !text-black dark:!text-white lead gap-x-2">
                        <MenuIcon className="size-6" />
                    </span>
                </button>

                <Link href="/sign-in">
                    <span className="flex items-center justify-center !text-black dark:!text-white lead gap-x-2">
                        <User className="size-6" />
                    </span>
                </Link>

                <button>
                    <span className="flex items-center justify-center lead gap-x-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                {theme === "light" ? <Moon className="size-6 text-black dark:text-white" /> : <Sun className="size-6 text-black dark:text-white" />}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => setTheme("light")}>
                                    <Sun className="text-yellow-500"/> Lys
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setTheme("dark")}>
                                    <Moon className="text-black dark:text-white" /> Mørk
                                    
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </span>
                </button>

            </div>
        </div>
    <Progress value={scrollProgress} className="bg-yellow-100 h-1" />
    </header>
    </>
    )
}