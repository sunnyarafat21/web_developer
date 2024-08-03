import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { WiStars } from 'react-icons/wi';
import { Route, Routes } from 'react-router-dom';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';
import Socialicon from './Components/Socialicon';
import './css/loader.css';
import About from './Pages/About';
import Academic from './Pages/Academic';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
export default function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loader />;
    } else {
        return (
            <>
                <div className=" relative max-w-full min-h-full md:min-h-screen lg:min-h-screen  grid grid-rows-12 gap-0  bg-cover  justify-center items-center   bg-transparent  ">
                    <motion.div
                        initial={{ y: -100 }}
                        animate={{
                            y: 0,
                        }}
                        transition={{
                            x: {
                                duration: 2,
                            },
                            duration: 1,
                        }}
                        className=" fixed z-50 t-0 w-screen row-span-1 row-end-2   flex justify-between self-start items-center  backdrop-blur-md bg-white/20  "
                    >
                        <div>
                            <WiStars fontSize="4rem" color="#FFD700" />
                        </div>
                        <p className="text-xl font-bold text-white text-center font-mono">
                            Web Developer
                        </p>
                        <Socialicon />
                    </motion.div>
                    <div className=" h-full  grid  row-start-2 row-end-12 justify-center items-center ">
                        <Routes>
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/academic" element={<Academic />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/skill" element={<Skills />} />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </div>
                </div>
                <div className=" h-28    fixed bottom-0 left-[50%] right-[50%]  flex max-h-[100px]  justify-center items-center">
                    <Navbar />
                </div>
            </>
        );
    }
}
