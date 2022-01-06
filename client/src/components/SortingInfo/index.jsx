import { Link } from "react-router-dom";
import { Container } from "./style";

function RenderSortingInfo(props) {
    return (
        <Container>
            <div>
                <h3>Info Sorting</h3>
                <Link to="/sorting/info"><button>Learn More</button></Link>
            </div>
            
        </Container>
    );
}

export default RenderSortingInfo;