import { motion } from 'framer-motion';
import React from 'react';
import inventoryproject from '../assets/img/do-mern-inventory.png';
import taskproject from '../assets/img/task_manager.png';

const outerDivStyle =
    ' flex flex-col p-2 justify-center items-center w-72  h-50 md:w-72 lg:w-72 md:h-50 lg:h-50 drop-shadow-sm hover:drop-shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-lg hover:backdrop-blur-md rounded-lg bg-white/10 hover:bg-white/20  border-solid border-2 border-whtie-500 ';
export default function Projects() {
    return (
        <div>
            <section className=" max-w-full min-h-full  p-9   flex justify-center items-center    ">
                <div className="  text-white container grid gap-6 grid-cols-1 justify-center items-center md:grid-cols-2 lg:grid-cols-3   ">
                    <motion.div
                        className={outerDivStyle}
                        initial={{ opacity: 0, x: -1000 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{
                            ease: 'linear',

                            x: { duration: 1 },
                        }}
                    >
                        <p className="p-1 text-sm"> Inventory Management</p>
                        <img
                            src={inventoryproject}
                            className="min-w-full max-h-32 p-1"
                            alt="inventory"
                        />
                        <div className="p-2">
                            <a href="https://github.com/sunnyarafat21/Inventory" target="blank">
                                <button className="p-3  w-24 mx-1 text-black hover:bg-transparent duration-200  backdrop-blur-md bg-slate-50">
                                    Code
                                </button>
                            </a>
                            <a href="https://inventoryapp-sunny.netlify.app/" target="blank">
                                <button className="p-3 w-24 mx-1 text-black hover:bg-slate-50 duration-200 backdrop-blur-md bg-transparent">
                                    Demo
                                </button>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        className={outerDivStyle}
                        initial={{ opacity: 0, x: -1000 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{
                            ease: 'linear',

                            x: { duration: 2 },
                        }}
                    >
                        <p className="p-1 text-sm"> Task Manager </p>
                        <img
                            src={taskproject}
                            className="min-w-full max-h-32 p-1"
                            alt="inventory"
                        />
                        <div className=" p-2">
                            <a href="https://github.com/sunnyarafat21/task-manager" target="blank">
                                <button className="p-3 w-24 mx-1 text-black hover:bg-transparent duration-200  backdrop-blur-md bg-slate-50">
                                    Code
                                </button>
                            </a>
                            <a href="https://task-manager72.netlify.app/Login" target="blank">
                                <button className="p-3 w-24 mx-1 text-black hover:bg-slate-50 duration-200 backdrop-blur-md bg-transparent">
                                    Demo
                                </button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
