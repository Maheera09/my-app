"use client"

import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Home, Leaf, AlertTriangle, ShoppingBag, BarChart2, MessageSquare, Menu } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/plant-id", icon: Leaf, label: "Plant ID" },
    { href: "/diseases", icon: AlertTriangle, label: "Diseases" },
    { href: "/shop", icon: ShoppingBag, label: "Shop" },
    { href: "/track", icon: BarChart2, label: "Track" },
    { href: "/chat", icon: MessageSquare, label: "Chat" },
  ]

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/icon.png"
              alt="SproutBotanica Logo"
              width={30}
              height={30}
              
              className="object-contain"
            />
            <span className="text-2xl font-bold">SproutBotanica</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center flex-grow">
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button variant="ghost" className="text-white hover:text-green-200 hover:bg-green-700 transition-colors duration-200">
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-green-600">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-white hover:text-green-200 hover:bg-green-700 transition-colors duration-200">
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Login and Sign Up Buttons */}
          <div className="hidden md:flex space-x-2">
            <Link href="/login">
              <Button variant="outline" className="text-green-800 border-white hover:bg-green-700 hover:text-white rounded-full px-6 py-2 transition-all duration-200 shadow-md hover:shadow-lg">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-white text-green-600 hover:bg-green-100 hover:text-green-700 rounded-full px-6 py-2 transition-all duration-200 shadow-md hover:shadow-lg">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

