import React, { useState } from 'react'
import HeroNav from '../HeroNav';

function Contact_us(props) {
    const [cu_form_data, setcu_formdata] = useState({
        first_name: "",
        last_name: "",
        email: "",
        message: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setcu_formdata({
            ...cu_form_data,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(cu_form_data);
    };
    return (
        <div className="min-h-screen bg-[#EEE7DF]">
            <div className="pt-4 pb-4 pl-14 pr-14">
                <HeroNav />
            </div>
            <div className='Contactus_main flex-row flex-wrap pt-[50px] w-[100%] h-[100%] pb-[5%]' >
                <div className="heading_container_cu mb-[50px] text-center">
                    <i className="contact_us_heading  text-4xl">
                        Looking forward to hear from you 👀
                    </i>
                </div>

                <div className="input_container_contact_us flex flex-wrap text-center justify-center ml-[5%] mr-[5%] mb-[5%] p-[5%] border rounded-lg" style={{ backgroundColor: "#D57E4E" }}>
                    <div className="contact_us_background text-white flex flex-col gap-[20px] text-2xl items-center justify-center w-1/2" style={{ minWidth: "300px" }} >
                        <h1 className='contact_us_info_heading text-4xl' >Contact Us For More Info</h1>
                        <h1 className='bi bi-geo-alt'>  Executives Office Based in India</h1>
                        <h1 className='bi bi-telephone'> (+91) 9398792700</h1>
                        <h1 className='bi bi-envelope'>  Executives@moboai.in</h1>
                        <div className="link_container_cu">
                            <h1 className='mt-[5px] mb-[5px]'> Follow us</h1>
                            <div className="linking_cu_icons flex gap-[20px]">
                                <i className="bi bi-linkedin cursor-pointer text-3xl text-white rounded p-2">
                                </i>
                                <h1 className="bi bi-facebook cursor-pointer text-3xl text-white rounded p-2">
                                </h1>
                                <h1 className="bi bi-instagram cursor-pointer text-3xl rounded p-2" style={{ background: "linear-gradient(45deg, #D62976, #962FBF, #FCAF45, #F56040)", WebkitBackgroundClip: 'text', color: 'white' }}>
                                </h1>
                            </div>

                        </div>
                    </div>
                    <div className="contact_us_inputs flex flex-row  text-white border rounded-lg w-1/2" style={{ backgroundColor: "rgb(123, 63, 0)", border: "none", boxShadow: " 4px 4px 20px rgba(0, 0, 0, 0.5)", minWidth: "300px" }} >
                        <form action="" onChange={handleChange} className="contact_us_form flex flex-col gap-5  text-start p-[20px] w-full" >
                            <div className="heading_cu_inputs text-center text-2xl">
                                CONTACT US
                            </div>
                            <div className="fl_name_container_cu flex gap-[9%] w-full m-1">
                                <div className="first_container_cu w-[45%] flex flex-col gap-[10px] ">

                                    <h1 className="first_name ">FIRSTNAME</h1>
                                    <input type="text" className="first_name_input text-gray-900 pl-[10px]  w-full h-[40px] border rounded-lg  " placeholder='First Name...' />
                                </div>
                                <div className="last_container_cu w-[45%]  flex flex-col gap-[10px]">

                                    <h1 className="last_name ">LAST NAME</h1>
                                    <input type="text" className="last_name_input w-full pl-[10px] h-[40px] text-gray-900 border rounded-lg" placeholder='Last Name...' />
                                </div>
                            </div>
                            <div className="email_container_cu flex flex-col gap-[10px] m-1">

                                <h1 className="email ">Email</h1>
                                <input type="email" className=" contact_us_ramil_input w-full pl-[10px] text-gray-900 h-[40px] border rounded-lg" placeholder='Email...' />
                            </div>
                            <div className="message_cu_container flex flex-col gap-[10px] m-1">
                                <h1 className="cu_message_heading">
                                    Message
                                </h1>
                                <textarea name="" id="" className="contact_us_message w-full p-[10px] text-gray-900 h-[120px] min-h-[100px] border rounded-lg" placeholder='Message...'></textarea>

                            </div>
                            <button className="submit_container_cu  h-[35px] border rounded-lg mt-[10px] transform transition duration-300 hover:scale-105" onClick={handleSubmit} style={{ backgroundColor: "rgb(128, 128, 0)", boxShadow: " 4px 4px 20px rgba(0, 0, 0, 0.5)" }}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contact_us