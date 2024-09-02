"use client"

import { Button } from "$/components/ui/button"
import { BrainCircuit, ArrowRight } from "lucide-react"
import LoginForm from '$/components/(auth)/LoginForm'
import Image from "next/image"

export default function Login() {

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="w-8 h-8 text-blue-400" />
          <span className="text-2xl font-bold">Easy</span>
        </div>

      </header>

      <main className="flex-grow container mx-auto px-4 py-12 flex flex-col items-center justify-center relative">
        <h1 className="flex flex-col text-5xl lg:text-6xl font-bold mb-6 text-center">
          Play Anything with
          <span > <b className="text-gray-400">AI-Powered </b>    Visuals <i className="text-lg text-blue-400">gaming finder</i> </span>

        </h1>

        <p className="text-xl text-gray-400 mb-8 text-center max-w-2xl">
          Easy delivers quick, interactive visual game powered by AI to make gaming a snap. Ask to play game and watch real game come to life!
        </p>



        <div className="flex space-x-4 mb-12">
          {/* <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-semibold">
            Get Started
          </Button> */}
          <LoginForm/>
          <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black px-6 py-6 rounded-full font-semibold">
            Watch Video
          </Button>
        </div>

        <div className="w-full max-w-4xl bg-gray-900 p-6 rounded-lg shadow-2xl mb-12 relative overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-08-09%20085317-QO5IplA9G7IKAAoZ93IkGveev0eHao.png"
            alt="Easy AI Chat Interface"
            className="rounded-md w-full"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

        </div>

        <div className="w-full max-w-xl absolute bottom-8">
          <svg viewBox="0 0 200 100" className="w-full h-auto">
            <circle cx="100" cy="50" r="45" fill="none" stroke="#333" strokeWidth="0.5" />
            <circle cx="100" cy="50" r="35" fill="none" stroke="#333" strokeWidth="0.5" />
            <circle cx="100" cy="50" r="25" fill="none" stroke="#333" strokeWidth="0.5" />
            <path d="M100 5 L100 95 M55 50 L145 50" stroke="#333" strokeWidth="0.5" />
            <circle cx="100" cy="50" r="3" fill="#fff" />
            <circle cx="130" cy="30" r="2" fill="#fff" opacity="0.7">
              <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="70" r="2" fill="#fff" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </main>

      <footer className="container mx-auto  text-center text-gray-500">
        <p>&copy; 2024 Easy AI. All rights reserved.</p>
      </footer>
    </div>
  )
}