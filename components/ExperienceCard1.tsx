import React from 'react'
import { motion } from 'framer-motion'


interface Props {
    companyName: string
    jobName: string
    technology: string[]
    date: string[]
    description: string
}


let counter = 1

export default function ExperienceCard({ companyName, jobName, technology, date, description }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40
        cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
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
                src="https://kartinkin.net/uploads/posts/2022-02/1645995695_32-kartinkin-net-p-kartinki-frilans-34.jpg"
                className='w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                alt=''
            />
            <div className="px-8 md:px-10">
                <h4 className='text-4xl font-light'>{jobName}</h4>
                <p className='font-bold text-2xl mt-1'>{companyName}</p>
                <div className='flex space-x-2 my-2'>
                {
                    technology.map(tech => (
                        <img key={counter++} style={{
                            width: "6em",
                            height: "1.5em"
                        }} className='h-10 w-10 rounded-full' src={tech} alt="" />
                    ))
                }
                    {/* так было по дефолту!! <img className='h-10 w-10 rounded-full' src="https://vk.com/emoji/e/f09fa493.png" alt="" /> */}
                </div>
                <p className='uppercase py-5 text-gray-300'>{date[0]} - {date[1]}</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
        </article>
    )
}