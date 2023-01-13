import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({ }: Props) {
    return (
        <motion.div className="flex relative flex-col text-center md:text-left 
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Навыки
            </h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                Наведите на ярлык
            </h3>

            <div className='grid grid-cols-4 gap-5'>
                <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill directionLeft={true} />
                <Skill />
                <Skill />
            </div>
        </motion.div>
    )
}