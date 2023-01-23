import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({ }: Props) {
    let counter = 1
    const projects = [1, 2, 3, 4, 5]  

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.5
            }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Проекты
            </h3>

            <div
             className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
            scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin select-none'>
                {projects.map((project, i) => (
                    <div key={counter++} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44 h-screen'>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1.2
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            src="https://sun1-94.userapi.com/impf/5_fNmUtVfHXa7t9baViL53n7xCC75Ui7pWokpw/bJzS8DbGC90.jpg?size=135x92&quality=95&crop=2,0,1346,916&sign=2b221700c99c9723e0f1f0334bfa5815" alt="" />

                        <div className='space-y-10 px-0 md:p-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>Леруа Мерлен, проект</span>
                                <div>{i + 1} из {projects.length}</div>                                
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit assumenda illo facere ipsam officia enim temporibus, ipsa ut laudantium voluptates, animi reprehenderit, voluptate eveniet aut quo perspiciatis commodi quisquam nam?
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
            </div>
        </motion.div>
    )
}