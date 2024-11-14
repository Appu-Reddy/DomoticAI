import React from 'react'
import { motion } from "framer-motion";
import { Check } from 'lucide-react';
function Esp_32() {
    return (
        <div>
            <div className={`pt-4 pl-20 pr-20 flex flex-wrap justify-center`}>
                <div className='w-1/2 min-w-[500px]' > 
                    <h1 className='text-4xl mb-3'>ESP-32</h1>
                    <ul className=''>

                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Dual-Core Processor:</h1>
                            </div>
                            Features a dual-core Tensilica LX6 processor for efficient multitasking.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Wireless Connectivity:</h1>
                            </div>
                            Supports Wi-Fi and Bluetooth (Classic and BLE), making it ideal for IoT applications.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Rich I/O Capabilities:</h1>
                            </div>
                            Offers GPIO, ADC, DAC, UART, SPI, and I2C interfaces for various sensors and peripherals.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Low Power Consumption:</h1>
                            </div>
                            Designed for low power, with several sleep modes for battery-operated devices.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Integrated Features:</h1>
                            </div>
                            Includes touch, temperature, and Hall effect sensors for versatile applications.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Development Support:</h1>
                            </div>
                            Compatible with Arduino IDE, Espressif’s IDF, and PlatformIO.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Security Features:</h1>
                            </div>
                            Provides secure boot, flash encryption, and random number generation for protection.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Community and Resources:</h1>
                            </div>
                            Large community support with libraries, tutorials, and forums.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Cost-Effective:</h1>
                            </div>
                            Affordable compared to other microcontrollers with similar features.
                        </li>
                        <li className='font-semibold mb-4'>
                            <div className='flex text-xl'>
                                <Check size={24} color="#4CAF50" />
                                <h1 className='font-bold mb-1 ml-2'>Versatile Applications:</h1>
                            </div>
                            Used in home automation, wearables, environmental monitoring, and more.
                        </li>

                    </ul>
                </div>
                <div className='flex justify-center items-center w-1/2  '>
                    <img className='min-h-[300px] min-w-[300px] h-[50%] rounded-lg' src="https://www.researchgate.net/profile/Padmasree-Ramineni/publication/374504846/figure/fig1/AS:11431281196333391@1696618476066/PIN-description-of-ESP32-1-Power-Supply-Pins-VCC-This-pin-serves-as-the-power-supply.jpg" alt="Esp32" />
                </div>
            </div>
        </div>
    )
}

export default Esp_32