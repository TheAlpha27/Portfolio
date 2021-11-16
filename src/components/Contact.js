import React from 'react'
import '../CSS/Contact.css'
import demo from '../components/images/demo.png'
import hand from '../components/images/hand.png'
import insta from '../components/images/insta.png'
import github from '../components/images/github.png'
import twitter from '../components/images/twitter.png'
import linkedin from '../components/images/linkedIn.png'
function Contact() {
    return (
        <div className="bgContact">
            <div className="leftDetails">
                <h1>
                    Connect With <span>Me</span>!
                </h1>
                <div>
                    Phone/Whatsapp<span>(Preferred)</span>: <span>9616083286</span>
                </div>
                <div>
                    Email: <span>utsav.soni.27@gmail.com</span>
                </div>
                <div className="resume">
                    Click here to download my <a target="_blank" href="https://drive.google.com/file/d/1qcIfqhND0jwdwViSeGTCHgjVGkySzyn4/view?usp=sharing">Resume</a>
                </div>
            </div>
            <div className="Imgcontainer">
                <img src={hand} alt="" className="hand" id="hand1" />
                <img src={hand} alt="" className="hand" id="hand2" />
                <img src={hand} alt="" className="hand" id="hand3" />

                <a target="_blank" href="https://github.com/TheAlpha27">
                    <img src={github} alt="Github.logo" id="github" className="logoCont" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/thealpha27/">
                    <img src={linkedin} alt="LinkedIn.logo" id="linkedin" className="logoCont" />
                </a>
                <a target="_blank" href="https://www.instagram.com/guycalledutsav/">
                    <img src={insta} alt="Instagram.logo" id="insta" className="logoCont" />
                </a>
                <a target="_blank" href="https://twitter.com/Utsav_soni27">
                    <img src={twitter} alt="Twitter.logo" id="twitter" className="logoCont" />
                </a>
                    <img className="imgContact" src={demo} alt="Display Picture" />
            </div>
        </div>
    )
}

export default Contact
