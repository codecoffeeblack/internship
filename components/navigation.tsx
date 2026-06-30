"use client"

import { Session } from 'next-auth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DefaultAvatar from './default-avatar'

const NavLinks = [
    {
        href: "/home",
        label: "Home"
    },
    {
        href: "/profile",
        label: "Profile"
    },
]


const Navigation = ({ user }: {user?:Session["user"]}) => {
    const pathName = usePathname()
    const initial = user?.name?.split(" ")
    console.log(initial)
  return (
    <div>
        <nav className="shadow-md relative bg-white after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                        <div className="flex shrink-0 items-center">
                            <h1 className="font-bold text-2xl">
                               thread.
                            </h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                            {
                                NavLinks.map((element, index) => {
                                    const isActive = element.href === pathName 

                                    return(
                                        <Link
                                            key={index}
                                            aria-current={isActive? "page": undefined}
                                            href={element.href} 
                                            className={`rounded-md px-3 py-2 text-sm font-medium 
                                            hover:bg-white/5 
                                            hover:text-gray-700 ${isActive? 'text-gray-400': 'text-black'}`}>
                                                {element.label}
                                        </Link>
                                    )
                                })
                            }
                            <Link href="#" aria-current="page" className="rounded-md bg-black px-3 py-2 text-sm font-medium text-white">New Thread</Link>
                        </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">Open user menu</span>
                            <DefaultAvatar firstName={initial?.[0] || ''} lastName={initial?.[1] || ''} size={32}/>
                            {/* <div className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10 text-white">{initial}</div> */}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation


