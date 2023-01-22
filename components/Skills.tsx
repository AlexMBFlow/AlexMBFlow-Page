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
import mongodb from "../content/mongodb.png"
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
                <Skill persent={95} image={js} directionLeft={true} />
                <Skill persent={70} image={ts} directionLeft={true} />
                <Skill persent={90} image={react} directionLeft={true} />
                <Skill persent={90} image={redux} directionLeft={true} />
                <Skill persent={70} image={mobx} directionLeft={true} />
                <Skill persent={75} image={nodejs} directionLeft={true} />
                <Skill persent={90} image={git} directionLeft={true} />
                <Skill persent={60} image={mongodb} />
                <Skill persent={85} image={electron} />
                <Skill persent={90} image={antd} />
                <Skill persent={90} image={jira} />
                <Skill persent={55} image={webpack} />
                <Skill persent={60} image={gulp} />
                <Skill persent={99} image={figma} />
                <Skill persent={5} image={rust} />
            </div>
        </motion.div>
    )
}