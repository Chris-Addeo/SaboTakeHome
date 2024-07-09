import React from "react";
import Image from "next/image";

// Component Renders Sabo's Application Logo
export function Logo() {
    return (
        <Image src="/sabo.png" alt="SABO logo" width={200} height={200} priority />
    )
};