"use client"
import CanvasComponent from '$/components/canva'
import ChatComponent from '$/components/chat'
import {Nav} from '$/components/nav'
import { Button } from '$/components/ui/button'
import React, { useState, useEffect } from 'react'
import { Bot } from "lucide-react"
import { Message, WindowType, YouTubeSearchResponse } from '$/types/types'
import { useAction } from 'convex/react'
import { api } from '$/convex/_generated/api'
import { motion } from 'framer-motion'

const Chatpage = () => {
  const [isAIChatVisible, setIsAIChatVisible] = useState<Boolean>(true)
  const [isLoadingVideo, setIsLoadingVideo] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [gameurl, setGameUrl] = useState<string | null>()
  const [isLoading, setIsLoading] = useState(false);
  const geminiAction = useAction(api.gemini.getAIResponse);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!input.trim()) return

    
    const userMessage: Message = { type: 'user', content: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');

    try {
      const response = await geminiAction({ input });
      const aiMessage: Message = { type: 'ai', content: response.text };
      setMessages(prevMessages => [...prevMessages, aiMessage]);
      setGameUrl(response.gameUrl);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: Message = { type: 'ai', content: 'Sorry, there was an error processing your request.' };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    }
  };
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="">
      <Nav/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-11 gap-4  h-screen bg-[#171311]">
        {isDesktop ? (
          <>
            <div className={`md:col-span-1  ${isAIChatVisible ? 'lg:col-span-7' : 'lg:col-span-full'} h-[50vh] md:h-screen`}>
                <CanvasComponent gameUrl={gameurl} />
            </div>
            <div className={`md:col-span-1 lg:col-span-4 h-[50vh] md:h-screen bg-[#1e1e1e8c] ${isAIChatVisible ? 'fixed inset-0 z-50 md:relative' : 'hidden'} `}>
            <ChatComponent input={input} setInput={setInput} handleSubmit={handleSubmit} setMessages={setMessages} messages={messages} />        
            </div>
            <Button
            className="flex flex-col fixed bottom-4 left-4 rounded-full p3 bg-blue-500 hover:bg-blue-600 md:hidden"
            onClick={() => setIsAIChatVisible(!isAIChatVisible)}
          >
            <span className='text-xs'>click to show chat</span>
            <Bot className="h-6 w-6" />
          </Button>
          </>
        ) : (
          <div className="text-center text-white block w-full m-auto">
            <p>Not available on mobile. could you please try it on desktop </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Chatpage