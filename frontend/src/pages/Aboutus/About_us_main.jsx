import React from 'react'
import About_us_compo from './About_us_compo'
import HeroNav from '../../HeroNav'

function About_us_main() {
  return (
    <div className='about_us_main pt-4 pb-4 pl-14 pr-14 bg-[#EEE7DF]  '>
      <div className="">
        <HeroNav />
      </div>
      <div className='pt-9 text-center'>
        <div className="about_us_main_sub text-xl bg-center bg-no-repeat bg-cover h-[75vh] rounded-2xl " style={{ backgroundImage: "url(https://static.vecteezy.com/system/resources/previews/023/308/053/non_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg)" }}>
          <div className='p-5 bg-[rgba(0,0,0,0.2)] w-full h-full text-white md:flex md:align-middle md:items-center justify-center align-middle text-center rounded-2xl '>
            <h1 className='text-5xl w-1/2'>About Us</h1>
            <p className='about_us_text_back w-1/2 ' >The Internet of Things (IoT) is a network of interconnected physical devices, or "things," embedded with sensors, software, and other technologies to collect and exchange data with other devices over the internet. IoT enables objects—ranging from home appliances, wearable devices, vehicles, and industrial equipment—to communicate and respond to each other, creating smart environments and automated systems. By leveraging real-time data, IoT has applications across various fields like smart homes, healthcare, agriculture, transportation, and industrial automation, enhancing efficiency, productivity, and convenience.</p>
          </div>
        </div>
        <h1 className='pt-10 pb-4 text-4xl'>Our Story</h1>
        <div className='text'>
          <p>
            We never anticipated working on this project, as we were initially more interested in projects involving AI. However, as we progressed, things started to flow smoothly, and we successfully completed it. Along the way, we encountered numerous errors, which led us to debug, retrain models, adjust code, and learn new concepts we hadn’t encountered before. In the end, we made it happen!        </p>
        </div>
        <h1 className='pt-12 text-4xl  underline underline-offset-2'>Our Intellingent members</h1>
        <div className='allDetails flex  flex-wrap gap-16 justify-center pt-5 rounded-lg'>

          <About_us_compo name={"Greeshma"} tag={"gee-shama"} instagramLink={"https://www.instagram.com/greeshma_855/"} text="Failure is the stepping stone of success" />
          <About_us_compo name={"Anagha"} tag={"ang-anga-oka ur lo"} instagramLink={"https://www.instagram.com/anaghaksharma/"} text="Consistensy is the key for success" />
          <About_us_compo name={"Pavitra"} tag={"legend"} instagramLink={"https://www.instagram.com/mr_pavi_03"} text="Pavitra doest rings the name of girl it rings Hell " githubLink={"https://github.com/pavithrakumar22"} />
          <About_us_compo name={"Vivek"} tag={"destroyer"} instagramLink={"https://www.instagram.com/xenefer_vicky_1729/"} text="#One Piece Lover" />
          <About_us_compo name={"Apuroop"} imageUrl={""} tag={"appulodu"} text="Single piece hybrid nature" githubLink={"https://github.com/Appu-Reddy"} />
          <About_us_compo name={"Sushanth"} tag={"CEO"} instagramLink={"https://www.instagram.com/sushanth_1404/"} text="Never Give Up" githubLink={"https://github.com/Sushanth-777-creator"} />
          <About_us_compo name={"Krishna"} tag={"remo"} instagramLink={"https://www.instagram.com/_krishna_mouli_31/"} text="#Handsome" />
        </div>
      </div>

    </div>
  )
}

export default About_us_main;