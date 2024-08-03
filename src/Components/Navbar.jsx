/* eslint-disable react/display-name */
import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';
import { HiAcademicCap } from 'react-icons/hi2';
import { TiMessage } from 'react-icons/ti';
import { VscGithubProject } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom';

// const Navlist = [
//     {
//         name: 'About',
//         Icon: AiOutlineExclamationCircle,
//     },
//     {
//         name: 'Academic',
//         Icon: HiAcademicCap,
//     },
//     {
//         name: 'Home',
//         Icon: FaHome,
//     },
//     {
//         name: 'Contact',
//         Icon: TiMessage,
//     },
//     {
//         name: 'Projects',
//         Icon: VscGithubProject,
//     },
// ];

const ActiveStyle = {
    activeclass: 'text-[2rem]  text-blue-600  duration-300',
    simpleclass: 'text-[2rem]  text-white   duration-300 ',
};

// const NavItems = Navlist.map(
//     (list) => `<li>
// <${NavLink} to="/${list.name}">
//     <${list.Icon} className="hover: text-black duration-300" style=${{ style }} />
// <${NavLink}/>
// </li> `
// );

export default function () {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: 0 }}
            transition={{
                ease: 'linear',
                duration: 0.5,
                y: { duration: 0.5 },
            }}
            className=" backdrop-blur-md  bg-white/20 border-b-4    border-b-indigo-700  h-16 w-72 flex flex-col justify-items-center    rounded-lg "
        >
            <ul className=" flex flex-row gap-3  justify-center items-center p-3 ">
                {/* {NavItems} */}
                <motion.li
                    initial={{ opacity: 0, y: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 0 }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        y: { duration: 0.5 },
                    }}
                >
                    <NavLink to="/academic">
                        {({ isActive }) => (
                            <HiAcademicCap
                                className={
                                    isActive ? ActiveStyle.activeclass : ActiveStyle.simpleclass
                                }
                            />
                        )}
                    </NavLink>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 0 }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        y: { duration: 1 },
                    }}
                >
                    <NavLink to="/skill">
                        {({ isActive }) => (
                            <HiLightBulb
                                className={
                                    isActive ? ActiveStyle.activeclass : ActiveStyle.simpleclass
                                }
                            />
                        )}
                    </NavLink>
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 0 }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        y: { duration: 1.5 },
                    }}
                >
                    <NavLink to="/about">
                        {({ isActive }) => (
                            <AiOutlineExclamationCircle
                                className={
                                    isActive ? ActiveStyle.activeclass : ActiveStyle.simpleclass
                                }
                            />
                        )}
                    </NavLink>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 0 }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        y: { duration: 2 },
                    }}
                >
                    <NavLink to="/contact">
                        {({ isActive }) => (
                            <TiMessage
                                className={
                                    isActive ? ActiveStyle.activeclass : ActiveStyle.simpleclass
                                }
                            />
                        )}
                    </NavLink>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 0 }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        y: { duration: 2.5 },
                    }}
                >
                    <NavLink to="/projects">
                        {({ isActive }) => (
                            <VscGithubProject
                                className={
                                    isActive ? ActiveStyle.activeclass : ActiveStyle.simpleclass
                                }
                            />
                        )}
                    </NavLink>
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: -1000 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 0 }}
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                        ease: 'linear',
                        duration: 2,
                        y: { duration: 3 },
                    }}
                >
                    <NavLink to="/">
                        {({ isActive }) => (
                            <FaHome
                                className={
                                    isActive ? ActiveStyle.activeclass : ActiveStyle.simpleclass
                                }
                            />
                        )}
                    </NavLink>
                </motion.li>
            </ul>
        </motion.div>
    );
}
