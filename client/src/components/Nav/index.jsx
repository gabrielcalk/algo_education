import { Container, Logo } from "./style";
import {Link} from "react-router-dom"
import logo from '../../images/algo_logo.png'


function RenderNav(props) {
    return (
        <Container>
            <div>
                <Logo src={logo} />
                <h2>Algo Education</h2>
            </div>
            <div>
                <Link to="/sorting/"><button>Sort</button></Link>
                <Link to="/searching/"><button>Search</button></Link>
            </div>
        </Container>
    );
}

export default RenderNav;