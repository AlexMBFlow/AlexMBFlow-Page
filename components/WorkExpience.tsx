import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard1 from './ExperienceCard1'
import ExperienceCard2 from './ExperienceCard2'


type Props = {}

const information1 = {
        companyName: "Фриланс",
        jobName: 'Frontend Developer',
        technology: ["https://camo.githubusercontent.com/04b5e0e940eed511e8e86619eeb7cdb264f17292074c06c60127e1796436d57b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f576f726450726573732d2532333131374143392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d576f72645072657373266c6f676f436f6c6f723d7768697465"],
        date: ["Февраль 2021", "Октябрь 2021"],
        description: "Описание",
    }

const information2 = {
        companyName: "Neuro-City",
        jobName: 'Frontend Developer',
        technology: ["https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465",
            "https://camo.githubusercontent.com/c3b97dbd9e4ed7982f6ffc31185daa9b76a72570a9b77c2aef619bc7d0935d26/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d3333333333333f7374796c653d666f722d7468652d6261646765266c6f676f3d4a617661536372697074",
            "https://camo.githubusercontent.com/0151e0bb66d45d275c8f6d53847d9a7973d2573c162466343a4fd960e0c99868/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4e6f64652e6a732d3333333333333f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73",
            "https://camo.githubusercontent.com/7fdbabca7249452643df5e88d7de38d26e94b5ed832defbeb9fd374a76805de4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f456c656374726f6e2d3139313937303f7374796c653d666f722d7468652d6261646765266c6f676f3d456c656374726f6e266c6f676f436f6c6f723d7768697465",
            "https://camo.githubusercontent.com/d88eed8eec3f67c14be6906b5f43410837a516741b4a94879506c2bf747fc027/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f47554c502d2532334346343634372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d67756c70266c6f676f436f6c6f723d7768697465"
        ],
        date: ["Окрябрь 2021", "Настоящее время"],
        description: "Описание",
    }


export default function WorkExperience({ }: Props) {
    return (
        <motion.div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
         max-w-full px-10 justify-evenly mx-auto items-center'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Стаж Работы</h3>

            <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
            scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                <ExperienceCard1 {...information1}/>
                <ExperienceCard2 {...information2}/>
            </div>
        </motion.div>
    )
}