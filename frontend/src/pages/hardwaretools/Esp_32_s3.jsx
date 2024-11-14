import React from 'react'
import { motion } from "framer-motion";
import { Check } from 'lucide-react';
function Esp_32_s3() {
    return (
        <div>
            <div className={`pt-4 pl-20 pr-20 flex flex-wrap justify-center`}>
                <div className='w-1/2 min-w-[500px]'>
                    <h1 className='text-4xl mb-3'>ESP-32-S3</h1>
                    <ul className="">

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Dual-Core Xtensa LX7 Processor:</h1>
                            </div>
                            Runs up to 240 MHz, ideal for demanding applications and multitasking.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">512 KB SRAM:</h1>
                            </div>
                            Enhanced RAM capacity for handling complex computations and data processing.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">AI Acceleration:</h1>
                            </div>
                            Supports vector instructions for AI processing, making it suitable for machine learning tasks.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Integrated Wi-Fi and Bluetooth 5.0 (BLE):</h1>
                            </div>
                            Dual-mode wireless connectivity for seamless IoT and mobile applications.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Low Power Modes:</h1>
                            </div>
                            Multiple low-power modes with ultra-low power co-processor for battery efficiency, essential for remote devices.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">USB OTG Interface:</h1>
                            </div>
                            Supports USB On-The-Go (OTG) functionality, allowing for direct USB device connections.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Enhanced Security:</h1>
                            </div>
                            Includes secure boot, hardware encryption, and cryptographic accelerators for robust data security.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">High-Resolution ADC:</h1>
                            </div>
                            Improved 12-bit ADC for more accurate analog signal readings
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Multiple GPIO Pins:</h1>
                            </div>
                            Features 45 programmable GPIO pins for a variety of peripherals and sensor connections.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">LCD and Camera Interfaces:</h1>
                            </div>
                            Supports LCD and DVP camera interfaces, allowing for visual output and image capture applications.
                        </li>

                    </ul>

                </div>
                <div className='flex justify-center items-center w-1/2  '>
                    <img className='min-h-[300px] min-w-[300px] h-[50%] rounded-lg' src="https://m.media-amazon.com/images/I/51hgdPB7atL.jpg" alt="Esp32" />
                </div>
            </div>
        </div>
    )
}

export default Esp_32_s3