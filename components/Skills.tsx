import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'



import js from "../content/js.png"
import ts from "../content/ts.png"
import react from "../content/react.png"
import redux from "../content/redux.png"
import mobx from "../content/mobx.png"
import nodejs from "../content/nodejs.png"
import git from "../content/git.png"
import postgres from "../content/postgres.png"
import mongodb from "../content/mongodb.jpg"
import electron from "../content/electron.png"
import antd from "../content/antd.png"
import jira from "../content/jira.png"
import webpack from "../content/webpack.png"
import gulp from "../content/gulp.png"
import figma from "../content/figma.png"
import rust from "../content/rust.png"

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
                <Skill image={js} directionLeft={true} />
                <Skill image={ts} directionLeft={true} />
                <Skill image={react} directionLeft={true} />
                <Skill image={redux} directionLeft={true} />
                <Skill image={mobx} directionLeft={true} />
                <Skill image={nodejs} directionLeft={true} />
                <Skill image={git} directionLeft={true} />
                <Skill image={postgres} directionLeft={true} />
                <Skill image={mongodb} />
                <Skill image={electron} />
                <Skill image={antd} />
                <Skill image={jira} />
                <Skill image={webpack} />
                <Skill image={gulp} />
                <Skill image={figma} />
                <Skill image={rust} />
            </div>
        </motion.div>
    )
}