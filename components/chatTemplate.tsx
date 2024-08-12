import React from 'react';
import { Separator } from "$/components/ui/separator"
import { SendHorizontalIcon } from "lucide-react";
import Image from 'next/image';

const ChatTemplate = () => {
    return (
        <div className='flex  lg:h-[55rem] gap-2 w-full '>
            <Separator orientation='vertical' className='h-full text-white bg-white' />
            <div className='flex flex-col justify-between w-full'>
                <div className='flex flex-col overflow-y-auto'>
                    <div className='flex items-start mb-4'>
                        <div className='flex flex-col h-12 items-center gap-2 '>
                            <div className='rounded-full bg-neutral-400 p-2'>DB</div>
                            <Separator orientation='vertical' className='h-full text-white bg-white' />
                        </div>
                        <div className='bg-[#1e1e1e] p-3 rounded-lg max-w-[80%]'>
                            <p className='text-white'>Hi</p>

                        </div>
                    </div>
                    <div className='flex items-start  mb-4'>
                        <div className='flex flex-col h-12 items-center gap-2'>
                            <div className='rounded-full bg-neutral-400 p-2'>DB</div>
                            <Separator orientation='vertical' className='h-full text-white bg-white' />
                        </div>

                        <div className='bg-[#1e1e1e] p-3 rounded-lg max-w-[80%]'>
                            <p className='text-white'>Hello! this is Easy, How can I assist you today? Let's have a friendly chat. 😊 How are you doing?</p>

                        </div>

                    </div>
                    <div className='flex items-start  mb-4'>
                        <div className='flex flex-col h-12 items-center gap-2'>
                            <div className='rounded-full bg-neutral-400 p-2'>DB</div>
                            <Separator orientation='vertical' className='h-full text-white bg-white' />
                        </div>

                        <div className='bg-[#1e1e1e] p-3 rounded-lg max-w-[80%]'>
                            <p className='text-white'>I'm fine thanks, please what is 2 + 2?</p>

                        </div>

                    </div>
                    <div className='flex items-start  mb-4'>
                        <div className='flex flex-col h-12 items-center gap-2'>
                            <div className='rounded-full bg-neutral-400 p-2'>DB</div>
                            <Separator orientation='vertical' className='h-full text-white bg-white' />
                        </div>

                        <div className='bg-[#1e1e1e] p-3 rounded-lg max-w-[80%]'>
                            <p className='text-white'>Alex 2 + 2 is 4, think about 2 Ice scream + 2 Ice scream, how many will it be? ofcourse it'll be 4 Ice screams and that is it 2 + 2 will give you 4. Do you understand? if you don't understand it's fine not to understand things at first.</p>
                        </div>
                        
                    </div>
                    <span className='text-white ml-10 mb-7'>Loaing interactive explanation.....</span>

                </div>
                <div className='relative mx-3'>
                    <div className='bg-[#1e1e1e] border-neutral-700 border-[1px] p-3 rounded-md flex justify-between items-center'>
                        <input type="text" placeholder="Ask me anything" className='bg-transparent text-white w-full focus:outline-none' />
                        <SendHorizontalIcon className="w-5 h-5 text-neutral-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatTemplate