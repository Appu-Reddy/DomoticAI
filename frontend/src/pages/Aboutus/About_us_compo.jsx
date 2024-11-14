import React from 'react';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Checklink({ instagramLink, githubLink }) {
  return (
    <div className="social-links flex flex-wrap justify-center gap-5">
      {instagramLink && (
        <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="Insta align-middle justify-self-center">
          <FontAwesomeIcon icon={faInstagram} className='hover:text-[#E1306C] transform transition duration-300 hover:scale-110' style={{ height: "45px", width: "45px" }} />
        </a>
      )}
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="Github align-middle justify-self-center mt-[1px]">
          <FontAwesomeIcon icon={faGithub} className='hover:text-[purple] transform transition duration-300 hover:scale-110' style={{ height: "40px", width: "40px" }} />
        </a>
      )}
    </div>
  );
}

function About_us_compo({ name, tag, instagramLink, githubLink, text }) {
  return (
    <div className="details flex-col overflow-hidden rounded-lg #D57E4E min-w-[300px] w-[400px] shadow-custom-heavy text-white transform transition duration-300 hover:scale-110" style={{ background: "linear-gradient(0deg, #D57E4E,#D57E4E, #7B3F00, #7B3F00)" }} >
      <div className="pics ">
        <img className=' w-52 h-52 object-cover rounded-full justify-self-center p-4 '
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuk_Nj66tEd3SAuV3yxp6EkxVKUi14XYG9Ood29n8wF3H50vx039dETBvl9nYdvIVAJPIS8_OEhoq1r8mticFFmKPHIyWV-NS0ffzrZ_U"
          alt="Profile"
        />
      </div>
      <div className="details_of_person p-3 ">
        <h4 className='text-xl mb-2 bg-white w-fit justify-self-center p-2 rounded-full text-black shadow-2xl'>{name}</h4>
        <p className='mb-2 text-2xl underline underline-offset-2'>{text}</p>
        {/* <p className="Descri mb-2 ">{tag}</p> */}
        <Checklink instagramLink={instagramLink} githubLink={githubLink} />
      </div>
    </div>
  );
}

export default About_us_compo;