"use client"
import {usePathname, useRouter} from "next/navigation";
import {animatePageOut} from "@/app/utils/animations";
import Link from "next/link";

const TransitionLink = ({href, label}) => {
    const router = useRouter();
    const pathName = usePathname();

    const handleClick = () => {
        if (pathName !== href) {
            animatePageOut(href, router);
        }
    }

    return (
        <button onClick={handleClick}>{label}</button>
    );
}

export default TransitionLink;