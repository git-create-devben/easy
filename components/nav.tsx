"use client"
import React, { useState } from 'react'
import EasyLogo from "$/public/vercel.svg"
import Link from 'next/link'
import { BrainCircuit, Send, LogOut, Menu } from "lucide-react"
import { Button } from './ui/button'
import { Bot } from "lucide-react"
import { useAuthActions } from '@convex-dev/auth/react'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
   const { signOut } = useAuthActions();
  return (
    <nav className="bg-[#1e1e1e] p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <BrainCircuit className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold text-white">Easy</span>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-neutral-100">
            History
          </Button>
          <Button onClick={() => void signOut()} variant="outline" size="sm" className="text-black">
            Sign Out
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden bg-blue-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </Button>
      </div>
      {isMobileMenuOpen && (
        <div className="mt-4 space-y-2 md:hidden">
          <Button variant="ghost" size="sm" className="text-white w-full justify-start">
            History
          </Button>
          <Button variant="outline" size="sm" className="text-black w-full justify-start">
            Sign Out
          </Button>
        </div>
      )}
    </nav>
  )
}

export { Navbar as Nav}