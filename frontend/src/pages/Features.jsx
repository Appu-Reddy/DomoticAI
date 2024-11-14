import React from 'react';
import { motion } from "framer-motion";

function Features({ right, title, description, imageUrl }) {
    return (
        <div className=''>
            <div className={`flex p-24 flex-wrap ${right ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-full md:w-[70%] p-5 text-xl">
                    <h1 className="text-5xl mb-2 font-bold text-start">{title}</h1>
                    <p className="font-semibold text-start">{description}</p>
                </div>
                <div className='w-full md:w-[30%]'>
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.8, scale: { duration: 0.2 } }}
                    >
                        <img
                            src={imageUrl}
                            alt={title}
                            className="h-72 rounded-lg shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Features;