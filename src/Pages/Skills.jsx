import { motion } from 'framer-motion';
import React from 'react';
import { DiNodejs } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';

const outerDivStyle =
    ' flex flex-col justify-center items-center w-72  h-60 md:w-52 lg:w-52 md:h-52 lg:h-52 drop-shadow-sm hover:drop-shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-lg hover:backdrop-blur-md rounded-lg bg-white/10 hover:bg-white/20  border-solid border-2 border-whtie-500 ';

export default function Skills() {
    return (
        <section className=" grid justify-center items-center   ">
            <div className=" p-5 text-white container grid gap-5 grid-cols-1 justify-around items-center md:grid-cols-2 lg:grid-cols-4   ">
                <motion.div
                    className={outerDivStyle}
                    initial={{ opacity: 0, x: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ x: 0 }}
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.2 },
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        x: { duration: 1 },
                    }}
                >
                    <FaReact className=" text-[6rem] text-blue-600 p-1" />

                    <h1 className="py-2 text-lg"> React </h1>
                </motion.div>

                <motion.div
                    className={outerDivStyle}
                    initial={{ opacity: 0, x: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ x: 0 }}
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.2 },
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        x: { duration: 2 },
                    }}
                >
                    <IoLogoJavascript className=" text-[6rem] text-yellow-400 p-1" />

                    <h1 className="py-2 text-lg"> JavaSrcipt </h1>
                </motion.div>

                <motion.div
                    className={outerDivStyle}
                    initial={{ opacity: 0, x: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ x: 0 }}
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.2 },
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        x: { duration: 1 },
                    }}
                >
                    <DiNodejs className=" text-[6rem] text-green-500 p-1" />
                    <h1 className="py-2 font-bold text-lg"> Node Js </h1>
                </motion.div>

                <motion.div
                    className={outerDivStyle}
                    initial={{ opacity: 0, x: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ x: 0 }}
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.2 },
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        x: { duration: 2 },
                    }}
                >
                    {' '}
                    <SiExpress className=" text-[6rem] font-bold text-black p-1" />
                    <h1 className="py-2 text-lg"> Express </h1>
                </motion.div>

                <motion.div
                    className={outerDivStyle}
                    initial={{ opacity: 0, x: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ x: 0 }}
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.2 },
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        x: { duration: 1 },
                    }}
                >
                    {' '}
                    <SiMongodb className=" text-[6rem] text-green-600 p-1" />
                    <h1 className="py-2 text-lg"> Mongo DB </h1>
                </motion.div>
                <motion.div
                    className={outerDivStyle}
                    initial={{ opacity: 0, x: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ x: 0 }}
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.2 },
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        x: { duration: 2 },
                    }}
                >
                    {' '}
                    <SiNextdotjs className=" text-[6rem] text-gray-800 p-1" />
                    <h1 className="py-2 text-lg"> Next Js </h1>
                </motion.div>
                <motion.div
                    className={outerDivStyle}
                    initial={{ opacity: 0, x: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ x: 0 }}
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.2 },
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        x: { duration: 1 },
                    }}
                >
                    {' '}
                    <SiTailwindcss className=" text-[6rem] text-blue-600 p-1" />
                    <h1 className="py-2 text-lg"> Tailwind Css </h1>
                </motion.div>
                <motion.div
                    className={outerDivStyle}
                    initial={{ opacity: 0, x: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ x: 0 }}
                    whileHover={{
                        scale: 0.9,
                        transition: { duration: 0.2 },
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        x: { duration: 2 },
                    }}
                >
                    <TbBrandRedux className=" text-[6rem] text-violet-600 p-1" />
                    <h1 className="py-2 text-lg"> Redux </h1>
                </motion.div>
            </div>
        </section>
    );
}
