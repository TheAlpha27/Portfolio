import React from 'react'
import Section1 from './Section1'
import '../CSS/About.css'

function About() {
    const frontEndData = [
        {
            name: 'HTML',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png',
            level: 'Intermediate',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'CSS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png',
            level: 'Intermediate',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'JavaScript',
            logo: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
            level: 'Intermediate',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'React.js',
            logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
            level: 'Intermediate',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'Bootstrap',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png',
            level: 'Intermediate',
            Certificate: 'None',
            CertificateLink: 'None'
        }
    ];
    const BackEndData = [
        {
            name: 'Node.js',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
            level: 'Beginner',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'Express.js',
            logo: 'https://shaktigurung.github.io/Portfolio-SG/img/skill/express.png',
            level: 'Beginner',
            Certificate: 'None',
            CertificateLink: 'None'
        }
    ];
    const dbData = [
        {
            name: 'MongoDB',
            logo: 'https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png',
            level: 'Beginner',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'MySQL',
            logo: 'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png',
            level: 'Beginner',
            Certificate: 'None',
            CertificateLink: 'None'
        }
    ];
    const languageData = [
        {
            name: 'C++',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png',
            level: 'Intermediate',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'C',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
            level: 'Intermediate',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'Java',
            logo: 'https://www.pngplay.com/wp-content/uploads/9/Java-Transparent-PNG.png',
            level: 'Beginner',
            Certificate: 'None',
            CertificateLink: 'None'
        }
    ];
    const designData = [
        {
            name: 'Adobe Photoshop',
            logo: 'https://pngimg.com/uploads/photoshop/photoshop_PNG11.png',
            level: 'Intermediate',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'Adobe Illustrator',
            logo: 'https://download.logo.wine/logo/Adobe_Illustrator/Adobe_Illustrator-Logo.wine.png',
            level: 'Beginner',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'Adobe After-Effects',
            logo: 'https://download.logo.wine/logo/Adobe_After_Effects/Adobe_After_Effects-Logo.wine.png',
            level: 'Beginner',
            Certificate: 'None',
            CertificateLink: 'None'
        },
        {
            name: 'Figma',
            logo: 'https://lh3.googleusercontent.com/proxy/j7yDDGshkWJgDtVWNiO4CPZCvjuuKudu-eV9_M7Pt_QHxzNCxuc0ZR4ReLHZtUf3alxsmm24v28H-Fa13EMvBbNcfk2uey2Qo0CPfNdGlM6FNWo3-6vLh3o',
            level: 'Beginner',
            Certificate: 'None',
            CertificateLink: 'None'
        }
    ];
    return (
        <div className='bg'>
            <div className="about">
                <div className="imgDP">
                    <img src="https://www.pngall.com/wp-content/uploads/4/Thinking-Man-PNG-Free-Download.png" alt="" />
                </div>
                <div className="textAbout">
                    <h3>
                        I am ,
                    </h3>
                    <h1>Utsav Soni</h1>
                    <p className="details">
                        I'm a front-end web developer. I'm also familiar with back-end technologies such as node.js so technically I'm a MERN stack developer but I love front-end so yea! <br />
                        Apart from this I'm a competetive coder with good problem solving skills. <br /> In my free time I love to listen to songs, play guitar, cook new recipies, play video games, workout and most importantly I sleep!
                    </p>
                </div>
            </div>
            <div className="contentBox">
                <div className="skillsContainer">
                    <h1>Skills and Technologies:-</h1>
                    <h2>
                        Front-end Technologies
                    </h2>
                    {frontEndData.map((element) => {
                        return <div className="skillCard">
                            <div className="logoContainer">
                                <img src={element.logo} alt="Logo" />
                            </div>
                            <div className="skillDetail">
                                <p>
                                    <span>Skill Name:</span>  {element.name}
                                </p>
                                <p>
                                    <span>Level:</span>  {element.level}
                                </p>
                                <p>
                                    <span>Certificate:</span>  {element.Certificate}
                                </p>
                            </div>
                        </div>
                    })}
                    <h2>
                        Back-end Technologies
                    </h2>
                    {BackEndData.map((element) => {
                        return <div className="skillCard">
                            <div className="logoContainer">
                                <img src={element.logo} alt="Logo" />
                            </div>
                            <div className="skillDetail">
                                <p>
                                    <span>Skill Name:</span>  {element.name}
                                </p>
                                <p>
                                    <span>Level:</span>  {element.level}
                                </p>
                                <p>
                                    <span>Certificate:</span>  {element.Certificate}
                                </p>
                            </div>
                        </div>
                    })}
                    <h2>
                        Data Base Technologies
                    </h2>
                    {dbData.map((element) => {
                        return <div className="skillCard">
                            <div className="logoContainer">
                                <img src={element.logo} alt="Logo" />
                            </div>
                            <div className="skillDetail">
                                <p>
                                    <span>Skill Name:</span>  {element.name}
                                </p>
                                <p>
                                    <span>Level:</span>  {element.level}
                                </p>
                                <p>
                                    <span>Certificate:</span>  {element.Certificate}
                                </p>
                            </div>
                        </div>
                    })}
                    <h2>
                        Coding Languages
                    </h2>
                    {languageData.map((element) => {
                        return <div className="skillCard">
                            <div className="logoContainer">
                                <img src={element.logo} alt="Logo" />
                            </div>
                            <div className="skillDetail">
                                <p>
                                    <span>Skill Name:</span>  {element.name}
                                </p>
                                <p>
                                    <span>Level:</span>  {element.level}
                                </p>
                                <p>
                                    <span>Certificate:</span>  {element.Certificate}
                                </p>
                            </div>
                        </div>
                    })}
                    <h2>
                        Designing
                    </h2>
                    {designData.map((element) => {
                        return <div className="skillCard">
                            <div className="logoContainer">
                                <img src={element.logo} alt="Logo" />
                            </div>
                            <div className="skillDetail">
                                <p>
                                    <span>Skill Name:</span>  {element.name}
                                </p>
                                <p>
                                    <span>Level:</span>  {element.level}
                                </p>
                                <p>
                                    <span>Certificate:</span>  {element.Certificate}
                                </p>
                            </div>
                        </div>
                    })}
                    <h1>
                        Services:-
                    </h1>
                    
                </div>
            </div>
        </div>
    )
}

export default About