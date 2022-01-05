import { Link } from "react-router-dom";
import { Container } from "./style";

function RenderSortingInfo(props) {
    return (
        <Container>
            <div>
                <h3>Info Sorting</h3>
            </div>
            
            <Link to="/sorting/info"><button>Learn More</button></Link>
        </Container>
    );
}

export default RenderSortingInfo;