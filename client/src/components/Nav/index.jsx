import { Container, Logo } from "./style";
import {Link} from "react-router-dom"
import logo from '../../images/algo_logo.png'


function RenderNav(props) {
    return (
        <Container>
            <div>
                <Link to=""><Logo src={logo} /></Link>
                <h2>Algo Education</h2>
            </div>
            <div>
                <Link to="/sort/"><button>Sort</button></Link>
                <Link to="/search/"><button>Search</button></Link>
                <Link to="/path/"><button>Path</button></Link>
            </div>
        </Container>
    );
}

export default RenderNav;