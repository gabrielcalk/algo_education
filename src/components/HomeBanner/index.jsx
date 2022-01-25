import {Carousel} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.css';
import PcImg from '../../images/pc.jpg'
import womamPcImg from '../../images/womam_pc.jpg'
import { Image } from './style';

function RenderBannerHome(props) {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <Image
                    className="d-block w-100"
                    src={womamPcImg}
                    alt="Womam with Pc"
                />
                <Carousel.Caption>
                    <h3>Algorithm and Data Structures</h3>
                    <p>With examples and animations!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src={PcImg}
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