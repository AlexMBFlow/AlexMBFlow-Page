import React from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
/* import img from "../content/free.jpg" */

type Props = {
    directionLeft?: boolean
    image: StaticImageData
    persent: number
}

export default function Skill({ directionLeft, image, persent }: Props) {
    return (
        <div className='group rounded-full relative flex'>
            <motion.div
                initial={{
                    x: directionLeft ? -50 : 50,
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 0.6
                }}
                className='rounded-full object-cover h-14 w-14 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            >
                <Image
                    alt=''
                    className='rounded-full '
                    src={image}
                    fill
                    sizes="(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw"
                />
            </motion.div>
            <motion.div
                initial={{
                    x: directionLeft ? -50 : 50,
                }}
                whileInView={{
                    x: 0
                }}
                transition={{
                    duration: 0.65
                }}
                className='absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out 
            group-hover:bg-white h-14 w-14 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-black opacity-100 cursor-default'>{persent}%</p>
                </div>

            </motion.div>
        </div>
    )
}