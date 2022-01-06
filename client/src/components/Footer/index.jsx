import {ReactComponent as Github} from '../../images/github.svg'
import {ReactComponent as Linkedin} from '../../images/linkedin.svg'
import {Link} from "react-router-dom"
import {Footer} from './style'

function RenderFooter() {
    return (
        <Footer>
            <section className="sectionAboutAndLinks">
                <div className="divAbout">
                    <h4>About</h4>
                    <p>The purpose of this application is to accelerate your learning in algorithms and data structures through animations and simple explanations.</p>
                </div>
                <div className="divLinks">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/sorting">Sort Algorithm</Link></li>
                        <li><Link to="/sorting/info">Informations about Sort Algo</Link></li>
                    </ul>
                </div>
            </section>
            <section className="sectionLinks">
                <a href="https://www.linkedin.com/in/gabriel-cavalcante-causin/">
                    <svg>
                        <Linkedin/>
                    </svg>
                </a>
                <a href="https://github.com/gabrielcalk">
                    <svg>
                        <Github/>
                    </svg>
                </a>
            </section>
        </Footer>
    );
}

export default RenderFooter;