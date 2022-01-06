import RenderBannerHome from "../HomeBanner";
import { Container } from "./style";
import gabrielImg from '../../images/gabriel_image.jpg'
import pcCodeImg from '../../images/pc_code.jpg'

function RenderHomePage() {
    return (
        <Container>
            <RenderBannerHome/>
            <section>
                <div>
                    <h2>About the Project</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro optio, nulla a vero mollitia laudantium libero obcaecati fugit rerum odit sapiente suscipit dicta voluptas aut expedita. Optio eius quibusdam tenetur?</p>
                </div>
                <div>
                    <img src={pcCodeImg} alt="code"/>
                </div>
            </section>

            <section>
                <div>
                    <img src={gabrielImg} alt="author"/>
                </div>
                <div>
                    <h2>About the Author</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, porro ad fugiat doloribus minus sapiente et eos in vitae praesentium, pariatur facere. Qui harum ratione expedita cum et quod sint?</p>
                </div>
            </section>
        </Container>
    );
}

export default RenderHomePage;