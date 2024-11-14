import React, { useState } from 'react'
import Features from './Features'
import HeroNav from '../HeroNav';
import Esp_32 from './hardwaretools/Esp_32';
import Esp_32_s3 from './hardwaretools/Esp_32_s3';
import Relay from './hardwaretools/Relay';
import Electronic_app from './hardwaretools/Electronic_app';

function Feature_control() {
    const [esp32,set_esp32]=useState(false);
    const [esp32s3,set_esp32s3]=useState(false);
    const [relay,set_relay]=useState(false);
    const [applience,set_applience]=useState(false)
    function handleEsp32() {
        console.log("esp32")
        if(esp32===false){
            set_esp32(true);
            set_applience(false)
            set_esp32s3(false)
            set_relay(flase);
        }else{
            set_esp32(false)
        }
    }
    function handleEsp32s3() {
        console.log("esp32_s3")
        if(esp32s3===false){
            set_esp32s3(true);
            set_esp32(false)
            set_relay(false)
            set_applience(false);
        }else{
            set_esp32s3(false)
        }
    }
    function handlerelay() {
        console.log("relay")
        if(relay===false){
            set_relay(true);
            set_esp32(false)
            set_esp32s3(false)
            set_applience(false)
        }else{
            set_relay(false)
        }
    }
    function handleAppliance() {
        console.log("appliance")
        if(applience===false){
            set_applience(true);
            set_esp32(false)
            set_relay(false)
            set_esp32s3(false)
        }else{
            set_applience(false)
        }
    }
    return (
        <div className='bg-[#EEE7DF]'>
            <div className='pt-4 pb-4 pl-14 pr-14'>
                <HeroNav />
            </div>
            <h1 className='text-center text-4xl mt-5 mb-3'>Features and Benefits</h1>
            <div className='accuracy_pannel w-full text-center'>
                <h1 className='text-5xl'></h1>
            </div>
            <div className='hardware_tools w-full text-center flex gap-8 pt-4 pb-4 pl-14 pr-14 flex-wrap mb-5'>
                <button className='p-4 bg-white shadow-xl text-black rounded-lg flex-grow transition transform duration-300 hover:scale-110 hover:bg-[#f0eeee]' onClick={handleEsp32}>ESP32</button>
                <button className='p-4 bg-white shadow-xl text-black rounded-lg flex-grow transition transform duration-300 hover:scale-110 hover:bg-[#f0eeee]' onClick={handleEsp32s3}>ESP32 S3/Seed Studio S3</button>
                <button className='p-4 bg-white shadow-xl text-black rounded-lg flex-grow transition transform duration-300 hover:scale-110 hover:bg-[#f0eeee]' onClick={handlerelay}>Relay</button>
                <button className='p-4 bg-white shadow-xl text-black rounded-lg flex-grow transition transform duration-300 hover:scale-110 hover:bg-[#f0eeee]' onClick={handleAppliance}>Electronic-appliences</button>
            </div>
            {esp32?<Esp_32/>:""}
            {esp32s3?<Esp_32_s3/>:""}
            {relay?<Relay/>:""}
            {applience?<Electronic_app></Electronic_app>:""}
            <Features
                right={true}
                title="Voice Enabled System"
                description="A voice-enabled appliance is a smart device that incorporates voice recognition technology, allowing users to control it through spoken commands. These appliances are equipped with built-in microphones, voice processing hardware, and AI-powered software, which can interpret natural language and respond accordingly. Common examples include smart speakers, thermostats, refrigerators, ovens, and lights."
                imageUrl="https://i.pinimg.com/originals/b6/7f/6f/b67f6f6b9eb6f2a3e910b8ea12a2fa83.gif"
            />
            <Features
                right={false}
                title="Switch Integrated with Website"
                description="A web-integrated switch allows users to control devices, such as lights or appliances, remotely through a web interface. This setup typically involves a microcontroller like an ESP32, connected to Wi-Fi, which can control a relay module to switch devices on or off. The ESP32 can either host a simple web server with a toggle button or connect to an MQTT broker for communication. Users interact with the switch via a web app or mobile interface, sending commands over the internet to the ESP32. This setup enables seamless remote control, providing a foundation for smart home and IoT applications."
                imageUrl="https://i.pinimg.com/originals/fb/ca/db/fbcadb475f180797a56006fea6b3c2c0.gif"
            />
            <Features
                right={true}
                title="Security and Safety"
                description="Implementing an IoT-based voice-enabled home automation system requires careful attention to security and safety. It is essential to protect voice commands and personal data during transmission by using encryption protocols like TLS. Strong user authentication methods, such as two-factor authentication and voice recognition, help prevent unauthorized access."
                imageUrl="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/SID_FB_001.gif"
            />
            <Features
                right={false}
                title="Maintenance"
                description="Maintaining an IoT-based voice-enabled home automation system is essential for reliability and security. Regular software updates help fix vulnerabilities and enhance performance. Network security checks, device monitoring, and routine testing ensure all components function correctly. Backing up settings and educating users about security best practices further protect the system. Overall, consistent maintenance helps prolong the system's lifespan and efficiency."
                imageUrl="https://riin.eu/wp-content/uploads/2017/02/www.GIFCreator.me_rfJUdz.gif"
            />
            <Features
                right={true}
                title="Live Monitoring"
                description="Live monitoring through a website allows users to oversee and manage real-time data from various devices and systems remotely. This feature is particularly valuable in IoT applications, such as home automation, industrial systems, and smart cities, where constant oversight is crucial for operational efficiency and safety."
                imageUrl="https://i.pinimg.com/originals/19/b2/8c/19b28c8372aaec65623f7ee7332e74be.gif"
            />
        </div>

    )
}

export default Feature_control;