"use client"

import {useEffect} from "react";
import {animatePageIn} from "@/app/utils/animations";

export default function Template({children}) {
    useEffect(() => {
        animatePageIn();
    }, [])
    return (
        <div>
            <div id={"banner-1"}></div>
            <div id={"banner-2"}></div>
            <div id={"banner-3"}></div>
            <div id={"banner-4"}></div>
            {children}
        </div>
    )
}