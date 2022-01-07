import {StyleNav, Header} from './style'

function RenderNavBarPath({visualizeDijkstra}) {
    return (
        <Header>
            <header>
                <StyleNav>
                    <nav>     
                        <button onClick={() => {visualizeDijkstra()}}>Dijkstra's</button>
                    </nav>
                </StyleNav>
            </header>
        </Header>
    );
}

export default RenderNavBarPath;