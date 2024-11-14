import React from 'react'
import { motion } from "framer-motion";
import { Check } from 'lucide-react';
function Relay() {
    return (
        <div>
            <div className={`pt-4 pl-20 pr-20 flex flex-wrap justify-center`}>
                <div className='w-1/2 min-w-[500px]'>
                    <h1 className='text-4xl mb-3'>Relay</h1>
                    <ul className="">

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Optocoupler Isolation:</h1>
                            </div>
                            Many single relay modules include an optocoupler to provide electrical isolation between the relay circuit and the microcontroller, which protects the microcontroller from high voltages.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Input Control Pin (IN):</h1>
                            </div>
                            The relay module has an input pin to receive a signal from a microcontroller (like an ESP32 or Arduino) to activate or deactivate the relay. Typically, it operates with 3.3V or 5V logic, making it compatible with most microcontrollers.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Power Pins (VCC and GND):</h1>
                            </div>
                            The module usually includes VCC (5V) and GND pins to power the relay coil.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Single Relay Channel:</h1>
                            </div>
                            Designed to control one high-power device, such as a lamp, motor, or fan, it can handle high-voltage AC or DC loads.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Switching Capacity:</h1>
                            </div>
                            Relays are typically rated for 10A at 250V AC or 10A at 30V DC, making them capable of handling high-power applications.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Indicator LED:</h1>
                            </div>
                            Most relay modules have an LED that lights up when the relay is active, making it easier to see its current state.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Back EMF Protection:</h1>
                            </div>
                            A diode is often included in the module to protect against back EMF, which can be generated when the relay coil is de-energized, preventing damage to connected components.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Compact Size:</h1>
                            </div>
                            Single relay modules are compact and easy to fit into embedded projects or control boxes, allowing for integration in various enclosures or prototyping setups.
                        </li>

                        <li className="font-semibold mb-4">
                            <div className="flex text-xl">
                                <Check size={24} color="#4CAF50" />
                                <h1 className="font-bold mb-1 ml-2">Easy Mounting:</h1>
                            </div>
                            Relay modules typically have holes or mounting options for easy installation onto a board or inside a project box.
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
                    <img className='min-h-[300px] min-w-[300px] h-[50%] rounded-lg' src="https://adiy.in/wp-content/uploads/2022/04/A85128_1-CHANNEL-RELAY-BOARD-WITHOUT-OPTO-5V_3.jpg" alt="Esp32" />
                </div>
            </div>
        </div>
    )
}

export default Relay