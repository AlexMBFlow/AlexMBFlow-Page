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
        transition-opacity duration-200 overflow-hidden">
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
                src="https://img01.kupiprodai.ru/082022/1661803839277.png"
                className='w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                alt=''
            />
            <div className="px-8 md:px-10">
                <h4 className='text-4xl font-light'>{jobName}</h4>
                <p className='font-bold text-2xl mt-1'>{companyName}</p>
                <div className='flex my-2 flex-wrap'>
                    {
                        technology.map(tech => (
                            <img key={counter++} style={{
                                width: "5.5em",
                                height: "1.5em"
                            }} className='rounded-full mr-2 my-2' src={tech} alt="" />
                        ))
                    }
                </div>
                <p className='uppercase py-5 text-gray-300'>{date[0]} - {date[1]}</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Участие в разработке умных устройств, специализирующихся на внутренней навигации (Indoor-навигация)</li>
                    <li>Создание новых элементов графического интерфейса приложений на основе фреймворка Electron и чистого javascript (vanilla)</li>
                    <li>Верстка макетов с Figma</li>
                    <li>Поддержка, поиск и исправление ошибок в уже созданных проектах</li>
                    <li>Разработка нестандартных элементов пользовательского интерфейса с применением векторной алгебры</li>
                    <li>Создание sftp клиента для развертывания по локальной сети проектов на тестируемых устройствах с операционной системой linux xubuntu</li>
                    <li>Некоторое время занимал должность <span className='font-bold border-b'>TeamLead</span></li>
                </ul>
            </div>
        </article>
    )
}