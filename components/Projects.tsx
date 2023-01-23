import React from 'react'
import { motion } from 'framer-motion'
import Mushustin from "../content/mishustin.jpg"
import Leroy from "../content/leroy.jpg"
import Triumf from "../content/triumf.jpg"
import Skolkovo from "../content/skolkovo.jpg"
import LigaStavok from "../content/ligastavok.jpg"
import Mari from "../content/mari.jpg"

type Props = {}

export default function Projects({ }: Props) {
    let counter = 1
    interface IProjects {
        image: any
        name: string
        desc: string[]
    }
    const projects: IProjects[] = [{
        image: Leroy,
        name: "Леруа Мерлен",
        desc: ["Создал раздел с обратной связью, который отправляется на электронную почту", "Настраивал позицию карт для всех оринтаций (карты написаны на Three.js)", "Внедрение модуля для стрима изображения с задней камеры в фон приложения",
            "Реализовал слайдер на круглом втором дисплее, взаимодействующий с основным окном", "Внедрил модуль распознавания лиц", "Добавил функционал рассказа сценария гида для определенного человека при распознавании лица"]
    }, {
        image: Mushustin,
        name: 'Аэропорт "Шереметьево"',
        desc: ["Внедрил возможность выбора места посадки в самолете на втором круглом дисплее", "Встроил записанные видео с гидами в приложение", "Также приложение оценил Михаил Мишустин на мероприятии \"Транспортная неделя\""],
    }, {
        image: Triumf,
        name: "Триумф Палас",
        desc: ["Реализовал личный кабинет жителя жилого комплекса", "Внедрил и адаптировал под проект модуль показа рекламы"]
    }, {
        image: Skolkovo,
        name: "Бизнес школа \"Сколково\"",
        desc: ["Добавил возможность получения актуального расписания событий на устройство со стороннего апи, сохранения расписания на сервер с контентом по ftp",
            "Переписал логику скачивания видео с гидами с админки на созданный для данной задачи модуль"]
    }, {
        image: LigaStavok,
        name: "Лига Ставок",
        desc: ["Создание страницы с текущими матчами"]
    },
    {
        image: Mari,
        name: "Mari",
        desc: ["Создание страницы с текущими матчами"]
    }]

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
                            src={project.image.src}
                            alt=""
                            className='max-w-xs'
                        />

                        <div className='space-y-10 px-0 md:p-10 max-w-6xl'>
                            <h4 className='text-3xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>{project.name},</span>
                                <div>проект {i + 1} из {projects.length}</div>
                            </h4>
                            <ul className='list-disc text-lg text-center md:text-left'>
                                {project.desc.map(desc => <li key={counter++}>{desc}</li>)}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>
            </div>
        </motion.div>
    )
}