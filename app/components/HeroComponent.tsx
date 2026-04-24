
import React from 'react';
import Image from "next/image";


type HeroTypes = {
    title: string;
    desc?: string;
    image?: string;
};

    export const HeroComponent = ({title, desc, image}: HeroTypes) => {
        return (
            <div className="hero">
                <div className="h-100 w-full rounded-xl flex items-center justify-center flex-col gap-5 bg-black/50 p-10">
                <h1 className="text-7xl font-extrabold text-white">{title} page</h1>
                </div>
            </div>
        );
    }
