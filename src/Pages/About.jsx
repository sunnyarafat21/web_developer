import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Loader from '../Components/Loader';
export default function About() {
    const [text] = useTypewriter({
        words: [
            '',
            'My name is Md Yasir Arafat, a Computer Science and Engineering student at the National University. For the past two years, I have specialized in web development using the MERN stack. Alongside this, I am enhancing my skills in logical thinking, data structures and algorithms (DSA), and effective communication. I am also focused on developing leadership qualities, business thinking, and solving real-life problems. My goal is to grow as a well-rounded professional, contributing meaningfully to the tech industry.',
        ],
        loop: 1,
        delay: 2,
        onLoopDone: () => {},
    });
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <Loader />;
    } else {
        return (
            <div className="p-10 max-w-full min-h-screen md:max-h-screen lg:max-h-screen grid  justify-center ">
                <motion.section
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                        scale: {
                            ease: 'linear',
                            duration: 1,
                        },
                    }}
                    className="  w-[20rem]  md:w-[45rem] lg:w-[55rem] p-6 m-auto grid justify-center  drop-shadow-lg  bg-opacity-30 backdrop-filter backdrop-blur-lg  rounded-lg text-gray-900 bg-white/100    border-solid border-2 border-gray-600"
                >
                    <h3 className=" text-gray-950 text-lg font-bold text-center">
                        Some About Me😈{' '}
                    </h3>
                    <p className="p-5  bg-opacity-50 leading-4 md:leading-loose lg:leading-loose">
                        {text}
                        <Cursor cursorStyle="✒️" />
                    </p>
                </motion.section>
            </div>
        );
    }
}
