import RenderNumbers from "../../components/SearchNumbers";
import RenderVideoAndCode from "../../components/SearchVideoAndCode";

function RenderSearchPage(props) {
    return (
        <main>
            <RenderNumbers/>
            <RenderVideoAndCode/>
        </main>
    );
}

export default RenderSearchPage;