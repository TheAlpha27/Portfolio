import React from 'react'
import Section1 from './Section1'
import '../CSS/About.css'
import { Link } from 'react-router-dom';
import newsImg from '../components/images/newsApp.PNG'
import txtUtils from '../components/images/txtUtils.PNG'
import demo from '../components/images/demo.png'
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
            logo: 'https://cdn.sanity.io/images/599r6htc/production/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=670&h=670&q=75&fit=max&auto=format',
            level: 'Beginner',
            Certificate: 'None',
            CertificateLink: 'None'
        }
    ];
    const ServiceData = [
        {
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5d80ad108519711.5fbf7059e70ba.jpg',
            name: 'Portfolio Design and Creation',
            Description: "I will be your portfolio designer and creator. The portfolio website can be created using just HTML, CSS and Javascript or the frameworks like Bootstrap or React.js, Its your choice."
        },
        {
            image: 'https://designshack.net/wp-content/uploads/Creative-Red-Poster-Template.jpg',
            name: 'Poster Designing',
            Description: "I will be your poster/template designer for different events like competitions, parties, business etc. "
        },
        {
            image: 'https://www.formarketer.com/magazine/wp-content/uploads/2018/04/The-complete-guide-to-hire-a-Content-Manager-600x411.jpg',
            name: 'Website Manager',
            Description: 'I will be your website manager who will manage/change content on the website according to your will. Keeping the website up to date with the content provided by you will be my main task.'
        }
    ]
    const projectData = [
            {
                image: txtUtils,
                name: 'TextUtils',
                stack: 'React.js',
                Description: 'It is a react based project with text analytical logic like changing the text to upper/lower case, one click copy/clear, removing excess white-spaces etc.',
                projectLink: 'https://github.com/TheAlpha27/txtutils-cwh'
            },
            {
                // image: 'https://www.formarketer.com/magazine/wp-content/uploads/2018/04/The-complete-guide-to-hire-a-Content-Manager-600x411.jpg',
                image: newsImg,
                name: 'NewsMonkey',
                stack: 'React.js',
                Description: 'It is a react based news application which fetches news/data from news API. It uses features like infinite loading and category wise news etc.',
                projectLink: 'https://github.com/TheAlpha27/React-App-NewsMonkey-CWH'
            }
    ]
    return (
        <div className='bg'>
            <div className="about">
                <div className="imgDP">
                    <img src={demo} alt="" />
                </div>
                <div className="textAbout">
                    <h3>
                        I am ,
                    </h3>
                    <h1>Utsav Soni</h1>
                    <p className="details">
                        I'm a front-end web developer. I'm also familiar with back-end technologies such as node.js so technically I'm a MERN stack developer but I love front-end so yea! <br />
                        Apart from this I'm a competitive coder with good problem solving skills. <br /> In my free time I love to listen to songs, play guitar, cook new recipes, play video games, workout and most importantly I sleep!
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
                    {ServiceData.map(element => {
                        return <div className="ServiceCard">
                            <div className="ServiceImgContainer">
                                <img src={element.image} alt="Logo" />
                            </div>
                            <div className="ServiceDetail">
                                <p>
                                    <span>Service Name:</span>  {element.name}
                                </p>
                                <p>
                                    <span>Description:</span> {element.Description}
                                </p>
                                <div className="contactIcon">
                                    <Link to='/contact' id='serviceLink'>
                                        <span>
                                            Reach Out Here:
                                        </span>
                                        <i class="fas fa-lg fa-phone-square-alt"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    })}
                    <h1>
                        Projects:-
                    </h1>
                    {projectData.map(element => {
                        return <div className="projectCard">
                            <div className="ProjectImgContainer">
                                <img src={element.image} alt="Logo" />
                            </div>
                            <div className="projectDetail">
                                <p>
                                    <span>Project Name:</span>  {element.name}
                                </p>
                                <p>
                                    <span>Tech Stack:</span>  {element.stack}
                                </p>
                                <p>
                                    <span>Description:</span> {element.Description}
                                </p>
                                <div className="contactIcon">
                                    <a target="_blank" href={element.projectLink} id='serviceLink'>
                                        <span>
                                            Link to project
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    })}
                    <h1>
                        Work Experience:-
                    </h1>
                    <h1>
                        Achievements:-
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default About