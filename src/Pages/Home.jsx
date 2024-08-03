import { motion } from 'framer-motion';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import ProfileImg from '../assets/img/picsmile.jpg';
export default function Home() {
    const [text] = useTypewriter({
        words: ['', 'MongoDB', 'Express', 'React', 'Node', 'Mern Stack Developer'],
        loop: Infinity,
        delay: 2,
        onLoopDone: () => {},
    });
    return (
        <div>
            <section className=" min-w-full min-h-screen md:max-h-screen  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around items-center  gap-2 sm:gap-1 p-2">
                <div className="   flex-col justify-center items-center ">
                    <motion.p
                        initial={{ opacity: 0, x: -500 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            x: { duration: 0.5 },
                        }}
                        className=" text-center text-white font-bold text-3xl md:text-4xl lg:text-5xl p-2  "
                    >
                        Hello👋
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -500 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{
                            x: { duration: 1 },
                        }}
                        className="text-2xl md:text-3xl lg:text-4xl text-center p-1 text-gray-50"
                    >
                        I am Yasir Arafat <br />
                        <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1 }}
                            animate={{ scale: 1 }}
                            transition={{
                                duration: 3,
                                scale: { duration: 2 },
                            }}
                            className=" inline-block backdrop-blur-md bg-indigo-700 hover:bg-transparent duration-300 p-2 mt-2"
                        >
                            <div className=" ">
                                {text}
                                <Cursor cursorColor="#white" className="py-1" />
                            </div>
                        </motion.span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -500 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ x: 0 }}
                        transition={{
                            x: { duration: 3.5 },
                        }}
                        className=" text-slate-200 text-xs p-5 text-center"
                    >
                        A learner, Developer, JavaScript enthusiast. I developing web application by
                        using MERN Stack.
                    </motion.p>
                </div>
                <div className="  p-4 flex justify-center rounded-md border-y-cyan-50 items-center  ">
                    <motion.img
                        animate={{
                            scale: [0.6, 0.2, 1, 1.2, 1],
                            rotate: [0, 270, 270, 0, 0],
                            borderRadius: ['20%', '50%', '50%', '50%', '20%'],
                        }}
                        transition={{ duration: 2 }}
                        src={ProfileImg}
                        alt="img"
                        // width="300px"
                        // height="300px"
                        className=" max-w-[300px] max-h-[300px] ring-2 ring-zinc-50 shadow-md mx-auto h-80 rounded-3xl   "
                    />
                </div>
            </section>
        </div>
    );
}
