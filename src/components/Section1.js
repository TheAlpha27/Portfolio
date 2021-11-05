import React from 'react'
import '../CSS/Section1.css'
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
                                <li>Front-end Web Developer</li>
                                <li>Problem Solver</li>
                            </ul>
                        </p>
                    </div>
                    <div className="imgBox">
                        <div className="card1">
                            <div onMouseLeave={box1Off} id="box1">About</div>
                            <i onMouseEnter={box1On} id="circle1" className="fas fa-address-card Icon"></i>
                        </div>
                        <div className="card2">
                            <div onMouseLeave={box2Off} id="box2">Contact</div><i onMouseEnter={box2On} id="circle2" className="fas fa-phone Icon"></i>
                        </div>
                        <div className="ring">
                            <img className='profile' src="https://www.pngall.com/wp-content/uploads/4/Thinking-Man-PNG-Free-Download.png" alt="" />
                        </div>
                    </div>
                </div>
                <svg className="waveD1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path id="waveD1" fill='#501650' fill-opacity="1" d="M0,96L24,133.3C48,171,96,245,144,277.3C192,309,240,299,288,277.3C336,256,384,224,432,181.3C480,139,528,85,576,69.3C624,53,672,75,720,101.3C768,128,816,160,864,176C912,192,960,192,1008,197.3C1056,203,1104,213,1152,229.3C1200,245,1248,267,1296,277.3C1344,288,1392,288,1416,288L1440,288L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
                <svg className="waveD2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path id="waveD2" fill="#8a228a" fill-opacity="1" d="M0,288L17.1,256C34.3,224,69,160,103,154.7C137.1,149,171,203,206,218.7C240,235,274,213,309,192C342.9,171,377,149,411,144C445.7,139,480,149,514,149.3C548.6,149,583,139,617,122.7C651.4,107,686,85,720,90.7C754.3,96,789,128,823,122.7C857.1,117,891,75,926,85.3C960,96,994,160,1029,181.3C1062.9,203,1097,181,1131,149.3C1165.7,117,1200,75,1234,58.7C1268.6,43,1303,53,1337,80C1371.4,107,1406,149,1423,170.7L1440,192L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>
            </div>
        </>
    )
}

export default Section1
