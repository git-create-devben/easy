import { EqualIcon, IceCream, PlusCircleIcon } from 'lucide-react'
import React from 'react'

const CanvaTemplate = () => {
    return (
        <div className='text-white'>
            <h2>Collecting visual assest ............</h2>
            <div className='flex flex-col gap-4 mt-5 mx-10 '>
                <div className='flex gap-4'>
                    <IceCream className="w-5 h-5 text-neutral-400" />
                    <IceCream className="w-5 h-5 text-neutral-400" />
                    <PlusCircleIcon className="w-5 h-5 text-neutral-400" />
                    <IceCream className="w-5 h-5 text-neutral-400" />
                    <IceCream className="w-5 h-5 text-neutral-400" />
                </div>
                <div className='flex gap-4'>
                <EqualIcon className="w-5 h-5 text-neutral-400"/>
                <IceCream className="w-5 h-5 text-neutral-400" />
                <IceCream className="w-5 h-5 text-neutral-400" />
                <IceCream className="w-5 h-5 text-neutral-400" />
                <IceCream className="w-5 h-5 text-neutral-400" />
                </div>
               
                
            </div>

        </div>
    )
}

export default CanvaTemplate