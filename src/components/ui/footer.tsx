import React from 'react'
import Link from 'next/link'
import { GithubIcon } from '@/components/icons/icons'

// Component renders footer with link to Sabo's source code
export function Footer() {
    return (
        <footer className="w-full p-4 text-xs text-left">
            <Link
                className="flex items-center opacity-20 hover:opacity-100"
                href="https://github.com/gosabo/takehome"
            >
                <GithubIcon /> <span className="pl-2 font-mono">Source</span>
            </Link>
        </footer>
    )
};