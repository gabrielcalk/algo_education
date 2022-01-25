import {StyleNav, Header} from './style'

function RenderNavBarPath({visualizeDijkstra}) {
    return (
        <Header>
                <StyleNav>   
                        <button onClick={() => {visualizeDijkstra()}}>Dijkstra's</button>
                </StyleNav>
        </Header>
    );
}

export default RenderNavBarPath;