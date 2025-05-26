'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LoadingBar from 'react-top-loading-bar'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-btn'

const Navbar = () => {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setProgress(30)
    const timer1 = setTimeout(() => setProgress(70), 150)
    const timer2 = setTimeout(() => setProgress(100), 300)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [pathname])

  return (
    <nav className="bg-background/60 sticky top-0 z-50 backdrop-blur border-b border-border transition-all">
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={3}
      />

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
       <Link
  href="/"
  className="text-2xl font-extrabold tracking-tight text-primary relative group transition-all duration-300"
>
  <span className="inline-block group-hover:scale-105 transition-transform duration-300">
    Subodh<span className="text-yellow-500">Blog</span>
  </span>
  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
</Link>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {['/', '/about', '/blog', '/contact'].map((path, idx) => (
            <Link
              key={idx}
              href={path}
              className="hover:scale-105 transition-transform text-muted-foreground hover:text-foreground font-medium"
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
          <div className="flex items-center gap-2 ml-4">
            <Button variant="outline">Login</Button>
            <Button variant="outline">Signup</Button>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger>
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-bold text-xl mb-4">SubodhBlog</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-4 text-base">
                    {['/', '/about', '/blog', '/contact'].map((path, idx) => (
                      <Link key={idx} href={path} className="hover:underline">
                        {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                      </Link>
                    ))}
                    <div className="mt-4 flex flex-col gap-2">
                      <Button variant="outline">Login</Button>
                      <Button variant="outline">Signup</Button>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
