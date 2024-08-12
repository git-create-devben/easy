"use client"
import React, { useRef, useEffect, useState } from 'react'
import { Separator } from "$/components/ui/separator"
import { SendHorizontalIcon } from "lucide-react";
import { useAction, useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

const ChatComponent = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai', content: string }>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const responseRef = useRef<HTMLDivElement>(null);
   const user = useQuery(api.currentUser.currentUser)
    const geminiAction = useAction(api.gemini.default);
   
   console.log(user?._id)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
    
        setIsLoading(true);
        setMessages(prev => [...prev, { type: 'user', content: input }]);
        const userInput = input;
        setInput('');
    
        try {
            const stream = await geminiAction({ input: userInput });
            let fullResponse = '';
            for await (const chunk of stream) {
                fullResponse += chunk;
                setMessages(prev => {
                    const newMessages = [...prev];
                    if (newMessages.length > 0 && newMessages[newMessages.length - 1].type === 'ai') {
                        newMessages[newMessages.length - 1].content = fullResponse;
                    } else {
                        newMessages.push({ type: 'ai', content: fullResponse });
                    }
                    return newMessages;
                });
            }
        } catch (error) {
            console.error('Error calling Gemini:', error);
            setMessages(prev => [...prev, { type: 'ai', content: 'An error occurred while processing your request.' }]);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className='flex lg:h-[55rem] gap-2 w-full'>
            <div className='flex flex-col justify-between w-full'>
                <div className='flex flex-col overflow-y-auto'>
                    {messages.map((message, index) => (
                        <div key={index} className='flex items-start mb-4'>
                            <div className='flex flex-col h-12 items-center gap-2'>
                                <div className='rounded-full bg-neutral-400 p-2'>
                                    {message.type === 'user' ? `${user?.name?.slice(0, 3)}` : 'DB'}
                                </div>
                                <Separator orientation='vertical' className='h-full text-white bg-white' />
                            </div>
                            <div className='bg-[#1e1e1e] text-white p-3 rounded-lg max-w-[80%]' ref={responseRef}>
                                {message.content}
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className='relative mx-3'>
                    <div className='bg-[#1e1e1e] border-neutral-700 border-[1px] p-3 rounded-md flex justify-between items-center'>
                        <input 
                            type="text" 
                            placeholder="Ask me anything" 
                            className='bg-transparent text-white w-full focus:outline-none' 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            disabled={isLoading}
                        />
                        <button type='submit' disabled={isLoading}>
                            {isLoading ? <SendHorizontalIcon className="w-5 h-5 text-transparent"/> : <SendHorizontalIcon className="w-5 h-5 text-neutral-400"/>}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatComponent