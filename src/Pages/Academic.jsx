import { motion } from 'framer-motion';
import React from 'react';
import { FaPeopleArrows } from 'react-icons/fa6';
import { GiLeatherBoot } from 'react-icons/gi';
import { GrAssistListening } from 'react-icons/gr';
import { RiSpeakFill } from 'react-icons/ri';

export default function Academic() {
    return (
        <div className=" p-10">
            <section className=" w-[20rem]  md:w-[45rem] lg:w-[55rem] grid  gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6  drop-shadow-sm hover:drop-shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-lg hover:backdrop-blur-md rounded-lg bg-white/10 hover:bg-white/20  border-solid border-2 border-whtie-500">
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                    }}
                    whileInView={{ opacity: 1 }}
                    animate={{
                        x: 0,
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 1.5,
                        x: {
                            duration: 1.5,
                        },
                    }}
                    className=" grid grid-cols-1 justify-center items-center "
                >
                    <div className=" ">
                        <p className=" text-start  font-bold text-slate-50 text-3xl">
                            Soft Skills{' '}
                        </p>
                        <p className="text-start  pr-5 py-3 font- text-slate-100 text-sm">
                            The soft skills which I gather and develop Day by day
                        </p>
                    </div>

                    <div className=" grid grid-cols-1 justify-center items-start">
                        <div className=" pt-1 flex  ">
                            <div className="w-20 md:w-24 lg:w-26 h-10 md:h-12 lg:h-14 flex p-1 justify-center border-l-2 border-slate-100  items-center col-span-1 bg-slate-800 bg-opacity-30 drop-shadow-md backdrop-blur-lg ">
                                <RiSpeakFill fontSize={22} className="text-slate-50" />
                            </div>
                            <div className="w-52 md:w-56 lg:w-72 h-10 md:h-12 lg:h-14  text-slate-50 flex items-center py-1 px-2 bg-slate-700 bg-opacity-20 drop-shadow-sm backdrop-blur-md ">
                                Speaking
                            </div>
                        </div>
                        <div className=" pt-1 flex  ">
                            <div className="w-20 md:w-24 lg:w-26 h-10 md:h-12 lg:h-14 flex p-1 justify-center border-l-2 border-slate-100  items-center col-span-1 bg-slate-800 bg-opacity-30 drop-shadow-md backdrop-blur-lg ">
                                <GrAssistListening fontSize={22} className="text-slate-50" />
                            </div>
                            <div className="w-52 md:w-56 lg:w-72 h-10 md:h-12 lg:h-14  text-slate-50 flex items-center py-1 px-2 bg-slate-700 bg-opacity-20 drop-shadow-sm backdrop-blur-md ">
                                Listening
                            </div>
                        </div>
                        <div className="pt-1 flex  ">
                            <div className="w-20 md:w-24 lg:w-26 h-10 md:h-12 lg:h-14 flex p-1 justify-center border-l-2 border-slate-100  items-center col-span-1 bg-slate-800 bg-opacity-30 drop-shadow-md backdrop-blur-lg ">
                                <FaPeopleArrows fontSize={20} className="text-slate-50" />
                            </div>
                            <div className="w-52 md:w-56 lg:w-72 h-10 md:h-12 lg:h-14  text-slate-50 flex items-center py-1 px-2 bg-slate-700 bg-opacity-20 drop-shadow-sm backdrop-blur-md ">
                                Communication
                            </div>
                        </div>
                        <div className="pt-1 flex  ">
                            <div className="w-20 md:w-24 lg:w-26 h-10 md:h-12 lg:h-14 flex p-1 justify-center border-l-2 border-slate-100  items-center col-span-1 bg-slate-800 bg-opacity-30 drop-shadow-md backdrop-blur-lg ">
                                <GiLeatherBoot fontSize={22} className="text-slate-50" />
                            </div>
                            <div className="w-52 md:w-56 lg:w-72 h-10 md:h-12 lg:h-14  text-slate-50 flex items-center py-1 px-2 bg-slate-700 bg-opacity-20 drop-shadow-sm backdrop-blur-md ">
                                Leadership
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                    }}
                    whileInView={{ opacity: 1 }}
                    animate={{
                        x: 0,
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 1.5,
                        x: {
                            duration: 1.5,
                        },
                    }}
                    className=" col-span-1 sm:mt-3 text-gray-950 bg-slate-50 py-3 px-5 border-blue-500  sm:border-t-8 md:border-l-8 md:border-t-0  lg:border-t-0  lg:border-l-8 "
                >
                    <p className="text-center text-gray-900 text-xl my-4">
                        Education Qualification
                    </p>
                    <table className="m-auto ">
                        <thead className="border-b-2  border-gray-800">
                            <tr>
                                <th className="px-2">Degree</th>
                                <th className="px-2"> Institute</th>
                                <th className="px-2"> Passing Year</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="  border-b-2 bg-slate-500 bg-opacity-10 border-gray-200 ">
                                <td className="p-3">Bsc in CSE</td>
                                <td className="p-3">National University</td>
                                <td className="p-3">2022 - ****</td>
                            </tr>
                            <tr className="border-b-2  border-gray-200 ">
                                <td className="p-3">HSC</td>
                                <td className="p-3">Teknaf Govt College</td>
                                <td className="p-3">2019 - 2021</td>
                            </tr>
                            <tr className="border-b-2 bg-slate-500 bg-opacity-10 border-gray-200 ">
                                <td className="p-3">SSC</td>
                                <td className="p-3">Teknaf Pilot high School</td>
                                <td className="p-3">2013 - 2019</td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>
            </section>
        </div>
    );
}
