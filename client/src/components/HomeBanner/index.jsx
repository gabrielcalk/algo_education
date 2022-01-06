import {Carousel} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.css';
import setupPcImg from '../../images/setup_pc.jpg'
import womamPcImg from '../../images/womam_pc.jpg'

function RenderBannerHome(props) {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 h-75"
                    src={womamPcImg}
                    alt="Womam with Pc"
                />
                <Carousel.Caption>
                    <h3>Algorithm and Data Structures</h3>
                    <p>With examples and animations!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={setupPcImg}
                    alt="Computer Setup"
                />
                <Carousel.Caption>
                    <h3>Learn With Simple Explanations and Examples</h3>
                    <p>In portuguese and english!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default RenderBannerHome;