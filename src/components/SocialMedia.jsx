import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/harshitjain453" target="_blank" rel="noreferrer">
        <AiFillGithub size={40} />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
        <BsTwitter size={40} />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/harshit374"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin size={40} />
      </a>
    </div>
   
  </div>
);

export default SocialMedia;