import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
/* import img from "../content/free.jpg" */

type Props = {
    directionLeft?: boolean
    image?: any
}

export default function Skill({ directionLeft, image }: Props) {
    return (
        <div className='group rounded-full relative flex cursor-pointer'>
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 0.6
                }}
                className='rounded-full  object-cover w-24 
                h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            >
                <Image
                    alt=''
                    className='rounded-full object-contain'
                    src={image}
                    fill
                    sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
                />
            </motion.div>
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                }}
                whileInView={{
                    x: 0
                }}
                transition={{
                    duration: 0.65
                }}
                className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out 
            group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>100%</p>
                </div>

            </motion.div>
        </div>
    )
}