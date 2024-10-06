import { motion } from 'framer-motion';
import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoIosSend, IoLogoWhatsapp } from 'react-icons/io';
import { MdMarkEmailUnread } from 'react-icons/md';
export default function Contact() {
    return (
        <div className=" p-10">
            <section className=" w-[20rem]  md:w-[45rem] lg:w-[55rem] grid  gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-6  drop-shadow-sm md:hover:drop-shadow-lg bg-opacity-60 backdrop-filter backdrop-blur-lg md:hover:backdrop-blur-md rounded-lg bg-white/10 hover:bg-white/20  border-solid border-2 border-whtie-500">
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
                        <p className=" text-start  font-bold text-slate-50 text-3xl">Let's Talk </p>
                        <p className="text-start  pr-5 py-3 font- text-slate-100 text-sm">
                            Have some big idea or brand to develop and need help? Then reach out
                            weeed love to hear about your project and provide help.
                        </p>
                    </div>

                    <div className=" grid grid-cols-1 justify-center items-start">
                        <div className="py-1 flex  ">
                            <div className="w-20 md:w-24 lg:w-26 h-10 md:h-12 lg:h-14 flex p-1 justify-center border-l-2 border-slate-100/50  items-center col-span-1 bg-slate-800 bg-opacity-30 drop-shadow-md backdrop-blur-lg ">
                                <MdMarkEmailUnread fontSize={22} className="text-slate-50" />
                            </div>
                            <div className="w-52 text-xs md:text-sm   md:w-56 lg:w-72 h-10 md:h-12 lg:h-14  text-slate-50 flex items-center py-1 px-2 bg-slate-700 bg-opacity-20 drop-shadow-sm backdrop-blur-md ">
                                yasirarafat1621@gmail.com
                            </div>
                        </div>
                        <div className="py-1 flex  ">
                            <div className="w-20 md:w-24 lg:w-26 h-10 md:h-12 lg:h-14 flex p-1 justify-center border-l-2 border-slate-100  items-center col-span-1 bg-slate-800 bg-opacity-30 drop-shadow-md backdrop-blur-lg ">
                                <BsFillTelephoneFill fontSize={20} className="text-slate-50" />
                            </div>
                            <div className="w-52 md:w-56 lg:w-72 h-10 md:h-12 lg:h-14  text-slate-50 flex items-center py-1 px-2 bg-slate-700 bg-opacity-20 drop-shadow-sm backdrop-blur-md ">
                                +880-1539-322-707
                            </div>
                        </div>
                        <div className="py-1 flex  ">
                            <div className="w-20 md:w-24 lg:w-26 h-10 md:h-12 lg:h-14 flex p-1 justify-center border-l-2 border-slate-100  items-center col-span-1 bg-slate-800 bg-opacity-30 drop-shadow-md backdrop-blur-lg ">
                                <IoLogoWhatsapp fontSize={22} className="text-slate-50" />
                            </div>
                            <div className="w-52 md:w-56 lg:w-72 h-10 md:h-12 lg:h-14  text-slate-50 flex items-center py-1 px-2 bg-slate-700 bg-opacity-20 drop-shadow-sm backdrop-blur-md ">
                                +880-1539-322-707
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
                    <p className="text-center text-gray-900 text-xl my-4"> Contact Form</p>
                    <input
                        className=" w-full my-2 bg-slate-300 h-10 md:h-10 lg:h-14 px-1 md:px-2 lg:px-2 text-[16px] md:text-[18px] lg:text-[20px] outline-none rounded-r-lg "
                        type="text"
                        name="Name"
                        id=""
                        placeholder="Name"
                    />
                    <br />
                    <input
                        className=" w-full my-2 bg-slate-300 h-10 md:h-10 lg:h-14 px-1 md:px-2 lg:px-2 text-[16px] md:text-[18px] lg:text-[20px] outline-none  rounded-r-lg   "
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                    />{' '}
                    <br />
                    <textarea
                        placeholder="Message"
                        className="resize-y rounded-md w-full  border-2 p-2  my-2 bg-slate-300 text-start h-20 md:h-32 lg:h-35  px-2  text-wrap text-[16px] outline-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="p-3 inline-flex mx-1 text-black hover:bg-purple-600 hover:text-slate-50 rounded-sm duration-200 backdrop-blur-md bg-transparent"
                    >
                        Send Messege
                        <IoIosSend fontSize={20} className="text-purple-600 hover:text-slate-50" />
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
