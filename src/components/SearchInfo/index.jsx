import {Container, TitleLegend, DivLegend} from './style.js'

function RenderSearchInfo() {
    return (
        <>
        <TitleLegend>Legend Search Algorithm</TitleLegend>
        <Container>
            {/* Collums */}
            <div>
                <h3>Linear Search</h3>
                <p><DivLegend className="check_legend"></DivLegend> Numbers Checked</p>
                <p><DivLegend className="found_legend"></DivLegend> Number Found</p>
            </div>
            <div>
                <h3>Binary Search</h3>
                <p><DivLegend className="start_legend"></DivLegend> First Number</p>
                <p><DivLegend className="startAfter_legend"></DivLegend> Start Point</p>
                <p><DivLegend className="end_legend"></DivLegend> Last Number</p>
                <p><DivLegend className="endAfter_legend"></DivLegend> End Point</p>
                <p><DivLegend className="middle_legend"></DivLegend> Middle Number</p>
                <p><DivLegend className="found_legend"></DivLegend> Number Found</p>
            </div>
        </Container>
        </>
    );
}

export default RenderSearchInfo;