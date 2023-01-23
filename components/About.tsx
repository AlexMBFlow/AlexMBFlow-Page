import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div className='h-screen flex relative flex-col text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Обо мне</h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                src='https://sun9-north.userapi.com/sun9-84/s/v1/ig2/tti5BAO6NJM7o1aTDITLcF8Pp8G1Qaa4sUYR6SD687gecvp1IbYwVmFKlMSt2XAQyouZIMSXtOPB3CGv5QhHA1sV.jpg?size=821x821&quality=95&type=album'
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 1.2   
                }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96
                 xl:w-[500px] xl:h-[600px]"
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'><span className='underline decoration-[#F7AB0A]/50'>Немного про</span> себя</h4>
                <p className='text-base pr-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quasi dolor dignissimos consequatur fuga laboriosam voluptate doloribus, temporibus
                    inventore ipsa hic velit, quos minus nemo excepturi debitis maiores quas corporis omnis?
                </p>
            </div>
        </motion.div>
    )
}