import React from 'react'
import '../CSS/Section1.css'
import { Link } from "react-router-dom"
import demo from '../components/images/demo.png'

function Section1() {
    const box1On = () => {
        document.getElementById('box1').style.display = 'block';
        document.getElementById('circle1').style.color = 'var(--cardTxt)';
        document.getElementById('circle1').style.transform = 'scale(0.8)';
    }
    const box2On = () => {
        document.getElementById('box2').style.display = 'block';
        document.getElementById('circle2').style.color = 'var(--cardTxt)';
        document.getElementById('circle2').style.transform = 'scale(0.8)';
    }
    const box1Off = () => {
        document.getElementById('box1').style.display = 'none';
        document.getElementById('circle1').style.color = 'var(--primaryTxt)';
        document.getElementById('circle1').style.transform = 'scale(1.7)';
    }
    const box2Off = () => {
        document.getElementById('box2').style.display = 'none';
        document.getElementById('circle2').style.color = 'var(--primaryTxt)';
        document.getElementById('circle2').style.transform = 'scale(1.7)';
    }
    return (
        <>
            <div className='main'>
                <div className="content-box">
                    <div className="txt">
                        <div className="sm-line"></div>
                        <p className="Name">
                            Utsav Soni
                        </p>
                        <p className="info">
                            <ul>
                                <li>Front-end web developer</li>
                                <li>Please visit the about section to know more</li>
                            </ul>
                        </p>
                    </div>
                    <div className="imgBox">
                        <div className="card1">
                            <Link id="box1" onMouseLeave={box1Off} to="/about">
                                About
                            </Link>
                            <i onMouseEnter={box1On} id="circle1" className="fas fa-address-card Icon"></i>
                        </div>
                        <div className="card2">
                            <Link onMouseLeave={box2Off} to="/contact" id="box2">
                                Contact
                            </Link>
                            <i onMouseEnter={box2On} id="circle2" className="fas fa-phone Icon"></i>
                        </div>
                        <div className="ring">
                            <img className='profile' src={demo} alt="" />
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Section1
