import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean
}

export default function Skill({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                transition={{
                    duration: 1.5
                }}
                src="https://sun1.userapi.com/sun1-57/s/v1/ig2/CQlwaz3t0y_RLRjk_APnyn2wmPMl0UQ2wQerYvSWnd68sU7E_442d0GeOchz_nVrUfCzWw_Hs3WV9DQTgonzZJhy.jpg?size=100x100&quality=96&crop=102,102,819,819&ava=1"
                className='rounded-full border border-gray-500 object-cover w-24 
                h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
            />
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                }}
                whileInView={{
                    x: 0
                }}
                transition={{
                    duration: 1.5
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