import './about.css';
import logo from './bg.png';

const About = () => {
    return (
        <div className='header'>
            <div className='mid'>
                <h1>
                    LET ME <span>INTRODUCE </span>MYSELF
                </h1>
                <br />
                <br />
                <div className='head'>
                    I fell in love with programming and I have at least learnt<br/> something, I think… 🤷‍♂️
                    <br />
                    <br />
                    
                </div>
                <div className='body'>
                    I am fluent in classics like
                    <i>
                        <b className="purple"> HTML, CSS and Javascript. </b>
                    </i>
                    <br />
                    <br />
                </div>
                <div className='foot'>
                    Whenever possible, I also apply my passion for developing<br/> products
                    with <b className="purple">Node.js</b>and
                    <i>
                        <b className="purple"> Modern Javascript Library and <br/> Frameworks</b>
                    </i>
                    &nbsp; like
                    <i>
                        <b className="purple"> React.js and Next.js</b>
                    </i>
                </div>
            </div>
            <div className='profile'>
                <img src={logo} alt="Background logo" />
            </div>
            <br/>
            <br/>
       </div>
     

    );
};

export default About;
