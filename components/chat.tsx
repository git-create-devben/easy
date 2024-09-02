"use client"
import React, { useRef, useEffect, useState } from 'react'
import { Separator } from "$/components/ui/separator"
import { SendHorizontalIcon } from "lucide-react";
import { useAction, useQuery, useMutation, useConvexAuth } from "convex/react";
import { api } from "../convex/_generated/api";
import { useAuthActions } from '@convex-dev/auth/react';
import { Bot } from "lucide-react"
import { BrainCircuit, Send, LogOut, Menu } from "lucide-react"
import { ChatProps } from '$/types/types';


const ChatComponent: React.FC<ChatProps> = ({ input, handleSubmit, setInput, messages }) => {
    const responseRef = useRef<HTMLDivElement>(null);
    const user = useQuery(api.currentUser.currentUser);
  
    useEffect(() => {
      if (responseRef.current) {
        responseRef.current.scrollTop = responseRef.current.scrollHeight;
      }
    }, [messages]);
  
    return (
      <div className='flex lg:h-[55rem] gap-2 w-full p-4'>
        <div className='flex flex-col justify-between w-full'>
          <div className='flex flex-col overflow-y-auto items-start' ref={responseRef}>
            {messages.map((message, index) => (
              <div key={index} className='flex items-start mb-8 w-full'>
                <div className='flex flex-col h-12 items-center gap-2'>
                  <div className={`rounded-full ${message.type === 'user' ? 'bg-neutral-400 text-neutral-100' : 'bg-none'} p-1 w-10 capitalize text-center`}>
                    {message.type === 'user' ? `${user?.name?.split(' ').map(n => n[0]).join('')}` : <Bot className="h-8 w-8 text-neutral-700 scale-1"/>}
                  </div>
                  <Separator orientation='vertical' className='h-full text-white bg-white text-center' />
                </div>
                <div className={`${message.type === 'user' ? 'text-neutral-100' : 'text-neutral-400'} p-2 rounded-lg max-w-[80%] ml-2`}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className='relative mx-3 mt-4'>
            <div className='bg-[#1e1e1e] border-neutral-700 border-[1px] p-3 rounded-md flex justify-between items-center'>
              <input
                type="text"
                placeholder="Ask me anything"
                className='bg-transparent text-white w-full focus:outline-none'
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type='submit'>
                <SendHorizontalIcon className="w-5 h-5 text-neutral-400" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ChatComponent;