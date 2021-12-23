import { Link } from "react-router-dom";

function RenderSortingInfo(props) {
    return (
        <div>
            <h3>Info Sorting</h3>
            <Link to="/sorting/algo">Learn more...</Link>
        </div>
    );
}

export default RenderSortingInfo;