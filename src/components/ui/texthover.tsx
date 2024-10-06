import { cn } from '@/lib/utils'
import React from 'react'

export default function Texthover({text,href,className}:{text:string,href?:string,className?:string}) {
    return (
        <a href={href} role="link" className={cn("relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100",className)}>
            {text}
        </a>
    )
}
