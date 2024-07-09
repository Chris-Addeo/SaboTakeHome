import React from "react";
import Image from "next/image";
import Link from "next/link";

// Just in case you think what's missing is Clippy
export function Clippy() {
    return (
        <Link href="#">
            <Image
                src="/clippy.gif"
                alt="Clippy"
                width={100}
                height={100}
                className="absolute top-0 left-0"
            />
        </Link>
    )
};