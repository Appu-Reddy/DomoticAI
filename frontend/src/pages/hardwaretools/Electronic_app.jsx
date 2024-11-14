import React from 'react'
import { motion } from "framer-motion";
import { Check } from 'lucide-react';
function Electronic_app() {
    return (
        <div>
            <div className={`pt-4 pl-20 pr-20 flex flex-wrap justify-center`}>
                <div className='w-1/2 min-w-[500px]' >
                    <h1 className='text-4xl mb-3'>Electronic-Appliances</h1>
                    <ul className=''>

                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Safety: </h1>
                            </div>
                            Electric appliances are often equipped with safety features such as automatic shut-offs, child locks, and insulation to prevent overheating or electric shocks. Proper maintenance and handling are essential to ensure safety.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Multi-Device Control: </h1>
                            </div>
                            Voice-enabled systems can manage multiple devices simultaneously, allowing users to control lighting, thermostats, entertainment systems, locks, and more with simple commands or routines.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Convenience and Accessibility: </h1>
                            </div>
                            Voice commands provide a hands-free way to control various home devices, making it easier for users, especially those with mobility challenges, to interact with appliances, lights, and security systems.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Integration with Virtual Assistants: </h1>
                            </div>
                            Most voice-enabled systems are compatible with popular virtual assistants like Amazon Alexa, Google Assistant, and Apple Siri, allowing seamless control of connected devices.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Energy Efficiency:</h1>
                            </div>
                            Many modern appliances are designed with energy efficiency in mind, helping users save on electricity costs and reducing environmental impact. Look for appliances with energy labels like Energy Star ratings.
                        </li>

                    </ul>
                </div>
                <div className='flex justify-center items-center w-1/2  '>
                    <img className='min-h-[300px] min-w-[300px] h-[50%] rounded-lg' src="https://dtlive.s3.ap-south-1.amazonaws.com/16149/DT_G39_Electronic-and-Household-Device.gif" alt="Esp32" />
                </div>
            </div>
        </div>
    )
}

export default Electronic_app