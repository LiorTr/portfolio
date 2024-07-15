import "./Technologies.css";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

export function Technologies(): JSX.Element {
    const technologies = [
        { component: <RiReactjsLine className="text-7xl text-cyan-400" />, duration: 8.5 },
        { component: <TbBrandNextjs className="text-7xl" />, duration: 2 },
        { component: <SiMongodb className="text-7xl text-green-500" />, duration: 0.5 },
        { component: <FaNodeJs className="text-7xl text-green-500" />, duration: 3 },
        { component: <BiLogoPostgresql className="text-7xl text-sky-700" />, duration: 1.8 },
        { component: <FaAws className="text-7xl text-orange-500" />, duration: 3.5 },
    ];

    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: -10 }}
                        animate={{ y: [10, -10] }}
                        transition={{
                            duration: tech.duration,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        {tech.component}
                    </motion.div>
                ))}
            </motion.div>
        </div >
    );
}
